import React from 'react';
import Navbar from '../../components/navBar/navBar.jsx';
import Sidebar from '../../components/sideBar/sideBar.jsx';
import TableComponent from '../../components/tables/TableComponent.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Commonpage.css';

const CommonPage = ({ title, icon, tableData = [], tableName = "Default Table Name", showAddButton = false }) => {
    return (
        <div className="page-container">
            <div className="dashboard">
                <Navbar />
                <Sidebar />
                <div className="title-bar">
                    <h4><i className={`bi ${icon}`}></i> {title}</h4>
                    {showAddButton && (
                        <button className="add-button">
                            <i className="bi bi-plus-circle icon"></i>
                            Agregar
                        </button>
                    )}
                </div>
                <div className="table-card">
                    <div className="table-container">
                        <TableComponent tableName={tableName || "Default Table Name"} data={tableData || []} />
                    </div>
                </div>
            </div>
            <div className="bottom-half"></div>
        </div>
    );
};

export default CommonPage;