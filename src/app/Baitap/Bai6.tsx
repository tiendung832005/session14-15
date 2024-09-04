import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}
export default function Bai6() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setUsers(response.data);
      }
      fetchUsers();
    }, []);
  
    if (loading) {
      return <p>Đang tải...</p>;
    }
  
    if (error) {
      return <p>Lỗi: {error}</p>;
    }
  
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Địa chỉ: {`${user.address}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
