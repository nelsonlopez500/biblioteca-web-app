import {  deletereclusoApiClient, penalesApiClient, empleadosApiClient, planillasApiClient, createreclusoApiClient, reclusosApiClient } from '../apis/axiosConfig';

// Métodos para la API de recluso
export const getRecluso = async () => {
    try {
        const response = await reclusosApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching reclusos:', error);
        throw error;
    }
};

// Métodos para la API de penales
export const getPenales = async () => {
    try {
        const response = await penalesApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching penales:', error);
        throw error;
    }
};

// Métodos para la API de empleados
export const getEmpleados = async () => {
    try {
        const response = await empleadosApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching empleados:', error);
        throw error;
    }
};

// Métodos para la API de editoriales
export const getPlanillas = async () => {
    try {
        const response = await planillasApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching editoriales:', error);
        throw error;
    }
};

//Metodo para crear un nuevo libro
export const createrecluso = async (recluso) => {
    try {
        const response = await createreclusoApiClient.post('', recluso);
        return response.data;
    } catch (error) {
        console.error('Error creating recluso:', error);
        throw error;
    }
};

//Metodo para eliminar un libro
export const deleteRecluso = async (reclusoid) => {
    try {
        const response = await deletereclusoApiClient.delete(`/${reclusoid}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting recluso:', error);
        throw error;
    }
};