// backend.js
// Cliente HTTP universal para consumir tu backend desde React

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const getToken = () => {
    try {
        return localStorage.getItem("token");
    } catch {
        return null;
    }
};

const buildHeaders = (extra = {}) => {
    const token = getToken();

    return {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...extra
    };
};

const handleResponse = async (res) => {
    if (!res.ok) {
        let errorMsg = "Error desconocido";

        try {
            const errBody = await res.json();
            errorMsg = errBody.message || JSON.stringify(errBody);
        } catch {
            // respuesta sin JSON
        }

        throw new Error(errorMsg);
    }

    // Si la respuesta está vacía (204) evitar error
    try {
        return await res.json();
    } catch {
        return null;
    }
};

export const backend = {
    get: async (path) => {
        const res = await fetch(`${API_URL}${path}`, {
            method: "GET",
            headers: buildHeaders()
        });
        return handleResponse(res);
    },

    post: async (path, body = {}) => {
        const res = await fetch(`${API_URL}${path}`, {
            method: "POST",
            headers: buildHeaders(),
            body: JSON.stringify(body)
        });
        return handleResponse(res);
    },

    put: async (path, body = {}) => {
        const res = await fetch(`${API_URL}${path}`, {
            method: "PUT",
            headers: buildHeaders(),
            body: JSON.stringify(body)
        });
        return handleResponse(res);
    },

    delete: async (path) => {
        const res = await fetch(`${API_URL}${path}`, {
            method: "DELETE",
            headers: buildHeaders()
        });
        return handleResponse(res);
    }
};



