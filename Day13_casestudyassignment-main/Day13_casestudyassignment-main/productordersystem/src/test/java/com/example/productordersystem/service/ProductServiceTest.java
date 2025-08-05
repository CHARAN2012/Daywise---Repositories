package com.example.productordersystem.service;
import com.example.productordersystem.entity.Product;
import com.example.productordersystem.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
class ProductServiceTest {
    private final ProductRepository repo = mock(ProductRepository.class);
    private final ProductService service = new ProductService(repo);
    @Test
    void testAddProduct() {
        Product p = new Product();
        p.setName("Phone");
        when(repo.save(p)).thenReturn(p);
        Product result = service.addProduct(p);
        assertEquals("Phone", result.getName());
    }
    @Test
    void testGetAllProducts() {
        when(repo.findAll()).thenReturn(List.of(new Product()));
        assertEquals(1, service.getAllProducts().size());
    }
    @Test
    void testUpdateStock() {
        Product p = new Product();
        p.setAvailableQuantity(10);
        when(repo.findById(1L)).thenReturn(Optional.of(p));
        when(repo.save(any())).thenReturn(p);
        Product updated = service.updateStock(1L, 20);
        assertEquals(20, updated.getAvailableQuantity());
    }
}