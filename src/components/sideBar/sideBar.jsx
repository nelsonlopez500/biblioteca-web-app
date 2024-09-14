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
            <nav className="sidebar-nav">
                <ul>
                    <li><Link to="/libros">Libros</Link></li>
                    <li><Link to="/reportes">Reportes</Link></li>
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