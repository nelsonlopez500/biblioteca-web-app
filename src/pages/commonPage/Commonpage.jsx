import React, { useState } from 'react';
import Navbar from '../../components/navBar/navBar.jsx';
import Sidebar from '../../components/sideBar/sideBar.jsx';
import TableComponent from '../../components/tables/TableComponent.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {deleteLibro } from '../../services/apisService.jsx';

import './Commonpage.css';

const CommonPage = ({ 
    title, 
    icon, 
    tableData = [], 
    tableName = "Default Table Name", 
    showAddButton = false, 
    showEditButton = false,
    FormComponent, 
    EditComponent,
    columnHeaders = [],
    deleteMethod, // Nueva prop
    entityName = 'registro', // Nueva prop
    idField, // Nueva prop
    onRowSelect

}) => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (formData) => {
        try {
            console.log('Form data:', formData);
            setShowModal(false);
            window.location.reload();
        } catch (error) {
            console.error('Error al guardar:', error);
        }
    };

    return (
        <div className="page-container">
            <div className="dashboard">
                <Navbar />
                <Sidebar />
                <div className="title-bar">
                    <h4><i className={`bi ${icon}`}></i> {title}</h4>
                    {showAddButton && (
                        <button className="add-button" onClick={() => setShowModal(true)}>
                            <i className="bi bi-plus-circle icon"></i>
                            Agregar
                        </button>
                    )}
                </div>
                <div className="table-card">
                    <div className="table-container">
                        <TableComponent
                            tableName={tableName}
                            data={tableData}
                            columns={columnHeaders} 
                            showEditButton={showEditButton}
                            EditComponent={EditComponent}
                            deleteMethod={deleteMethod}
                            entityName={entityName}
                            idField={idField}
                            onRowSelect={onRowSelect}
                        />
                    </div>
                </div>
            </div>
            {FormComponent && (
                <FormComponent
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    onSubmit={handleSubmit}
                />
            )}
            <div className="bottom-half"></div>
        </div>
    );
};

export default CommonPage;