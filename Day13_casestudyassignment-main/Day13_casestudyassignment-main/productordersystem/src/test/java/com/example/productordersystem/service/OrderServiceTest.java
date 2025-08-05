package com.example.productordersystem.service;
import com.example.productordersystem.entity.Order;
import com.example.productordersystem.entity.Product;
import com.example.productordersystem.repository.OrderRepository;
import com.example.productordersystem.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
class OrderServiceTest {
    private final ProductRepository productRepo = mock(ProductRepository.class);
    private final OrderRepository orderRepo = mock(OrderRepository.class);
    private final OrderService service = new OrderService(orderRepo, productRepo);
    @Test
    void testPlaceOrderSuccess() {
        Product product = new Product();
        product.setProductId(1L);
        product.setAvailableQuantity(10);
        when(productRepo.findById(1L)).thenReturn(Optional.of(product));
        when(orderRepo.save(any())).thenReturn(new Order());
        Order order = service.placeOrder(1L, 5);
        verify(productRepo).save(product);
        assertNotNull(order);
    }
    @Test
    void testPlaceOrderFailsDueToInsufficientStock() {
        Product product = new Product();
        product.setAvailableQuantity(2);
        when(productRepo.findById(1L)).thenReturn(Optional.of(product));
        RuntimeException ex = assertThrows(RuntimeException.class, () -> {
            service.placeOrder(1L, 5);
        });
        assertEquals("Not enough stock", ex.getMessage());
    }
}