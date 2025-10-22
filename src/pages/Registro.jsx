import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre_gamer: '',
    correo: '',
    pais: '',
    nivel: '',
    bio: '',
    disponible: '',
    password: '',
    confirmar_password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (formData.nombre_gamer.length < 3) {
      setMessage('⚠ El nombre debe tener al menos 3 caracteres.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setMessage('⚠ Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (!formData.pais || !formData.nivel || !formData.disponible) {
      setMessage('⚠ Por favor completa todos los campos requeridos.');
      return;
    }

    if (formData.password.length < 6) {
      setMessage('⚠ La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (formData.password !== formData.confirmar_password) {
      setMessage('⚠ Las contraseñas no coinciden.');
      return;
    }

    // Simular registro exitoso
    setMessage('✅ ¡Registro exitoso! Redirigiendo...');
    
    // Limpiar formulario
    setFormData({
      nombre_gamer: '',
      correo: '',
      pais: '',
      nivel: '',
      bio: '',
      disponible: '',
      password: '',
      confirmar_password: ''
    });

    // Redirigir después de 2 segundos
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">📝 Registro de usuario</h1>
      <p className="text-center">Crea tu cuenta para unirte a la comunidad KartConnect</p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="registro-form p-4 rounded shadow" onSubmit={handleSubmit}>
            {/* Nombre gamer */}
            <div className="mb-3">
              <label htmlFor="nombre_gamer" className="form-label">Nombre Gamer</label>
              <input 
                type="text" 
                className="form-control" 
                id="nombre_gamer"
                name="nombre_gamer"
                value={formData.nombre_gamer}
                onChange={handleChange}
                placeholder="Ej: SpeedRacer99" 
                required 
              />
            </div>

            {/* Correo */}
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo electrónico</label>
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

            {/* País */}
            <div className="mb-3">
              <label htmlFor="pais" className="form-label">País</label>
              <select 
                className="form-select" 
                id="pais"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Selecciona tu país</option>
                <option value="Chile">Chile</option>
                <option value="Argentina">Argentina</option>
                <option value="México">México</option>
                <option value="España">España</option>
                <option value="Colombia">Colombia</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Nivel */}
            <div className="mb-3">
              <label htmlFor="nivel" className="form-label">Nivel competitivo</label>
              <select 
                className="form-select" 
                id="nivel"
                name="nivel"
                value={formData.nivel}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Selecciona tu nivel</option>
                <option value="Amateur">Amateur</option>
                <option value="Semi-Pro">Semi-Pro</option>
                <option value="Pro">Pro</option>
              </select>
            </div>

            {/* Biografía */}
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">Biografía</label>
              <textarea 
                className="form-control" 
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="3" 
                placeholder="Cuéntanos un poco sobre ti..."
              />
            </div>

            {/* Disponible para equipos */}
            <div className="mb-3">
              <label className="form-label">¿Disponible para equipos?</label>
              <div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="disponible" 
                    id="si" 
                    value="S"
                    checked={formData.disponible === "S"}
                    onChange={handleChange}
                    required 
                  />
                  <label className="form-check-label" htmlFor="si">Sí</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="disponible" 
                    id="no" 
                    value="N"
                    checked={formData.disponible === "N"}
                    onChange={handleChange}
                    required 
                  />
                  <label className="form-check-label" htmlFor="no">No</label>
                </div>
              </div>
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********" 
                required
              />
            </div>

            {/* Confirmar contraseña */}
            <div className="mb-3">
              <label htmlFor="confirmar_password" className="form-label">Confirmar contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="confirmar_password"
                name="confirmar_password"
                value={formData.confirmar_password}
                onChange={handleChange}
                placeholder="********" 
                required
              />
            </div>

            {/* Botones */}
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">Registrarse</button>
              <Link to="/" className="btn btn-outline-secondary">Volver al inicio</Link>
            </div>
          </form>

          {/* Mensaje */}
          {message && (
            <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-danger'} mt-3`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registro;


