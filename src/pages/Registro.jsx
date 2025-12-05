import React, { useState } from "react";
import { crearUsuario, login, crearJugador } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    password: "",
    pais: "",
    nivel: "Amateur"
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    try {
      // 1) Crear usuario (solo correo/password)
      const reg = await crearUsuario({
        correo: form.correo,
        password: form.password
      });

      if (!reg || reg.error) {
        setError("No se pudo crear el usuario.");
        return;
      }
      try {
  const resp = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      correo: form.correo,
      password: form.password
    })
  });

  const data = await resp.json();
  console.log("RESPUESTA LOGIN AUTOMÁTICO:", data);

  if (data?.token) {
    localStorage.setItem("jwt", data.token);
  } else {
    setError("Login automático falló. Respuesta inesperada.");
    return;
  }
} catch (e) {
  console.log("ERROR LOGIN AUTOMÁTICO:", e);
  setError("Error al iniciar sesión automáticamente.");
  return;
}

      // 2) Login automático
      const token = await login(form.correo, form.password);

      if (!token) {
        setError("Error al iniciar sesión automáticamente.");
        return;
      }

      // 3) Crear jugador (requiere token)
      const jugadorRes = await crearJugador({
        nombre_gamer: form.nombre,
        correo: form.correo,
        pais: form.pais,
        nivel: form.nivel,
        bio: "Nuevo jugador",
        disponible_para_equipos: "S"
      });

      if (!jugadorRes) {
        setError("No se pudo crear el jugador.");
        return;
      }

      setMensaje("Cuenta creada correctamente. Redirigiendo...");
      setTimeout(() => navigate("/inicio"), 1500);

    } catch (err) {
      console.log(err);
      setError("Ocurrió un error al procesar el registro.");
    }
  };

  return (
    <div className="container">
      <h2>Registrar nueva cuenta</h2>

      {mensaje && <p className="alert alert-success">{mensaje}</p>}
      {error && <p className="alert alert-danger">{error}</p>}

      <form onSubmit={handleSubmit}>

        <label>Nombre gamer</label>
        <input
          type="text"
          name="nombre"
          required
          value={form.nombre}
          onChange={handleChange}
          className="form-control"
        />

        <label className="mt-3">Correo</label>
        <input
          type="email"
          name="correo"
          required
          value={form.correo}
          onChange={handleChange}
          className="form-control"
        />

        <label className="mt-3">Contraseña</label>
        <input
          type="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
          className="form-control"
        />

        <label className="mt-3">País</label>
        <input
          type="text"
          name="pais"
          required
          value={form.pais}
          onChange={handleChange}
          className="form-control"
        />

        <label className="mt-3">Nivel</label>
        <select
          name="nivel"
          value={form.nivel}
          onChange={handleChange}
          className="form-select"
        >
          <option value="Amateur">Amateur</option>
          <option value="Semi-Pro">Semi-Pro</option>
          <option value="Pro">Pro</option>
        </select>

        <button type="submit" className="btn btn-primary w-100 mt-4">
          Crear cuenta
        </button>
      </form>
    </div>
  );
}

