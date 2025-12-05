import React, { useEffect, useState } from "react";
import { getJugadores } from "../api/api";

export default function Jugadores() {

  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function cargarJugadores() {
    try {
      const data = await getJugadores();
      setJugadores(data || []);
    } catch (e) {
      console.error(e);
      setError("Error al cargar jugadores.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    cargarJugadores();
  }, []);

  if (loading) return <p>Cargando jugadores...</p>;
  if (error) return <p className="message error">{error}</p>;

  return (
    <div className="container">
      <h1 className="main-title">Jugadores</h1>

      {jugadores.length === 0 && (
        <p className="message">No hay jugadores registrados.</p>
      )}

      <div className="lista-tarjetas">
        {jugadores.map((j) => (
          <div key={j.id_jugador} className="item-card">
            <h3>{j.nombre_gamer}</h3>

            <p><strong>Correo:</strong> {j.correo}</p>
            <p><strong>País:</strong> {j.pais}</p>
            <p><strong>Nivel competitivo:</strong> {j.nivel}</p>

          </div>
        ))}
      </div>

      <button className="submit-btn mt-3" onClick={cargarJugadores}>
        Recargar lista
      </button>
    </div>
  );
}


