import axios from "axios";

const Fetch = axios.create({
    baseURL:process.env.BASE_URL
})

export default Fetch