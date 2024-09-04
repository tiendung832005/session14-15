import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { error } from 'console'
// viết hàm lấy dữ liệu
const getData = (url:string)=>{
    axios.get(url)
    .then(res=>{
        return res.data
    })

}
export default function page() {
    const {data, error} = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        getData
    )
    if(error) return <div>Quá trình đẩy dữ liệu thất bại</div>
    if(!data) return <div>Đang tải dữ liệu....</div>
  return (
    <div>fetching data với thư viện swr
        
    </div>
  )
}
