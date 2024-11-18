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
            <div className="title-bar-container-dashboard">
                <div className="title-bar-dashboard">
                    <h2>Sistema de Gestion de Penales</h2>
                </div>
            </div>
            <div className="cards-container">
                <div className="card" onClick={() => handleCardClick('/Reclusos')}>
                    <img src="https://wallpapers.com/images/hd/jail-pictures-960-x-640-unr55l3mswbcng0v.jpg" className="card-img-top" alt="Reclusos" />
                    <div className="card-body">
                        <h3>Reclusos</h3>
                        <p>Ir a la sección de reclusos.</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/Penales')}>
                    <img src="https://st2.depositphotos.com/1020618/6187/i/450/depositphotos_61876061-stock-photo-wooden-gavel-and-books-on.jpg" className="card-img-top" alt="Penales" />
                    <div className="card-body">
                        <h3>Penales</h3>
                        <p>Ir a la sección de Penales</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/Empleados')}>
                    <img src="https://st.depositphotos.com/1518767/2406/i/450/depositphotos_24061705-stock-photo-group-of-with-different-jobs.jpg" className="card-img-top" alt="Empleados" />
                    <div className="card-body">
                        <h3>Empleados</h3>
                        <p>Ir a la sección de Empleados</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/Planillas')}>
                    <img src="https://wvw.qupos.com/hubfs/pago-de-planillas.png" className="card-img-top" alt="Planilla" />
                    <div className="card-body">
                        <h3>Planilla</h3>
                        <p>Ir a la sección de Planilla</p>
                    </div>
                </div>
            </div>
            <footer className="dashboard-footer">
                © 2024 Sistema de gestión de penales. Todos los derechos reservados.
            </footer>
        </div >
    );
};

export default Dashboard;