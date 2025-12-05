import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Login from "./pages/Login.jsx";
import Registro from "./pages/Registro.jsx";
import Inicio from "./pages/Inicio.jsx";
import Jugadores from "./pages/Jugadores.jsx";
import Equipos from "./pages/Equipos.jsx";
import Torneos from "./pages/Torneos.jsx";
import Quienes from "./pages/Quienes.jsx";

import { getCurrentToken } from "./api/api.js";

// RUTA PROTEGIDA
function RutaPrivada({ children }) {
  const token = getCurrentToken();
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <Header />

      <main style={{ flex: 1 }}>
        <Routes>

          {/* Inicio SIN protección */}
          <Route path="/inicio" element={<Inicio />} />

          {/* Login / Registro */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          {/* Rutas protegidas */}
          <Route
            path="/jugadores"
            element={
              <RutaPrivada>
                <Jugadores />
              </RutaPrivada>
            }
          />

          <Route
            path="/equipos"
            element={
              <RutaPrivada>
                <Equipos />
              </RutaPrivada>
            }
          />

          <Route
            path="/torneos"
            element={
              <RutaPrivada>
                <Torneos />
              </RutaPrivada>
            }
          />

          {/* Pública */}
          <Route path="/quienes-somos" element={<Quienes />} />

          {/* Redirección raíz → Inicio */}
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

