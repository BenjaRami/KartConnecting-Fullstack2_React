import React, { useState } from "react";
import { api } from "../api/backend";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const [form, setForm] = useState({
    nombre_gamer: "",
    correo: "",
    password: "",
    pais: "",
    nivel: "principiante"
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
      // 1) Crear usuario en el backend (auth)
      const reg = await api.post("/api/auth/register", {
        nombre: form.nombre_gamer,
        email: form.correo,
        password: form.password
      });

      if (!reg || reg.error) {
        setError("No se pudo crear la cuenta.");
        return;
      }

      // 2) Login automático
      const login = await api.post("/api/auth/login", {
        email: form.correo,
        password: form.password
      });

      if (!login || !login.token) {
        setError("El registro fue exitoso, pero no se pudo iniciar sesión.");
        return;
      }

      localStorage.setItem("token", login.token);

      // 3) Crear el jugador (requiere token)
      await api.post("/api/jugadores", {
        nombre_gamer: form.nombre_gamer,
        correo: form.correo,
        pais: form.pais,
        nivel: form.nivel
      }, login.token);

      setMensaje("Cuenta creada correctamente.");
      setTimeout(() => navigate("/inicio"), 1500);

    } catch (err) {
      console.log(err);
      setError("Ocurrió un error al procesar el registro.");
    }
  };

  return (
    <div className="container">
      <h2>Registrar nueva cuenta</h2>

      {mensaje && <p className="message success">{mensaje}</p>}
      {error && <p className="message error">{error}</p>}

      <form onSubmit={handleSubmit} className="form-container">

        <div className="form-group">
          <label>Nombre gamer</label>
          <input
            type="text"
            name="nombre_gamer"
            required
            value={form.nombre_gamer}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            name="correo"
            required
            value={form.correo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>País</label>
          <input
            type="text"
            name="pais"
            required
            value={form.pais}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Nivel</label>
          <select
            name="nivel"
            value={form.nivel}
            onChange={handleChange}
          >
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Crear cuenta</button>
      </form>
    </div>
  );
}


