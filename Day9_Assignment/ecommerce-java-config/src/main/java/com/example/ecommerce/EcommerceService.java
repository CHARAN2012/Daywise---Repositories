package com.example.ecommerce;

public class EcommerceService {
    private Product product;
    private Order order;
    private Payment payment;

    public EcommerceService(Product product, Order order, Payment payment) {
        this.product = product;
        this.order = order;
        this.payment = payment;
    }

    public void runEcommerceFlow() {
        product.addProduct();
        product.listProducts();
        order.createOrder();
        order.cancelOrder();
        payment.processPayment();
        payment.refundPayment();
    }
}
