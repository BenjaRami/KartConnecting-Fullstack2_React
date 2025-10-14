import React from 'react';
import { equipos } from '../data/data';

const Equipos = () => {
  return (
    <div className="container">
      <h1>🏁 Equipos registrados</h1>
      <div className="row">
        {equipos.map(equipo => (
          <div key={equipo.id} className="col-md-6 mb-4">
            <div className="item-card">
              <h3>{equipo.nombre}</h3>
              <p><strong>País:</strong> {equipo.pais}</p>
              <p>{equipo.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipos;