import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginForm.css'; // Importar el archivo CSS personalizado

const LoginForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" id="username" placeholder="Ingrese su usuario" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Ingrese su clave" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Ingresar</button>   
        </form>
    );
};

export default LoginForm;