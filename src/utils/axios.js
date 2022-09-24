import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://localhost:3000",
});

export default customFetch;
