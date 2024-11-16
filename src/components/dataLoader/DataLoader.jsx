import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import CommonPage from '../../pages/commonPage/Commonpage.jsx';
import { getUsers, getLibros, getPrestamos, getEditoriales } from '../../services/apisService.jsx';
import FormularioLibros from '../formularios/formularioLibros.jsx';

const DataLoader = () => {
    const [data, setData] = useState([]);
    const location = useLocation();

    // Definimos los encabezados para cada ruta
    const tableHeaders = {
        '/Planilla': [
            { key: 'libro_id', label: 'ID' },
            { key: 'titulo', label: 'Título' },
            { key: 'isbn', label: 'ISBN' },
            { key: 'editorial_id', label: 'Editorial' },
            { key: 'categoria_id', label: 'Categoría' },
            { key: 'fecha_publicacion', label: 'Fecha Publicación' },
            { key: 'status', label: 'Estado' }
        ],
        '/Reclusos': [
            { key: 'usuario_id', label: 'ID' },
            { key: 'nombre', label: 'Nombre' },
            { key: 'apellido', label: 'Apellido' },
            { key: 'email', label: 'Email' },
            { key: 'rol_id', label: 'Rol' },
            { key: 'status', label: 'Estado' },
            { key: 'fecha_registro', label: 'Fecha Registro' },
            { key: 'direccion', label: 'Dirección' },
            { key: 'telefono', label: 'Teléfono' }
        ],
        '/Penales': [
            { key: 'libro_id', label: 'Libro' },
            { key: 'usuario_id', label: 'Usuario' },
            { key: 'fecha_prestamo', label: 'Fecha Préstamo' },
            { key: 'fecha_vencimiento', label: 'Fecha Vencimiento' },
            { key: 'estado_prestamo', label: 'Estado' },
            { key: 'biblioteca_id', label: 'Biblioteca' },
            { key: 'created_at', label: 'Fecha Creación' }
        ],
        '/Empleados': [
            { key: 'editorial_id', label: 'ID' },
            { key: 'nombre_editorial', label: 'Nombre Editorial' },
            { key: 'status', label: 'Estado' },
            { key: 'created_at', label: 'Fecha Creación' }
        ]
    };

    // Función para ordenar datos
    const sortData = (data, sortBy = 'nombre') => {
        return [...data].sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let fetchedData = [];
                switch (location.pathname) {
                    case '/Planillas':
                        fetchedData = await getUsers();
                        break;
                    case '/Reclusos':
                        fetchedData = await getLibros();
                        break;
                    case '/Penales':
                        fetchedData = await getPrestamos();
                        break;
                    case '/Empleados':
                        fetchedData = await getEditoriales();
                        break;
                    default:
                        break;
                }
                // Ordenamos los datos antes de guardarlos
                const sortedData = sortData(fetchedData, tableHeaders[location.pathname][0].key);
                setData(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [location.pathname]);

    return (
        <Routes>
            <Route
                path="/Reclusos"
                element={
                    <CommonPage
                        title="Reclusos"
                        icon="bi-book"
                        tableName="Reclusos Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/Reclusos']}
                        showAddButton={true}
                        FormComponent={(props) => <FormularioLibros {...props} TitleForm="Agregar Recluso" />}
                        EditComponent={(props) => <FormularioLibros {...props} TitleForm="Editar Recluso" />}
                    />
                }
            />
            <Route
                path="/Penales"
                element={
                    <CommonPage
                        title="Penales"
                        icon="bi-journal-arrow-up"
                        tableName="Penales Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/Penales']}
                        showAddButton={false}
                    />
                }
            />
            <Route
                path="/Empleados"
                element={
                    <CommonPage
                        title="Empleados"
                        icon="bi-building"
                        tableName="Empleados Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/Empleados']}
                        showAddButton={false}
                    />
                }
            />
            <Route
                path="/Planillas"
                element={
                    <CommonPage
                        title="Planilla"
                        icon="bi-people-fill"
                        tableName="Planillas Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/Planillas']}
                        showAddButton={false}
                    />
                }
            />
        </Routes>
    );
};

export default DataLoader;