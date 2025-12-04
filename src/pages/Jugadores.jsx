import React, { useEffect, useState } from "react";
import { api } from "../api/backend";

function Jugadores() {
    const [jugadores, setJugadores] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        api.get("/api/jugadores", token)
            .then(data => setJugadores(data))
            .catch(err => console.log("Error cargando jugadores:", err));
    }, []);

    return (
        <div className="container">
            <h1>Jugadores registrados</h1>

            {jugadores.length === 0 && <p>No hay jugadores registrados.</p>}

            <ul>
                {jugadores.map(j => (
                    <li key={j.id}>
                        {j.nombre_gamer} - Nivel: {j.nivel} - País: {j.pais}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Jugadores;

