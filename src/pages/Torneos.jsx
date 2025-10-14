import React from 'react';
import { torneos, carreras } from '../data/data';

const Torneos = () => {
  const getCarrerasPorTorneo = (torneoId) => {
    return carreras.filter(carrera => carrera.id_torneo === torneoId);
  };

  return (
    <div className="container">
      <h1>🏆 Torneos activos</h1>
      <div className="row">
        {torneos.map(torneo => {
          const carrerasTorneo = getCarrerasPorTorneo(torneo.id);
          return (
            <div key={torneo.id} className="col-md-6 mb-4">
              <div className="item-card">
                <h3>{torneo.nombre}</h3>
                <p><strong>Modalidad:</strong> {torneo.modalidad}</p>
                <p><strong>Fechas:</strong> {torneo.inicio} → {torneo.fin}</p>
                {carrerasTorneo.length > 0 && (
                  <div>
                    <h5>Carreras:</h5>
                    <ul style={{ textAlign: 'left' }}>
                      {carrerasTorneo.map(carrera => (
                        <li key={carrera.id}>• {carrera.pista} — {carrera.fecha}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Torneos;