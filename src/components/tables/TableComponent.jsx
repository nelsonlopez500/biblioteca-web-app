import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteLibro, deleteRecluso } from '../../services/apisService';
import './TableComponent.css';

const TableComponent = ({ 
    tableName, 
    data, 
    columns = [], 
    showEditButton = false, 
    EditComponent,
    deleteMethod, 
    entityName = 'registro', 
    idField,
    onRowSelect
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const itemsPerPage = 10;
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    if (!data || data.length === 0) {
        return <div className="table-container">No data available</div>;
    }

    const tableColumns = columns.length > 0 ? columns : Object.keys(data[0]).map(key => ({ key, label: key }));
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleSort = (columnKey) => {
        if (sortColumn === columnKey) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(columnKey);
            setSortDirection('asc');
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (!sortColumn) return 0;
        
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (sortDirection === 'asc') {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
            return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
        }
    });

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleEdit = (row) => {
        onRowSelect(row);
        setSelectedRow(row);
        setShowModal(true);
    };

    const handleDelete = async (row) => {
        try {
            const isConfirmed = window.confirm(`¿Está seguro que desea eliminar este ${entityName}?`);

            if (isConfirmed) {
                await deleteMethod(row[idField]);
                window.location.reload();
            }
        } catch (error) {
            console.error(`Error al eliminar ${entityName}:`, error);
        }
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
    const currentData = sortedData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="table-container">
            <div className="table-responsive">
                <table className="table table-dark table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            {tableColumns.map((column) => (
                                <th 
                                    key={column.key}
                                    onClick={() => handleSort(column.key)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {column.label}
                                    {sortColumn === column.key && (
                                        <i className={`bi bi-arrow-${sortDirection === 'asc' ? 'up' : 'down'}`} />
                                    )}
                                </th>
                            ))}
                            {showEditButton && <th>Acciones</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((row, index) => (
                            <tr key={index}>
                                {tableColumns.map((column) => (
                                    <td key={column.key}>
                                        {typeof row[column.key] === 'boolean'
                                            ? (row[column.key] ? 'Activo' : 'Inactivo')
                                            : row[column.key]}
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
                    &laquo; Anterior
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    siguiente &raquo;
                </button>
            </div>
            {EditComponent && (
                <EditComponent
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    onSubmit={handleSubmit}
                    initialData={selectedRow}
                />
            )}
        </div>
    );
};

TableComponent.propTypes = {
    tableName: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ),
    showEditButton: PropTypes.bool,
    EditComponent: PropTypes.elementType
};

export default TableComponent;