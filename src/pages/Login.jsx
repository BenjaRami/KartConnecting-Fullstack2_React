import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backend } from "../backend";

const Login = () => {
  const [formData, setFormData] = useState({
    correo: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await backend.post("/api/auth/login", {
        correo: formData.correo,
        password: formData.password
      });

      if (res && res.token) {
        // guardar token para las rutas protegidas
        localStorage.setItem("token", res.token);
        setMessage("Inicio de sesión exitoso.");

        // pequeña pausa y redirigir
        setTimeout(() => {
          navigate("/jugadores");
        }, 800);
      } else {
        setMessage("No se recibió un token válido desde el servidor.");
      }
    } catch (err) {
      setMessage(err.message || "No se pudo iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-4 text-center">Ingreso a Kartconnecting</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="ejemplo@mail.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </form>

          <div className="mt-3 text-center">
            <span>¿No tienes cuenta? </span>
            <Link to="/registro">Regístrate aquí</Link>
          </div>

          {message && (
            <div
              className={`alert mt-3 ${
                message.includes("exitoso") ? "alert-success" : "alert-danger"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

