import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Importar el archivo CSS personalizado
import LoginForm from '../../components/login/loginForm.jsx'; 

const Login = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya está autenticado
        const auth = localStorage.getItem('isAuthenticated');
        if (auth) {
            setIsAuthenticated(true);
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isAuthenticated', 'true');
            setIsAuthenticated(true);
            navigate('/dashboard');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card shadow-lg">
                <div>
                    <img src="https://w0.peakpx.com/wallpaper/455/843/HD-wallpaper-dark-blue-triangles-dark-blue.jpg" className="card-img-top" alt="Imagen de encabezado" />
                    <div className="card-body">
                        <LoginForm onSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;