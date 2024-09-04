import React from 'react'
async function getData(){
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json;
}
export default async function Bai7() {
    const products = await getData()
  return (
    <div>Bai7
    
    </div>
  )
}
