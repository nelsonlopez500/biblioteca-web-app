import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormularioLibros.css';

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
        nombre: '',
        apellido: '',
        fecha_ingreso: '',
        genero: '',
        nacionalidad: '',
        condena: '',
        pandilla: '',
        id_antecedente: '',
        id_incidentes: '',
        status: true
    };

    const [libro, setLibro] = useState(estadoInicial);
    const [error, setError] = useState(null);

    // Cargar datos iniciales en modo edición
    useEffect(() => {
        if (isEditing && initialData) {
            // Asegurar que la fecha tenga el formato correcto para el input date
            const fechaFormateada = initialData.fecha_ingreso ?
                new Date(initialData.fecha_ingreso).toISOString().split('T')[0] : '';
    
            // Mapeo de textos a IDs para antecedentes
            const antecedentesMap = {
                'Robo': '1',
                'Homicidio': '2',
                'Tráfico de drogas': '3',
                'Asalto': '4',
                'Fraude': '5',
                'Violencia doméstica': '6',
                'Extorsión': '7',
                'Secuestro': '8',
                'Deserción': '9',
                'Delito de odio': '10',
                'Amenazas': '11',
                'Reincidente': '12',
                'Desorden público': '13',
                'Condena de 20 años': '14'
            };
    
            // Mapeo de textos a IDs para incidentes
            const incidentesMap = {
                'Riña': '1',
                'Fuga': '2',
                'Motín': '3',
                'Huelga': '4',
                'Agresión': '5',
                'Incendio': '6',
                'Agujeros de Seguridad': '7',
                'Contrabando': '8',
                'Desmayos': '9',
                'Enfermedad': '10',
                'Violación de Derechos': '11',
                'Escapes Masivos': '12',
                'Conflictos entre bandas': '13',
                'Insultos a personal': '14'
            };
    
            setLibro({
                ...initialData,
                fecha_ingreso: fechaFormateada,
                // Buscar el ID correspondiente al texto o dejar vacío si no se encuentra
                id_antecedente: antecedentesMap[initialData.antecedente] || '',
                id_incidentes: incidentesMap[initialData.incidente] || ''
            });
        } else {
            setLibro(estadoInicial);
        }
    }, [isEditing, initialData]);

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
            // Usar submitAction que viene como prop (createRecluso o updateRecluso)
            const result = await submitAction(libro);
            onSubmit(result);
            handleClose();

            // Limpiar formulario solo si no es edición
            if (!isEditing) {
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
                    status: true
                });
            }
        } catch (error) {
            setError(isEditing ? 'Error al actualizar el recluso' : 'Error al crear el recluso');
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
                                        <select
                                            className="form-select"
                                            name="genero"
                                            value={libro.genero}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Seleccione el género
                                            </option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                        </select>
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
                                        <label className="form-label">Antecedente</label>
                                        <select
                                            className="form-select"
                                            name="id_antecedente"
                                            value={libro.id_antecedente}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Seleccione un antecedente
                                            </option>
                                            <option value="1">Robo</option>
                                            <option value="2">Homicidio</option>
                                            <option value="3">Tráfico de drogas</option>
                                            <option value="4">Asalto</option>
                                            <option value="5">Fraude</option>
                                            <option value="6">Violencia doméstica</option>
                                            <option value="7">Extorsión</option>
                                            <option value="8">Secuestro</option>
                                            <option value="9">Deserción</option>
                                            <option value="10">Delito de odio</option>
                                            <option value="11">Amenazas</option>
                                            <option value="12">Reincidente</option>
                                            <option value="13">Desorden público</option>
                                            <option value="14">Condena de 20 años</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Incidentes</label>
                                        <select
                                            className="form-select"
                                            name="id_incidentes"
                                            value={libro.id_incidentes}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Seleccione un incidente
                                            </option>
                                            <option value="1">Riña</option>
                                            <option value="2">Fuga</option>
                                            <option value="3">Motín</option>
                                            <option value="4">Huelga</option>
                                            <option value="5">Agresión</option>
                                            <option value="6">Incendio</option>
                                            <option value="7">Agujeros de Seguridad</option>
                                            <option value="8">Contrabando</option>
                                            <option value="9">Desmayos</option>
                                            <option value="10">Enfermedad</option>
                                            <option value="11">Violación de Derechos</option>
                                            <option value="12">Escapes Masivos</option>
                                            <option value="13">Conflictos entre bandas</option>
                                            <option value="14">Insultos a personal</option>
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
