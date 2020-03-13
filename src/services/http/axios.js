import axios from "axios";

import { authRequest, authResponse } from "./interceptors";

import CONFIG from "../../config";

const axiosInstance = axios.create({
  baseURL: CONFIG.API_URL
});

axiosInstance.interceptors.request.use(authRequest);
axiosInstance.interceptors.response.use(...authResponse);

export default axiosInstance;
