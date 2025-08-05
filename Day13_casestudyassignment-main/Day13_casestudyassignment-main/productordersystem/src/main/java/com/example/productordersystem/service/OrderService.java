package com.example.productordersystem.service;
import com.example.productordersystem.entity.Order;
import com.example.productordersystem.entity.Product;
import com.example.productordersystem.repository.OrderRepository;
import com.example.productordersystem.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
@Service
public class OrderService {
    private final OrderRepository orderRepo;
    private final ProductRepository productRepo;
    public OrderService(OrderRepository orderRepo, ProductRepository productRepo) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
    }
    public Order placeOrder(Long productId, int quantity) {
        Product product = productRepo.findById(productId).orElseThrow();
        if (product.getAvailableQuantity() < quantity) {
            throw new RuntimeException("Not enough stock");
        }
        product.setAvailableQuantity(product.getAvailableQuantity() - quantity);
        productRepo.save(product);
        Order order = new Order();
        order.setProduct(product);
        order.setOrderDate(LocalDate.now());
        order.setQuantityOrdered(quantity);
        return orderRepo.save(order);
    }
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
}