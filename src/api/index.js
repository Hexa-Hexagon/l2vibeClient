import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000/"
})



export const getArticles = async() => {
    return await api.get('/articles');
}

export const getArticle = async(id) => {
    return await api.get(`/articles/${id}`);
}

export const getServers = async() => {
    return (await api.get('/servers')).data;
}
export const getBanners = async() => {
    return await api.get('/banners');
}
export const postPassword = async(password) => {
    return api.post(`/password`, {
        password: password
    });
}

export const createServer = async(data) => {
    await api.post('/servers', data);
}

export const createArticle = async(data) => {
    await api.post('/articles', data);
}

export const createBanner = async(data) => {
    await api.post('/banners', data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export const editServer = async(newData, id) => {
    return await api.patch(`/servers/${id}`, newData);
}

export const editBanner = async(newData, id) => {
    return await api.put(`/banners/${id}`, newData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export const editArticle = async(newData, id) => {
    return await api.patch(`/articles/${id}`, newData);
}

export const editLinkBanner = async(newData, id) => {
    return await api.patch(`/banners/${id}`, newData);
}

export const deleteServer = async(id) => {
    return await api.delete(`/servers/${id}`);
}

export const deleteBanner = async(id) => {
    return await api.delete(`/banners/${id}`);
}

export const deleteArticle = async(id) => {
    return await api.delete(`/articles/${id}`);
}


export default api;