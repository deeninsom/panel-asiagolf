import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("@wirasana-token");
//     if (token) {
//       config.headers["x-access-token"] = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
