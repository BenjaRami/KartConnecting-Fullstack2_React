// Compatibility API wrapper used by pages that import { api } from '../api/backend'
const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8081/api';

async function request(method, path, token, body) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const opts = { method, headers };
  if (body !== undefined) opts.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE}${path}`, opts);
  if (res.status === 204) return null;
  const text = await res.text();
  try { return JSON.parse(text); } catch { return text; }
}

export const api = {
  get: (path, token) => request('GET', path, token),
  post: (path, body, token) => request('POST', path, token, body),
  put: (path, body, token) => request('PUT', path, token, body),
  delete: (path, token) => request('DELETE', path, token),
};

export default api;
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



