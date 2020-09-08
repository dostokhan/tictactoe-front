import axios from 'axios';

import { API_HOST } from 'constants/config';

const axiosInstance = axios.create({
  baseURL: API_HOST,
  timeout: 30000
});

export default axiosInstance;
