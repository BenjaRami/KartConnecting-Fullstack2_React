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
            <Route path="/jugadores" element={<Jugadores />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/torneos" element={<Torneos />} />
            <Route path="/quienes-somos" element={<Quienes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;