import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import CommonPage from '../../pages/commonPage/Commonpage.jsx';
import { getReclusos, getPlanillas, getPenales, getEmpleados } from '../../services/apisService.jsx';
import FormularioLibros from '../formularios/formularioLibros.jsx';

const DataLoader = () => {
    const [data, setData] = useState([]);
    const location = useLocation();

    // Definimos los encabezados para cada ruta
    const tableHeaders = {
        '/Planillas': [
            { key: 'id_planilla', label: 'ID Planilla' }, // Identificador único de la planilla
            { key: 'id_empleado', label: 'ID Empleado' }, // Identificador del empleado
            { key: 'id_cargo', label: 'ID Cargo' }, // Identificador del cargo del empleado
            { key: 'fecha_inicio', label: 'Fecha de Inicio' }, // Fecha de inicio en la planilla
            { key: 'salario', label: 'Salario' }, // Salario asignado
            { key: 'status', label: 'Estado' } // Estado activo/inactivo
        ]
        ,
        '/Reclusos': [
            { key: 'id_recluso', label: 'ID' },
            { key: 'nombre', label: 'Nombre' }, // Nombre del recluso
            { key: 'apellido', label: 'Apellido' }, // Apellido del recluso
            { key: 'genero', label: 'Género' }, // Género del recluso
            { key: 'nacionalidad', label: 'Nacionalidad' }, // Nacionalidad del recluso
            { key: 'fecha_ingreso', label: 'Fecha de Ingreso' }, // Fecha de ingreso al sistema
            { key: 'estado', label: 'Estado' }, // Estado activo/inactivo
            { key: 'pandilla', label: 'Pandilla' }, // Asociación con pandilla
            { key: 'condena', label: 'Condena' }, // Condena del recluso
            { key: 'incidente', label: 'Incidente' }, // Último incidente reportado
        ]
        ,
        '/Penales': [
            { key: 'id_penal', label: 'ID Penal' }, // Identificador único del penal
            { key: 'nombre', label: 'Nombre' }, // Nombre del penal
            { key: 'direccion', label: 'Dirección' }, // Dirección del penal
            { key: 'capacidad_celdas', label: 'Capacidad de Celdas' }, // Capacidad total de celdas
            { key: 'capacidad_reos', label: 'Capacidad de Reos' }, // Capacidad total de reos
            { key: 'status', label: 'Estado' } // Estado del penal (activo/inactivo)
        ]
        ,
        '/Empleados': [
            { key: 'id_empleado', label: 'ID Empleado' }, // Identificador único del empleado
            { key: 'nombre', label: 'Nombre' }, // Nombre del empleado
            { key: 'correo', label: 'Correo Electrónico' }, // Correo del empleado
            { key: 'telefono', label: 'Teléfono' }, // Teléfono del empleado
            { key: 'id_area', label: 'ID Área' }, // Área a la que pertenece el empleado
            { key: 'estado', label: 'Estado' }, // Estado activo/inactivo (alternativo a 'status')
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
                        fetchedData = await getPlanillas();
                        break;
                    case '/Reclusos':
                        fetchedData = await getReclusos();
                        break;
                    case '/Penales':
                        fetchedData = await getPenales();
                        break;
                    case '/Empleados':
                        fetchedData = await getEmpleados();
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
                        icon="bi-file-lock2"
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
                        icon="bi-grid-3x3"
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
                        icon="bi-people-fill"
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
                        title="Planillas"
                        icon="bi-book"
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