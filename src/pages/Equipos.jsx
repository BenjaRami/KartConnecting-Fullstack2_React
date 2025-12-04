import React, { useEffect, useState } from "react";
import { api } from "../api/backend";

function Equipos() {
    const [equipos, setEquipos] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        api.get("/api/equipos", token)
            .then(data => setEquipos(data))
            .catch(err => console.log("Error:", err));
    }, []);

    return (
        <div className="container">
            <h1>Equipos</h1>

            {equipos.length === 0 && <p>No hay equipos registrados.</p>}

            <ul>
                {equipos.map(eq => (
                    <li key={eq.id}>
                        {eq.nombre} - Región: {eq.region}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Equipos;
