import React from 'react'

export async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return posts
  
}
export default async function Bai1() {
    const posts = await getPosts()

  return (
    <div>Danh sách bài viết
        <ul>
        {posts.map((item:any) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
        </ul>
    </div>
  )
}
