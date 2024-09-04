import React from 'react'

export async function getProducts(){
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    return products
  
}
export default async function Bai2() {
    const products = await getProducts()

  return (
    <div>Danh sách sản phẩm
        <ul>
        {products.map((item:any) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Giá: ${item.price}</p>
          </li>
        ))}
        </ul>
    </div>
  )
}
