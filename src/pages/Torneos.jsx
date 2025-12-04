import React, { useEffect, useState } from "react";
import { api } from "../api/backend";

function Torneos() {
    const [torneos, setTorneos] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        api.get("/api/torneos", token)
            .then(data => setTorneos(data))
            .catch(err => console.log("Error:", err));
    }, []);

    return (
        <div className="container">
            <h1>Torneos disponibles</h1>

            {torneos.length === 0 && <p>No hay torneos disponibles.</p>}

            <ul>
                {torneos.map(t => (
                    <li key={t.id}>
                        {t.nombre}  
                        - Inicio: {t.fecha_inicio}  
                        - Fin: {t.fecha_fin}  
                        - Premio: {t.premio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Torneos;
