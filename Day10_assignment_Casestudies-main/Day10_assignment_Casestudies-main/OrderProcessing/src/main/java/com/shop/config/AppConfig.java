package com.shop.config;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
@Configuration
@ComponentScan(basePackages = "com.shop")
@EnableAspectJAutoProxy
public class AppConfig {
}