import React from 'react';
import axios from 'axios';

export async function getError() {
  let errorMessage = null;
  let data = null;

  try {
    const res = await axios.get('https://example.com/invalid-endpoint');
    data = res.data;
  } catch (error:any) {
    if (error.response) {
      if (error.response.status === 404) {
        errorMessage = 'Lỗi 404: Trang không tồn tại';
      } else if (error.response.status === 500) {
        errorMessage = 'Lỗi 500: Lỗi máy chủ.';
      } else {
        errorMessage = `Lỗi ${error.response.status}: ${error.response.statusText}`;
      }
    }
  }

  return data
}
export default async function Bai4() {
    const data = await getError();
    const errorMessage = await getError();
  if (errorMessage) {
    return (
      <div>
        <h1>Đã xảy ra lỗi</h1>
        <p>{errorMessage}</p>
      </div>
    );
  }
}
