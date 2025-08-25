import React from 'react';
import './ClothStore.css';

const ClothStore = () => {
  const products = [
    { productId: 101, productName: "T-Shirt", description: "Cotton material", price: 499, sizes: ["S", "M", "L", "XL"] },
    { productId: 102, productName: "Jeans", description: "Slim fit denim", price: 1299, sizes: ["M", "L", "XL"] },
    { productId: 103, productName: "Jacket", description: "Winter collection", price: 2499, sizes: ["L", "XL"] },
    { productId: 104, productName: "Hoodie", description: "Cotton blend", price: 899, sizes: ["S", "M", "L"] },
    { productId: 105, productName: "Shorts", description: "Athletic wear", price: 599, sizes: ["S", "M", "L", "XL"] },
    { productId: 106, productName: "Dress Shirt", description: "Formal wear", price: 799, sizes: ["M", "L", "XL"] },
    { productId: 107, productName: "Sweater", description: "Wool blend", price: 1199, sizes: ["S", "M", "L"] },
    { productId: 108, productName: "Skirt", description: "Summer collection", price: 699, sizes: ["S", "M"] },
    { productId: 109, productName: "Blazer", description: "Business casual", price: 1999, sizes: ["M", "L", "XL"] },
    { productId: 110, productName: "Polo Shirt", description: "Sports material", price: 649, sizes: ["S", "M", "L", "XL"] }
  ];

  return (
    <div className="cloth-store">
      <h2>Cloth Store Products</h2>
      
      {products.length === 0 ? (
        <p className="no-products">No Products Available</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price (₹)</th>
              <th>Available Sizes</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td className="price">₹{product.price.toLocaleString()}</td>
                <td>{product.sizes.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClothStore;