import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navBar/navBar.jsx';
import Sidebar from '../../components/sideBar/sideBar.jsx';
import './dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard">
            <Navbar />
            <Sidebar />
            <h1 className="dashboard-title">Sistema de gestión de biblioteca</h1>
            <div className="cards-container">
                <div className="card" onClick={() => handleCardClick('/libros')}>
                    <img src="https://climatica.coop/wp-content/uploads/2024/01/1280px-Books_HD_8314929977-900x600.jpg?w=390&q=90" className="card-img-top" alt="Libros" />
                    <div className="card-body">
                        <h3>Libros</h3>
                        <p>Ir a la sección de Libros</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/reportes')}>
                    <img src="https://c0.wallpaperflare.com/preview/533/923/694/accounting-business-close-up-computation.jpg" className="card-img-top" alt="Reportes" />
                    <div className="card-body">
                        <h3>Reportes</h3>
                        <p>Ir a la sección de Reportes</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/usuarios')}>
                    <img src="https://www.creaxid.com.mx/blog/wp-content/uploads/2021/08/investigacion-usuarios.jpg" className="card-img-top" alt="Usuarios" />
                    <div className="card-body">
                        <h3>Usuarios</h3>
                        <p>Ir a la sección de Usuarios</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;