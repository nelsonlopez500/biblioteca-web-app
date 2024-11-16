import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sideBar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/', { replace: true }); // Usar replace para evitar regresar atrás
    };

    return (
        <div 
            className={`sidebar ${isOpen ? 'open' : ''}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="sidebar-header">
                <img src="/formas-y-simbolo.png" alt="Logo" className="sidebar-logo" />
                <span className="sidebar-title">PenalNet</span>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><Link to="/Reclusos">Reclusos</Link></li>
                    <li><Link to="/Penales">Penales</Link></li>
                    <li><Link to="/Empleados">Empleados</Link></li>
                    <li><Link to="/Planillas">Planilla</Link></li>
                </ul>
                <div className="logout-container">
                    <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;