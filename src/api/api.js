// Minimal API client using fetch. No external deps.

const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

function getToken() {
  return localStorage.getItem('jwt') || null;
}

function setToken(token) {
  if (token) {
    localStorage.setItem('jwt', token);
  } else {
    localStorage.removeItem('jwt');
  }
}

async function request(method, path, body, auth = true) {
  const headers = { 'Content-Type': 'application/json' };

  if (auth) {
    const t = getToken();
    if (t) headers['Authorization'] = `Bearer ${t}`;
  }

  const opts = { method, headers };
  if (body !== undefined) opts.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE}${path}`, opts);

  if (res.status === 204) return null;

  const text = await res.text();
  try { return JSON.parse(text); } catch { return text; }
}

// ----------------------
// AUTH
// ----------------------
export async function login(correo, password) {
  const data = await request('POST', '/auth/login', { correo, password }, false);

  // Backend devuelve: { token: "xxxxx" }
  if (data?.token) {
    setToken(data.token);
    return data.token;
  }

  return null;
}

export function logout() {
  setToken(null);
}

export function getCurrentToken() {
  return getToken();
}

// ----------------------
// CRUDs (con /api/...)
// ----------------------

// Jugadores
export const getJugadores = () => request('GET', '/jugadores');
export const getJugador = (id) => request('GET', `/jugadores/${id}`);
export const crearJugador = (j) => request('POST', '/jugadores', j);
export const actualizarJugador = (id, j) => request('PUT', `/jugadores/${id}`, j);
export const eliminarJugador = (id) => request('DELETE', `/jugadores/${id}`);

// Equipos
export const getEquipos = () => request('GET', '/equipos');
export const getEquipo = (id) => request('GET', `/equipos/${id}`);
export const crearEquipo = (e) => request('POST', '/equipos', e);
export const actualizarEquipo = (id, e) => request('PUT', `/equipos/${id}`, e);
export const eliminarEquipo = (id) => request('DELETE', `/equipos/${id}`);

// Torneos
export const getTorneos = () => request('GET', '/torneos');
export const getTorneo = (id) => request('GET', `/torneos/${id}`);
export const crearTorneo = (t) => request('POST', '/torneos', t);
export const actualizarTorneo = (id, t) => request('PUT', `/torneos/${id}`, t);
export const eliminarTorneo = (id) => request('DELETE', `/torneos/${id}`);

// Pistas
export const getPistas = () => request('GET', '/pistas');
export const getPista = (id) => request('GET', `/pistas/${id}`);
export const crearPista = (p) => request('POST', '/pistas', p);
export const actualizarPista = (id, p) => request('PUT', `/pistas/${id}`, p);
export const eliminarPista = (id) => request('DELETE', `/pistas/${id}`);

// Busquedas
export const getBusquedas = () => request('GET', '/busquedas');
export const getBusqueda = (id) => request('GET', `/busquedas/${id}`);
export const crearBusqueda = (b) => request('POST', '/busquedas', b);
export const actualizarBusqueda = (id, b) => request('PUT', `/busquedas/${id}`, b);
export const eliminarBusqueda = (id) => request('DELETE', `/busquedas/${id}`);

// Miembro equipo
export const getMiembrosEquipo = () => request('GET', '/miembros-equipo');
export const getMiembroEquipo = (id) => request('GET', `/miembros-equipo/${id}`);
export const crearMiembroEquipo = (m) => request('POST', '/miembros-equipo', m);
export const actualizarMiembroEquipo = (id, m) => request('PUT', `/miembros-equipo/${id}`, m);
export const eliminarMiembroEquipo = (id) => request('DELETE', `/miembros-equipo/${id}`);

// Carreras
export const getCarreras = () => request('GET', '/carreras');
export const getCarrera = (id) => request('GET', `/carreras/${id}`);
export const crearCarrera = (c) => request('POST', '/carreras', c);
export const actualizarCarrera = (id, c) => request('PUT', `/carreras/${id}`, c);
export const eliminarCarrera = (id) => request('DELETE', `/carreras/${id}`);

export const crearUsuario = (u) => request('POST', '/auth/registro', u, false);

export const apiBase = API_BASE;

