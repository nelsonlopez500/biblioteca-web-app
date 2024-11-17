import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormularioLibros.css';
import { createLibro } from '../../services/apisService.jsx';

const FormularioLibros = ({ show, handleClose, onSubmit, TitleForm }) => {
    const [libro, setLibro] = useState({
        nombre: '',
        apellido: '',
        fecha_ingreso: '',
        genero: '',
        nacionalidad: '',
        condena: '',
        pandilla: '',
        id_antecedente: '',
        id_incidentes: '',
        estado: '',
        status: true
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLibro(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const result = await createLibro(libro);
            onSubmit(result);
            handleClose();
            // Limpiar formulario
            setLibro({
                nombre: '',
                apellido: '',
                fecha_ingreso: '',
                genero: '',
                nacionalidad: '',
                condena: '',
                pandilla: '',
                id_antecedente: '',
                id_incidentes: '',
                estado: '',
                status: true
            });
        } catch (error) {
            setError('Error al crear el libro');
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
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleClose}
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nombre"
                                            value={libro.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el nombre del recluso"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Apellido</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="apellido"
                                            value={libro.apellido}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el apellido del recluso"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Fecha de Ingreso</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="fecha_ingreso"
                                            value={libro.fecha_ingreso}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Género</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="genero"
                                            value={libro.genero}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el género"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Nacionalidad</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nacionalidad"
                                            value={libro.nacionalidad}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese la nacionalidad"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Condena</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="condena"
                                            value={libro.condena}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese la condena"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Pandilla</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pandilla"
                                            value={libro.pandilla}
                                            onChange={handleChange}
                                            placeholder="Ingrese la pandilla (si aplica)"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">ID de Antecedente</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="id_antecedente"
                                            value={libro.id_antecedente}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el ID de antecedente"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">ID de Incidentes</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="id_incidentes"
                                            value={libro.id_incidentes}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el ID de incidentes"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Estado</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="estado"
                                            value={libro.estado}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el estado del recluso"
                                        />
                                    </div>

                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={handleClose}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
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

export default FormularioLibros;
