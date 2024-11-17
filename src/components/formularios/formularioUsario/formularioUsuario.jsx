import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formularioUsuario.css';
import { createUsuario } from '../../../services/apisService.jsx';

const FormularioUsuario = ({ show, handleClose, onSubmit, TitleForm }) => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: '',
        fecha_registro: '',
        rol_id: '',
        biblioteca_id: '',
        status: true
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const result = await createUsuario(usuario);
            onSubmit(result);
            handleClose();
            setUsuario({
                nombre: '',
                apellido: '',
                direccion: '',
                telefono: '',
                email: '',
                fecha_registro: '',
                rol_id: '',
                biblioteca_id: '',
                status: true
            });
        } catch (error) {
            setError('Error al crear el usuario');
            console.error(error);
        }
    };

    if (!show) return null;

    return (
        <>
            <div className="modal-overlay">
                <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{TitleForm}</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nombre"
                                            value={usuario.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el nombre"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Apellido</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="apellido"
                                            value={usuario.apellido}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el apellido"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Dirección</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="direccion"
                                            value={usuario.direccion}
                                            onChange={handleChange}
                                            placeholder="Ingrese la dirección"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Teléfono</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="telefono"
                                            value={usuario.telefono}
                                            onChange={handleChange}
                                            placeholder="Ingrese el teléfono"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={usuario.email}
                                            onChange={handleChange}
                                            placeholder="Ingrese el email"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Fecha de Registro</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="fecha_registro"
                                            value={usuario.fecha_registro}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Rol</label>
                                        <select
                                            className="form-select"
                                            name="rol_id"
                                            value={usuario.rol_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Seleccione un rol</option>
                                            <option value="1">Administrador</option>
                                            <option value="2">Usuario</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Biblioteca</label>
                                        <select
                                            className="form-select"
                                            name="biblioteca_id"
                                            value={usuario.biblioteca_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Seleccione una biblioteca</option>
                                            <option value="1">BiblioTK</option>
                                        </select>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                            Cancelar
                                        </button>
                                        <button type="submit" className="btn btn-primary">
                                            Guardar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
};

export default FormularioUsuario;