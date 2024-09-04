import React from 'react'
import axios from 'axios'
export async function getWeather(){
    const res = await axios.get('https://api.open-meteo.com');
    const weather = res.data.current_weather;
    return weather
  
}
export default async function Bai3() {
    const weather = await getWeather()

  return (
    <div>Danh sách sản phẩm
        <ul>
        {weather.map((item:any) => (
          <li>
            <h1>Thông tin thời tiết hiện tại</h1>
            <p>Nhiệt độ: {weather.temperature}°C</p>
            <p>Tình trạng thời tiết: {weather.weathercode}</p>
          </li>
        ))}
        </ul>
    </div>
  )
}
