import axios from 'axios';
import cookies from 'react-cookies';

// 요청을 하기 위한 ajax

export default function apiRequest(
  url,
  method = 'GET',
  data = null,
  headers = null,
) {
  //요청 URL

  // 외부 API인 경우 http(s)로 시작, localhost:3001 고정
  if (!/^http[s]?/i.test(url)) {
    url = process.env.REACT_APP_API_URL + url;
  }

  //요청 데이터(data) 있고, mehtod가 GET 방식 -> 쿼리스트링으로 변환
  if (method.toUpperCase() === 'GET' && data) {
    const searchParams = new URLSearchParams(data);
    url += `?${searchParams.toString()}`;
    data = null;
  }
  const token = cookies.load('token');
  if (token) {
    headers = headers || {};
    headers.Authorization = `Beaner ${token}`;
  }

  return axios({
    method,
    url,
    data,
    headers,

    validateStatus: (status) => status < 500,
  });
}
