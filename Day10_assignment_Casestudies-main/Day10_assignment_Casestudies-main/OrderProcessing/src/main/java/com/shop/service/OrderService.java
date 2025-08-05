package com.shop.service;
import org.springframework.stereotype.Component;
@Component 
public class OrderService {
    public void addToCart(String product) {
        System.out.println("Adding product to cart: " + product);
    }
    public void placeOrder(String orderId) {
        if ("INVALID_ID".equals(orderId)) {
            throw new RuntimeException("OrderNotFoundException");
        }
        System.out.println("Order placed successfully for: " + orderId);
    }
    public void cancelOrder(String orderId) {
        System.out.println("Order cancelled: " + orderId);
    }
}