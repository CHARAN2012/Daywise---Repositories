package com.example.productordersystem.service;
import com.example.productordersystem.entity.Product;
import com.example.productordersystem.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ProductService {
    private final ProductRepository repo;
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }
    public Product addProduct(Product product) {
        return repo.save(product);
    }
    public List<Product> getAllProducts() {
        return repo.findAll();
    }
    public Product updateStock(Long productId, int qty) {
        Product p = repo.findById(productId).orElseThrow();
        p.setAvailableQuantity(qty);
        return repo.save(p);
    }
}