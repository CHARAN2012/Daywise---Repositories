package com.example.productordersystem.controller;
import com.example.productordersystem.entity.Product;
import com.example.productordersystem.service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService service;
    public ProductController(ProductService service) {
        this.service = service;
    }
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return service.addProduct(product);
    }
    @GetMapping
    public List<Product> getAll() {
        return service.getAllProducts();
    }
    @PutMapping("/{id}/stock")
    public Product updateStock(@PathVariable Long id, @RequestParam int qty) {
        return service.updateStock(id, qty);
    }
}