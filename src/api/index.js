import axios from 'axios';

const api = axios.create({
    baseURL: "http://31.131.26.237:5000/"
})

export default api;