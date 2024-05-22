import axios from "axios";

export const backend = axios.create({
  baseURL: "https://villamar-backend.onrender.com",
});

