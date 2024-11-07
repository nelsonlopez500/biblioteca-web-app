import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableComponent.css';

const TableComponent = ({ tableName, data, showEditButton = false, EditComponent }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [showModal, setShowModal] = useState(false);

    if (!data || data.length === 0) {
        return <div className="table-container">No data available</div>;
    }

    const columns = Object.keys(data[0]);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleEdit = (row) => {
        console.log('Deleting row:', row);
        setShowModal(true)
    };

    const handleDelete = (row) => {
        console.log('Deleting row:', row);
    };

    const handleSubmit = async (formData) => {
        try {
            console.log('Form data:', formData);
            setShowModal(false);
            window.location.reload();
        } catch (error) {
            console.error('Error al guardar:', error);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="table-container">
            <div className="table-responsive">
                <table className="table table-dark table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            {columns.map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                            {showEditButton && <th>Acciones</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((row, index) => (
                            <tr key={index}>
                                {columns.map((column) => (
                                    <td key={column}>
                                        {typeof row[column] === 'boolean' 
                                            ? (row[column] ? 'Activo' : 'Inactivo')
                                            : row[column]}
                                    </td>
                                ))}
                                {showEditButton && (
                                    <td>
                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => handleEdit(row)}
                                            >
                                                <i className="bi bi-pencil"></i> Editar
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(row)}
                                            >
                                                <i className="bi bi-trash"></i> Eliminar
                                            </button>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    &laquo; Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next &raquo;
                </button>
            </div>
            {EditComponent && (
                <EditComponent
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

TableComponent.propTypes = {
    tableName: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    showEditButton: PropTypes.bool,
    EditComponent: PropTypes.elementType
};

export default TableComponent;