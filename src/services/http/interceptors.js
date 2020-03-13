import { navigate } from "@reach/router";

export function authRequest(config) {
  const token = localStorage.getItem("token");
  if (token) {
    //config.headers.Authorization = `${token.token_type} ${token.access_token}`;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

export const authResponse = [
  function(response) {
    return response;
  },
  function(error) {
    if (error && error.response && 401 === error.response.status) {
      localStorage.removeItem("token");
      // navigate("/logout");
    }
    return Promise.reject(error);
  }
];
