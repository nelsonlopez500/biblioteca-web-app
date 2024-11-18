import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import CommonPage from '../../pages/commonPage/Commonpage.jsx';
import { getRecluso, getPenales, getEmpleados, getPlanillas } from '../../services/apisService.jsx';
import FormularioLibros from '../formularios/formularioLibros.jsx';

const DataLoader = () => {
    const [data, setData] = useState([]);
    const location = useLocation();

    // Definimos los encabezados para cada ruta
    const tableHeaders = {
        '/reclusos':[
            { key: 'id_recluso', label: 'ID' },
            { key: 'nombre', label: 'Nombre' },
            { key: 'apellido', label: 'Apellido' },
            { key: 'genero', label: 'Género' },
            { key: 'nacionalidad', label: 'Nacionalidad' },
            { key: 'pandilla', label: 'Pandilla' },
            { key: 'antecedente', label: 'Antecedente' },
            { key: 'condena', label: 'Condena' },
            //{ key: 'detalle_antecedente', label: 'Detalle Antecedente' },
            //{ key: 'detalle_incidente', label: 'Detalle Incidente' },
            { key: 'incidente', label: 'Incidente' },
            { key: 'estado', label: 'Estado' },
            { key: 'fecha_ingreso', label: 'Fecha Ingreso' },
            //{ key: 'status', label: 'Status' }
        ]
        ,
        '/penales':[
            /*{ key: 'id_admin', label: 'ID Admin' },
            { key: 'id_departamento', label: 'ID Departamento' },
            { key: 'id_empleado', label: 'ID Empleado' },
            { key: 'id_equipo', label: 'ID Equipo' },
            { key: 'id_municipio', label: 'ID Municipio' },
            { key: 'id_penal', label: 'ID Penal' },
            { key: 'id_programas', label: 'ID Programas' },
            { key: 'id_tipo_penal', label: 'ID Tipo Penal' },
            { key: 'id_traslado', label: 'ID Traslado' },*/
            { key: 'nombre', label: 'Nombre' },
            { key: 'direccion', label: 'Dirección' },
            { key: 'capacidad_celdas', label: 'Capacidad Celdas' },
            { key: 'capacidad_reos', label: 'Capacidad Reos' },
            //{ key: 'status', label: 'Status' }
        ]
        ,
        '/empleados':[
            //{ key: 'id_area', label: 'ID Área' },
            //{ key: 'id_empleado', label: 'ID Empleado' },
            { key: 'nombre', label: 'Nombre' },
            { key: 'correo', label: 'Correo' },
            { key: 'telefono', label: 'Teléfono' },
            { key: 'estado', label: 'Estado' },
            //{ key: 'status', label: 'Status' }
        ]
        ,
        '/planillas':[
            { key: 'fecha_inicio', label: 'Fecha Inicio' },
            { key: 'id_cargo', label: 'ID Cargo' },
            { key: 'id_empleado', label: 'ID Empleado' },
            { key: 'id_planilla', label: 'ID Planilla' },
            { key: 'salario', label: 'Salario' },
            //{ key: 'status', label: 'Status' }
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
                    case '/reclusos':
                        fetchedData = await getRecluso();
                        break;
                    case '/penales':
                        fetchedData = await getPenales();
                        break;
                    case '/empleados':
                        fetchedData = await getEmpleados();
                        break;
                    case '/planillas':
                        fetchedData = await getPlanillas();
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
                path="/reclusos"
                element={
                    <CommonPage
                        title="reclusos"
                        icon="bi-book"
                        tableName="Libros Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/reclusos']}
                        showAddButton={true}
                        FormComponent={(props) => <FormularioLibros {...props} TitleForm="Agregar recluso" />}
                        EditComponent={(props) => <FormularioLibros {...props} TitleForm="Editar recluso" />}
                    />
                }
            />
            <Route
                path="/penales"
                element={
                    <CommonPage
                        title="Penales"
                        icon="bi-journal-arrow-up"
                        tableName="Préstamos Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/penales']}
                        showAddButton={false}
                    />
                }
            />
            <Route
                path="/empleados"
                element={
                    <CommonPage
                        title="Empleados"
                        icon="bi-building"
                        tableName="Editoriales Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/empleados']}
                        showAddButton={false}
                    />
                }
            />
            <Route
                path="/planillas"
                element={
                    <CommonPage
                        title="Planillas"
                        icon="bi-people-fill"
                        tableName="Usuarios Table"
                        tableData={data}
                        columnHeaders={tableHeaders['/planillas']}
                        showAddButton={false}
                    />
                }
            />
        </Routes>
    );
};

export default DataLoader;