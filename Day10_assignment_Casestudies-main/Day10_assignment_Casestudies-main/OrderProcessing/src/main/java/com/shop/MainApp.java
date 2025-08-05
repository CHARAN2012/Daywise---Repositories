package com.shop;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import com.shop.config.AppConfig;
import com.shop.service.OrderService;
public class MainApp {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context =
            new AnnotationConfigApplicationContext(AppConfig.class);
        OrderService orderService = context.getBean(OrderService.class);
        System.out.println("----- TEST 1: SUCCESS CASE -----");
        orderService.placeOrder("ORD123");
        System.out.println("\n----- TEST 2: FAILURE CASE -----");
        try {
            orderService.placeOrder("INVALID_ID");
        } catch (Exception e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
        context.close();
    }
}