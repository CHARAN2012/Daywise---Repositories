import React, { useState, useEffect } from 'react';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      let url = 'https://fakestoreapi.com/products';
      if (category !== 'all') {
        url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 Product Catalog</h1>

      {/* Category Selector */}
      <div style={{ marginBottom: '20px' }}>
        <label>Select Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading && <p>Loading products...</p>}

      {/* Error State */}
      {error && (
        <div>
          <p style={{ color: 'red' }}>Error: {error}</p>
          <button onClick={() => setCategory(category)}>Retry</button>
        </div>
      )}

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {!loading && !error && products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
            <h4>{product.title}</h4>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;