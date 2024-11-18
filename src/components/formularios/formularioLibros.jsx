import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormularioLibros.css';
import { createrecluso } from '../../services/apisService.jsx';

const FormularioLibros = ({ show, handleClose, onSubmit, TitleForm }) => {
    const [libro, setLibro] = useState({
        titulo: '',
        isbn: '',
        fecha_publicacion: '',
        editorial_id: '',
        categoria_id: '',
        biblioteca_id: '',
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
            const result = await createrecluso(libro);
            onSubmit(result);
            handleClose();
            // Limpiar formulario
            setLibro({
                titulo: '',
                isbn: '',
                fecha_publicacion: '',
                editorial_id: '',
                categoria_id: '',
                biblioteca_id: '',
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
                <div
                    className="modal show"
                    style={{ display: 'block' }}
                    tabIndex="-1"
                >
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
                                        <label className="form-label">Título</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="titulo"
                                            value={libro.titulo}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el título del libro"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">ISBN</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="isbn"
                                            value={libro.isbn}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese el ISBN"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Fecha de Publicación</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="fecha_publicacion"
                                            value={libro.fecha_publicacion}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Editorial</label>
                                        <select
                                            className="form-select"
                                            name="editorial_id"
                                            value={libro.editorial_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Seleccione una editorial</option>
                                            <option value="1">Editorial LPGL</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Categoría</label>
                                        <select
                                            className="form-select"
                                            name="categoria_id"
                                            value={libro.categoria_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Seleccione una categoría</option>
                                            <option value="1">Ficción</option>
                                            <option value="3">Ciencia</option>
                                            <option value="4">Tecnología</option>
                                            <option value="5">Historia</option>
                                            <option value="28">Arte</option>
                                            <option value="29">Música Clásica</option>
                                            <option value="30">Bibliografías</option>
                                            <option value="31">Aventuras</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Biblioteca</label>
                                        <select
                                            className="form-select"
                                            name="biblioteca_id"
                                            value={libro.biblioteca_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Seleccione una biblioteca</option>
                                            <option value="1">BiblioTK</option>
                                        </select>
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