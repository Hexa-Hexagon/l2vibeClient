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

export const getArticles = async (page) => {
    try {
        return await api.get(`/articles/${page - 1}`);

    } catch (e) {
        console.error(e.message);
    }
};

export const getArticle = async (id) => {
    try {
        return await api.get(`/articles/id/${id}`);
    } catch (e) {
        console.error(e.message);
    }
};

export const getServers = async () => {
    try {
        return (await api.get("/servers")).data;
    } catch (e) {
        console.error(e.message);
    }
};
export const getBanners = async () => {
    try {
        return await api.get("/banners");

    } catch (e) {
        console.error(e.message);
    }
};
export const postPassword = async (password) => {
    try {
        return api.post(`/password`, {
            password: password,
            token: token
        });
    } catch (e) {
        console.error(e.message);
    }

};

export const createServer = async (data) => {
    try {
        setAuthHeader(token);
        await api.post("/servers", data);
    } catch (e) {
        console.error(e.message);
    }

};

export const createArticle = async (data) => {
    try {
        setAuthHeader(token);
        await api.post("/articles", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (e) {
        console.error(e.message);
    }

};

export const createBanner = async (data) => {
    try {
        setAuthHeader(token);
        await api.post("/banners", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (e) {
        console.error(e.message);
    }

};

export const editServer = async (newData, id) => {
    try {
        setAuthHeader(token);
        return await api.patch(`/servers/${id}`, newData);
    } catch (e) {
        console.error(e.message);
    }

};

export const editBanner = async (newData, id) => {
    try {
        setAuthHeader(token);
        return await api.put(`/banners/${id}`, newData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (e) {
        console.error(e.message);
    }

};

export const editArticle = async (newData, id) => {
    try {
        setAuthHeader(token);
        return await api.patch(`/articles/${id}`, newData);
    } catch (e) {
        console.error(e.message);
    }

};

export const editImageArticle = async (newData, id) => {
    try {
        setAuthHeader(token);
        return await api.put(`/articles/${id}`, newData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (e) {
        console.error(e.message);
    }

};

export const editLinkBanner = async (newData, id) => {
    try {
        setAuthHeader(token);
        return await api.patch(`/banners/${id}`, newData);
    } catch (e) {
        console.error(e.message);
    }

};

export const deleteServer = async (id) => {
    try {
        setAuthHeader(token);
        return await api.delete(`/servers/${id}`);
    } catch (e) {
        console.error(e.message);
    }

};

export const deleteBanner = async (id) => {
    try {
        setAuthHeader(token);
        return await api.delete(`/banners/${id}`);
    } catch (e) {
        console.error(e.message);
    }

};

export const deleteArticle = async (id) => {
    try {
        setAuthHeader(token);
        return await api.delete(`/articles/${id}`);
    } catch (e) {
        console.error(e.message);
    }

};


export default api;