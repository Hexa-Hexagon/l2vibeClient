import axios from 'axios';

const api = axios.create({
    baseURL: "https://serverexpress.l2vibe.com/"
})



export const getArticles = async() => {
    return await api.get('/articles');
}
export const getServers = async() => {
    return await api.get('/servers');
}
export const getBanners = async() => {
    return await api.get('/banners');
}
export const getPassword = async(password) => {
    return api.get(`/password/${password}`);
}

export const createServer = async(data) => {
    await api.post('/', data);
}

export const createBanner = async(data) => {
    await api.post('/banners', data);
}

export const editServer = async(newData, id) => {
    return await api.put(`/${id}`, newData);
}

export const editBanner = async(newData, id) => {
    return await api.put(`/banners/${id}`, newData);
}

export const deleteServer = async(id) => {
    await api.delete(`/${id}`);
}

export const deleteBanner = async(id) => {
    await api.delete(`/banners/${id}`);
}


export default api;