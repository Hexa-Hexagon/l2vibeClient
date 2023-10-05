import axios from 'axios';

const api = axios.create({
    baseURL: "https://serverexpress.l2vibe.com/"
})

export default api;