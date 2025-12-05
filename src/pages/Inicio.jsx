import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="inicio-contenedor">

      <section className="inicio-bloque">
        <h1>Bienvenido a KartConnect</h1>
        <p>
          Conecta con jugadores, forma equipos, participa en torneos y demuestra tu nivel en la pista.
        </p>

        <div className="botonera-inicio">
          <Link to="/registro" className="btn-inicio">Registrarse</Link>
          <Link to="/login" className="btn-inicio">Iniciar sesión</Link>
        </div>
      </section>

      <section className="inicio-bloque">
        <h2>¿Qué puedes hacer aquí?</h2>

        <ul>
          <li>Crear tu perfil de jugador y mostrar tus estadísticas.</li>
          <li>Buscar equipos competitivos o crear el tuyo.</li>
          <li>Administrar miembros y roles dentro de un equipo.</li>
          <li>Explorar torneos activos y participar en competencias.</li>
        </ul>

        <div className="botonera-inicio">
          <Link to="/jugadores" className="btn-inicio">Ver Jugadores</Link>
          <Link to="/equipos" className="btn-inicio">Ver Equipos</Link>
        </div>
      </section>

      <section className="inicio-bloque">
        <h2>Comunidad KartConnect</h2>
        <p>
          Únete a cientos de pilotos apasionados. Desafía, aprende y compite con jugadores de todo el mundo.
        </p>

        <div className="botonera-inicio">
          <Link to="/torneos" className="btn-inicio">Torneos Disponibles</Link>
        </div>
      </section>

    </div>
  );
}

export default Inicio;
