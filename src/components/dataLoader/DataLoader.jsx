import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import CommonPage from '../../pages/commonPage/Commonpage.jsx';
import { getUsers, getLibros, getPrestamos, getEditoriales, deleteLibro, deleteUsuario, createLibro, updateLibro, createUsuario, updateUsuario } from '../../services/apisService.jsx';
import FormularioLibros from '../formularios/formularioLibros.jsx';
import FormularioUsuario from '../formularios/formularioUsario/formularioUsuario.jsx';

const DataLoader = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const [selectedRecord, setSelectedRecord] = useState(null);


    // Definimos los encabezados para cada ruta
    const tableHeaders = {
        '/libros': [
            { key: 'libro_id', label: 'ID' },
            { key: 'titulo', label: 'Título' },
            { key: 'isbn', label: 'ISBN' },
            { key: 'editorial_id', label: 'Editorial' },
            { key: 'categoria_id', label: 'Categoría' },
            { key: 'fecha_publicacion', label: 'Fecha Publicación' },
            { key: 'status', label: 'Estado' }
        ],
        '/usuarios': [
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
        '/prestamos': [
            { key: 'libro_id', label: 'Libro' },
            { key: 'usuario_id', label: 'Usuario' },
            { key: 'fecha_prestamo', label: 'Fecha Préstamo' },
            { key: 'fecha_vencimiento', label: 'Fecha Vencimiento' },
            { key: 'estado_prestamo', label: 'Estado' },
            { key: 'biblioteca_id', label: 'Biblioteca' },
            { key: 'created_at', label: 'Fecha Creación' }
        ],
        '/editoriales': [
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
                    case '/usuarios':
                        fetchedData = await getUsers();
                        break;
                    case '/libros':
                        fetchedData = await getLibros();
                        break;
                    case '/prestamos':
                        fetchedData = await getPrestamos();
                        break;
                    case '/editoriales':
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
                path="/libros"
                element={
                    <CommonPage
                        title="Libros"
                        icon="bi-book"
                        tableName="Libros Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/libros']}
                        showAddButton={true}
                        showEditButton={true}
                        onRowSelect={(record) => setSelectedRecord(record)}
                        FormComponent={(props) => (
                            <FormularioLibros
                                {...props}
                                TitleForm="Agregar Libro"
                                submitAction={createLibro}
                            />
                        )}
                        EditComponent={(props) => (
                            <FormularioLibros
                                {...props}
                                TitleForm="Editar Libro"
                                submitAction={updateLibro}
                                initialData={selectedRecord}
                                isEditing={true}
                            />
                        )}
                        deleteMethod={deleteLibro}
                        entityName="libro"
                        idField="libro_id"
                    />
                }
            />
            <Route
                path="/prestamos"
                element={
                    <CommonPage
                        title="Préstamos"
                        icon="bi-journal-arrow-up"
                        tableName="Préstamos Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/prestamos']}
                        showAddButton={false}
                        showEditButton={false}

                    />
                }
            />
            <Route
                path="/editoriales"
                element={
                    <CommonPage
                        title="Editoriales"
                        icon="bi-building"
                        tableName="Editoriales Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/editoriales']}
                        showAddButton={false}
                        showEditButton={true}

                    />
                }
            />
            <Route
                path="/usuarios"
                element={
                    <CommonPage
                        title="Usuarios"
                        icon="bi-people-fill"
                        tableName="Usuarios Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/usuarios']}
                        showAddButton={true}
                        showEditButton={true}
                        onRowSelect={(record) => setSelectedRecord(record)}
                        FormComponent={(props) => (
                            <FormularioUsuario 
                                {...props}
                                TitleForm="Agregar Usuario"
                                submitAction={createUsuario}
                            />
                        )}
                        EditComponent={(props) => (
                            <FormularioUsuario
                                {...props}
                                TitleForm="Editar Usuario"
                                submitAction={updateUsuario}
                                initialData={selectedRecord}
                                isEditing={true}
                            />
                        )}
                        deleteMethod={deleteUsuario}
                        entityName="usuario"
                        idField="usuario_id"
                    />
                }
            />
        </Routes>
    );
};

export default DataLoader;