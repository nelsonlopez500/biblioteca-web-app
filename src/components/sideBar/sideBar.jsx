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
                <span className="sidebar-title">BiblioTK</span>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/libros">Libros</Link></li>
                    <li><Link to="/prestamos">Préstamos</Link></li>
                    <li><Link to="/editoriales">Editoriales</Link></li>
                    <li><Link to="/usuarios">Usuarios</Link></li>
                </ul>
                <div className="logout-container">
                    <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;