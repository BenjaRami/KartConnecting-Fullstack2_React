import React, { useEffect, useState } from "react";
import { getTorneos } from "../api/api";

export default function Torneos() {

  const [torneos, setTorneos] = useState([]);

  useEffect(() => {
    cargarTorneos();
  }, []);

  const cargarTorneos = async () => {
    try {
      const data = await getTorneos();
      console.log("Torneos recibidos:", data);
      setTorneos(data || []);
    } catch (e) {
      console.error("Error cargando torneos:", e);
    }
  };

  const formatearFecha = (f) => {
    if (!f) return "";
    return new Date(f).toLocaleDateString("es-CL");
  };

  return (
    <div className="container">
      <h1 className="main-title">Torneos Disponibles</h1>

      {torneos.length === 0 && (
        <p className="message">No hay torneos registrados.</p>
      )}

      <div className="lista-tarjetas">
        {torneos.map((t) => (
          <div key={t.id_torneo} className="item-card">
            <h3>{t.nombre}</h3>
            <p><strong>Inicio:</strong> {formatearFecha(t.fecha_inicio)}</p>
            <p><strong>Término:</strong> {formatearFecha(t.fecha_fin)}</p>
            <p><strong>Premio:</strong> {t.premio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
