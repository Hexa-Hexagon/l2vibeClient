import axios from "axios";


const api = axios.create({
    baseURL: "https://api.l2vibe.com/"
});

let token = localStorage.getItem("accessToken") || null;


export const setAuthHeader = (accessToken) => {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    token = accessToken;
    localStorage.setItem("accessToken", accessToken);
};

export const getArticles = async () => {
    return await api.get("/articles");
};

export const getArticle = async (id) => {
    return await api.get(`/articles/${id}`);
};

export const getServers = async () => {
    return (await api.get("/servers")).data;
};
export const getBanners = async () => {
    return await api.get("/banners");
};
export const postPassword = async (password) => {
    return api.post(`/password`, {
        password: password,
        token: token
    });
};

export const createServer = async (data) => {
    setAuthHeader(localStorage.getItem("accessToken"));
    await api.post("/servers", data);
};

export const createArticle = async (data) => {
    setAuthHeader(localStorage.getItem("accessToken"));
    await api.post("/articles", data);
};

export const createBanner = async (data) => {
    setAuthHeader(token);
    await api.post("/banners", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};

export const editServer = async (newData, id) => {
    setAuthHeader(token);
    return await api.patch(`/servers/${id}`, newData);
};

export const editBanner = async (newData, id) => {
    setAuthHeader(token);
    return await api.put(`/banners/${id}`, newData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};

export const editArticle = async (newData, id) => {
    setAuthHeader(token);
    return await api.patch(`/articles/${id}`, newData);
};

export const editLinkBanner = async (newData, id) => {
    setAuthHeader(token);
    return await api.patch(`/banners/${id}`, newData);
};

export const deleteServer = async (id) => {
    setAuthHeader(token);
    return await api.delete(`/servers/${id}`);
};

export const deleteBanner = async (id) => {
    setAuthHeader(token);
    return await api.delete(`/banners/${id}`);
};

export const deleteArticle = async (id) => {
    setAuthHeader(token);
    return await api.delete(`/articles/${id}`);
};


export default api;