import axios from 'axios';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYW9AZ21haWwuY29tIiwiZXhwIjoxNTk0MDYwMzE3fQ.5KlsXS917pSe3Tf_ORtmHLuFDpWR_RwqKuZGee0_fw72QRgE_s1K0K56LPd5_FAV8U-4a-RYBBE-iKig8uFtjw';

const api = axios.create({
  baseURL: 'https://pweb-locadora.herokuapp.com',
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'true',
  },
});

export default api;
