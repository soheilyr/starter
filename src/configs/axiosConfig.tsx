import axios from "axios";

const Fetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default Fetch;
