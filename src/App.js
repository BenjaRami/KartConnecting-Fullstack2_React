import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Inicio from './pages/Inicio.jsx';
import Registro from './pages/Registro.jsx';
import Login from './pages/Login.jsx';
import Jugadores from './pages/Jugadores.jsx';
import Equipos from './pages/Equipos.jsx';
import Torneos from './pages/Torneos.jsx';
import Quienes from './pages/Quienes.jsx';

import './index.css';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <div>No autorizado. Inicia sesión.</div>;
  return children;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />

            <Route path="/jugadores" element={
              <ProtectedRoute>
                <Jugadores />
              </ProtectedRoute>
            } />

            <Route path="/equipos" element={
              <ProtectedRoute>
                <Equipos />
              </ProtectedRoute>
            } />

            <Route path="/torneos" element={
              <ProtectedRoute>
                <Torneos />
              </ProtectedRoute>
            } />

            <Route path="/quienes-somos" element={<Quienes />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

