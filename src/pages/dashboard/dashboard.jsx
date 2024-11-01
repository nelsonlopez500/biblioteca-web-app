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
                <div className="card" onClick={() => handleCardClick('/prestamos')}>
                    <img src="https://www.comunidadbaratz.com/wp-content/uploads/Hay-muchisimos-libros-en-las-bibliotecas-pero-solamente-unos-pocos-comparten-el-privilegio-de-ser-los-mas-prestados-1.jpg" className="card-img-top" alt="Préstamos" />
                    <div className="card-body">
                        <h3>Préstamos</h3>
                        <p>Ir a la sección de Préstamos</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/editoriales')}>
                    <img src="https://p4.wallpaperbetter.com/wallpaper/944/111/648/book-books-culture-edition-wallpaper-preview.jpg" className="card-img-top" alt="Editoriales" />
                    <div className="card-body">
                        <h3>Editoriales</h3>
                        <p>Ir a la sección de Editoriales</p>
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
            <footer className="dashboard-footer">
                © 2024 Sistema de gestión de biblioteca. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default Dashboard;