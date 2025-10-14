import React from 'react';
import { jugadores } from '../data/data';

const Jugadores = () => {
  return (
    <div className="container">
      <h1>👤 Jugadores destacados</h1>
      <div className="row">
        {jugadores.map(jugador => (
          <div key={jugador.id} className="col-md-4 mb-4">
            <div className="item-card">
              <h3>{jugador.nombre}</h3>
              <p><strong>País:</strong> {jugador.pais} • <strong>Nivel:</strong> {jugador.nivel || 'N/A'}</p>
              <p>{jugador.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jugadores;