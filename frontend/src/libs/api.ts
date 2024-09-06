import axios from "axios";

export const ApiHomePage = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});
