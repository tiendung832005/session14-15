import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Bai5() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        setProducts(data);
    }
    fetchProducts();
  },[]);

  if (loading) {
    return <p>Đang tải...</p>;
  }

  if (error) {
    return <p>Lỗi: {error}</p>;
  }

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Giá: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
