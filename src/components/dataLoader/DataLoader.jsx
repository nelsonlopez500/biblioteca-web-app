import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import CommonPage from '../../pages/commonPage/Commonpage.jsx';
import { getUsers } from '../../services/usuariosService.jsx';

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
                        fetchedData = [
                            { name: 'Libro 1', author: 'Autor 1', year: 2020 },
                            { name: 'Libro 2', author: 'Autor 2', year: 2019 },
                            { name: 'Libro 3', author: 'Autor 3', year: 2018 }
                        ];
                        break;
                    case '/prestamos':
                        fetchedData = [
                            { name: 'Prestamo 1', date: '2021-01-01', user: 'Usuario 1' },
                            { name: 'Prestamo 2', date: '2021-02-01', user: 'Usuario 2' },
                            { name: 'Prestamo 3', date: '2021-03-01', user: 'Usuario 3' }
                        ];
                        break;
                    case '/editoriales':
                        fetchedData = [
                            { name: 'Editorial 1', country: 'País 1' },
                            { name: 'Editorial 2', country: 'País 2' },
                            { name: 'Editorial 3', country: 'País 3' }
                        ];
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