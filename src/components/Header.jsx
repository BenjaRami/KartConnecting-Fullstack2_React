import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const token = localStorage.getItem("token");

  return (
    <header>
      <nav className="menu">
        <div className="nav-brand">
          <img src="/assets/img/logo.png.png" alt="KartConnect Logo" className="logo" />
          <span>KartConnecting</span>
        </div>
        
        <div className="nav-links">
          <Link to="/" className={isActive('/inicio')}>Inicio</Link>
          {!token && <Link to="/registro" className={isActive('/registro')}>Registro</Link>}
          {!token && <Link to="/login" className={isActive('/login')}>Login</Link>}
          <Link to="/jugadores" className={isActive('/jugadores')}>Jugadores</Link>
          <Link to="/equipos" className={isActive('/equipos')}>Equipos</Link>
          <Link to="/torneos" className={isActive('/torneos')}>Torneos</Link>
          <Link to="/quienes-somos" className={isActive('/quienes-somos')}>Quiénes somos</Link>

          {/* Mostrar cerrar sesión solo si hay token */}
          {token && (
            <button onClick={logout} className="logout-btn">
              Cerrar sesión
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
