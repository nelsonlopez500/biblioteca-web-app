import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormularioLibros.css';
import { createLibro } from '../../services/apisService.jsx';

const FormularioLibros = ({
    show,
    handleClose,
    onSubmit,
    TitleForm,
    initialData,
    isEditing,
    submitAction
}) => {
    const estadoInicial = {
        titulo: '',
        isbn: '',
        fecha_publicacion: '',
        editorial_id: '',
        categoria_id: '',
        biblioteca_id: '',
        status: true
    };

    const [libro, setLibro] = useState(estadoInicial);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLibro(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Cargar datos iniciales en modo edición
    useEffect(() => {
        if (isEditing && initialData) {
            const fechaFormateada = initialData.fecha_publicacion ?
                new Date(initialData.fecha_publicacion).toISOString().split('T')[0] : '';

            // Mapeo de textos a IDs para categorías
            const categoriasMap = {
                'Ficción': '1',
                'Ciencia': '3',
                'Tecnología': '4',
                'Historia': '5',
                'Arte': '28',
                'Música Clásica': '29',
                'Bibliografías': '30',
                'Aventuras': '31'
            };

            // Mapeo de textos a IDs para editoriales
            const editorialesMap = {
                'Editorial LPGL': '1'
            };

            setLibro({
                ...initialData,
                fecha_publicacion: fechaFormateada,
                // Convertir los textos a IDs usando los mapeos
                categoria_id: categoriasMap[initialData.categoria_id] || '',
                editorial_id: editorialesMap[initialData.editorial_id] || '',
                biblioteca_id: initialData.biblioteca_id?.toString() || '',
                status: initialData.status ?? true
            });
        } else {
            setLibro({
                titulo: '',
                isbn: '',
                fecha_publicacion: '',
                editorial_id: '',
                categoria_id: '',
                biblioteca_id: '',
                status: true
            });
        }
    }, [isEditing, initialData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            // Usar submitAction que viene como prop (createLibro o updateLibro)
            const result = await submitAction(libro);
            onSubmit(result);
            handleClose();

            // Limpiar formulario solo si no es edición
            if (!isEditing) {
                setLibro({
                    titulo: '',
                    isbn: '',
                    fecha_publicacion: '',
                    editorial_id: '',
                    categoria_id: '',
                    biblioteca_id: '',
                    status: true
                });
            }
        } catch (error) {
            setError(isEditing ? 'Error al actualizar el libro' : 'Error al crear el libro');
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