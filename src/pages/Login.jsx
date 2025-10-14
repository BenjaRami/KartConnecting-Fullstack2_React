import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    correo: '',
    password: ''
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setMessage('⚠ Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (formData.password.length < 6) {
      setMessage('⚠ La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Simular login exitoso
    setMessage('✅ ¡Inicio de sesión exitoso! Redirigiendo...');
    
    // Limpiar formulario
    setFormData({
      correo: '',
      password: ''
    });

    // Redirigir después de 2 segundos
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">🔑 Iniciar sesión</h1>
      <p className="text-center">Accede a tu cuenta KartConnect</p>

      <div className="row justify-content-center">
        <div className="col-md-5">
          <form className="login-form p-4 rounded shadow" onSubmit={handleSubmit}>
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

            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="recordarme"
                name="recordarme"
              />
              <label className="form-check-label" htmlFor="recordarme">Recordarme</label>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">Ingresar</button>
              <Link to="/registro" className="btn btn-outline-secondary">Crear cuenta</Link>
            </div>
          </form>
          
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

export default Login;