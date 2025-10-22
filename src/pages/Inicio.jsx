import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="main-title">Bienvenido a KartConnect</h1>
      <p className="lead text-white">
        Tu comunidad para organizar <strong>torneos</strong>, registrar <strong>equipos</strong> 
         y descubrir a los <strong>mejores jugadores</strong> de Mario Kart.
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="item-card">
            <h3>🏆 Torneos</h3>
            <p>Consulta los últimos torneos y sus resultados.</p>
            <Link to="/torneos" className="btn btn-success mt-2">Ver torneos</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item-card">
            <h3>🏁 Equipos</h3>
            <p>Explora equipos registrados y sus miembros.</p>
            <Link to="/equipos" className="btn btn-success mt-2">Ver equipos</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item-card">
            <h3>👤 Jugadores</h3>
            <p>Descubre jugadores destacados y sus estadísticas.</p>
            <Link to="/jugadores" className="btn btn-success mt-2">Ver jugadores</Link>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Link to="/registro" className="btn btn-lg btn-primary">🚀 Crear cuenta</Link>
      </div>
    </div>
  );
};

export default Inicio;
