package com.shop.aspect;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
@Aspect
@Component
public class OrderLoggingAspect {
    @Before("execution(* com.shop.service.OrderService.*(..))")
    public void logBefore() {
        System.out.println("[LOG] Method started");
    }
    @AfterReturning("execution(* com.shop.service.OrderService.*(..))")
    public void logAfterReturning() {
        System.out.println("[LOG] Method executed successfully");
    }
    @AfterThrowing("execution(* com.shop.service.OrderService.*(..))")
    public void logAfterThrowing() {
        System.out.println("[LOG] Exception occurred in method");
    }
    @After("execution(* com.shop.service.OrderService.*(..))")
    public void logAfter() {
        System.out.println("[LOG] Method execution finished");
    }
}