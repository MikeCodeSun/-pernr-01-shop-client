import axios from "axios";

// const getToken = () => {
//   let token = localStorage.getItem("token")
//     ? localStorage.getItem("token")
//     : "";
//   console.log(token);
//   return { authorization: `Bearer ${token}` };
// };
const axiosApi = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});

axiosApi.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";

  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default axiosApi;
