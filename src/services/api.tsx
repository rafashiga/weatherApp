import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.appid = '41f9a140db9fe6647483a16d45eaaa5b';
  return config;
});

export default api;
