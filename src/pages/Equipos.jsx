import React, { useEffect, useState } from "react";
import { getEquipos } from "../api/api";

export default function Equipos() {

  const [equipos, setEquipos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getEquipos();
        setEquipos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
        setError("Error al cargar equipos.");
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Equipos registrados</h1>

      {cargando && <p className="message">Cargando...</p>}
      {error && <p className="message error">{error}</p>}

      {(!cargando && equipos.length === 0) && (
        <p className="message">No hay equipos registrados.</p>
      )}

      <div>
        {equipos.map(eq => (
          <div key={eq.id_equipo} className="item-card">
            <h3>{eq.nombre}</h3>
            <p>Región: {eq.region || "Sin especificar"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
