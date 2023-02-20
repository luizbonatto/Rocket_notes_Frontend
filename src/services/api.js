import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocketnotes-apibr.onrender.com"
})