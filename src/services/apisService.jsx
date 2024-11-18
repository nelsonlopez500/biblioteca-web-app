import {createReclusoApiClient, deleteReclusoApiClient, reclusosApiClient, planillasApiClient, penalesApiClient, empleadosApiClient } from '../apis/axiosConfig';

// Métodos para la API de reclusos
export const getReclusos = async () => {
    try {
        const response = await reclusosApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching reclusos:', error);
        throw error;
    }
};

// Métodos para la API de planillas
export const getPlanillas = async () => {
    try {
        const response = await planillasApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching planillas:', error);
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

//Metodo para crear un nuevo recluso
export const createRecluso = async (recluso) => {
    try {
        const response = await createReclusoApiClient.post('', recluso);
        return response.data;
    } catch (error) {
        console.error('Error creating recluso:', error);
        throw error;
    }
};

//Metodo para eliminar un recluso
export const deleteRecluso = async (libroId) => {
    try {
        const response = await deleteReclusoApiClient.delete(`/${libroId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting recluso:', error);
        throw error;
    }
};