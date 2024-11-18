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
                <div className="card" onClick={() => handleCardClick('/libros')}>
                    <img src="https://climatica.coop/wp-content/uploads/2024/01/1280px-Books_HD_8314929977-900x600.jpg?w=390&q=90" className="card-img-top" alt="Libros" />
                    <div className="card-body">
                        <h3>Reclusos</h3>
                        <p>Ir a la sección de Reclusos</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/prestamos')}>
                    <img src="https://www.comunidadbaratz.com/wp-content/uploads/Hay-muchisimos-libros-en-las-bibliotecas-pero-solamente-unos-pocos-comparten-el-privilegio-de-ser-los-mas-prestados-1.jpg" className="card-img-top" alt="Préstamos" />
                    <div className="card-body">
                        <h3>Penales</h3>
                        <p>Ir a la sección de Penales</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/editoriales')}>
                    <img src="https://p4.wallpaperbetter.com/wallpaper/944/111/648/book-books-culture-edition-wallpaper-preview.jpg" className="card-img-top" alt="Editoriales" />
                    <div className="card-body">
                        <h3>Empleados</h3>
                        <p>Ir a la sección de Empleados</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/usuarios')}>
                    <img src="https://www.creaxid.com.mx/blog/wp-content/uploads/2021/08/investigacion-usuarios.jpg" className="card-img-top" alt="Usuarios" />
                    <div className="card-body">
                        <h3>Planillas</h3>
                        <p>Ir a la sección de Planillas</p>
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