package com.example.productordersystem.controller;
import com.example.productordersystem.entity.Order;
import com.example.productordersystem.service.OrderService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService service;
    public OrderController(OrderService service) {
        this.service = service;
    }
    @PostMapping
    public Order placeOrder(@RequestParam Long productId, @RequestParam int quantity) {
        return service.placeOrder(productId, quantity);
    }
    @GetMapping
    public List<Order> getAllOrders() {
        return service.getAllOrders();
    }
}