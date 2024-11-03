import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import CommonPage from '../../pages/commonPage/Commonpage.jsx';
import { getUsers, getLibros, getPrestamos, getEditoriales } from '../../services/usuariosService.jsx';

const DataLoader = () => {
    const [data, setData] = useState([]);
    const location = useLocation();

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
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/libros" element={<CommonPage title="Libros" icon="bi-book" tableName="Libros Table" tableData={data} showAddButton={true} />} />
            <Route path="/prestamos" element={<CommonPage title="Préstamos" icon="bi-journal-arrow-up" tableName="Préstamos Table" tableData={data} showAddButton={true} />} />
            <Route path="/editoriales" element={<CommonPage title="Editoriales" icon="bi-building" tableName="Editoriales Table" tableData={data} showAddButton={true} />} />
            <Route path="/usuarios" element={<CommonPage title="Usuarios" icon="bi-people-fill" tableName="Usuarios Table" tableData={data} showAddButton={true} />} />
        </Routes>
    );
};

export default DataLoader;