// Compat layer for older frontend code that imports `backend` from "../backend".
// Provides simple .get/.post helpers and normalizes auth login response to { token }.
const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8081/api';

async function request(method, path, body, token) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const opts = { method, headers };
  if (body !== undefined) opts.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE}${path}`, opts);
  const text = await res.text();
  // Try parse JSON
  try { return JSON.parse(text); } catch(e) {
    // If this is the login endpoint, backend returns plain token string.
    if (path.endsWith('/auth/login') || path.endsWith('/auth/login/')) {
      return { token: text };
    }
    return text;
  }
}

export const backend = {
  get: (path, token) => request('GET', path, undefined, token),
  post: (path, body, token) => request('POST', path, body, token),
  put: (path, body, token) => request('PUT', path, body, token),
  delete: (path, token) => request('DELETE', path, undefined, token),
};

export default backend;
