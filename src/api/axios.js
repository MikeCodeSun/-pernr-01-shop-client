import axios from "axios";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

export const axiosApi = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
  headers: { authorization: `Bearer ${token}` },
});
