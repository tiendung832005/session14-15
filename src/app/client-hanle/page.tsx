"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            let res = await axios.get("http://localhost300/api");
            setUsers(res.data);
            
        }
        getData();
    },[])
  return (
    <div>page   
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
