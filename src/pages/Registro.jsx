import React, { useState } from "react";
import { crearUsuario, login, crearJugador } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
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
      // 1. Crear usuario
      const reg = await crearUsuario({
        email: form.email,
        password: form.password,
        name: form.nombre
      });

      if (!reg || reg.error) {
        setError("No se pudo crear el usuario.");
        return;
      }

      // 2. Login automático
      const token = await login(form.email, form.password);

      if (!token) {
        setError("Error al iniciar sesión automáticamente.");
        return;
      }

      const mapNivel = {
      "Amateur": "AMATEUR",
      "Semi-Pro": "SEMI_PRO",
      "Pro": "PRO"
    };

    const jugadorRes = await crearJugador({
      nombreGamer: form.nombre,
      correo: form.email,
      pais: form.pais,
      nivel: mapNivel[form.nivel],
      bio: "Nuevo jugador"
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
          name="email"
          required
          value={form.email}
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
