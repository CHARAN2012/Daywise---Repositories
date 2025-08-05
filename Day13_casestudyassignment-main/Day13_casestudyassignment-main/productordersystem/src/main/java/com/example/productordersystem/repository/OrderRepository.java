package com.example.productordersystem.repository;
import com.example.productordersystem.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
public interface OrderRepository extends JpaRepository<Order, Long> {
	
}