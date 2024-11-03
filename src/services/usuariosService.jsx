import { usersApiClient, librosApiClient, prestamosApiClient, editorialesApiClient } from '../apis/axiosConfig';

// Métodos para la API de usuarios
export const getUsers = async () => {
    try {
        const response = await usersApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Métodos para la API de libros
export const getLibros = async () => {
    try {
        const response = await librosApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching libros:', error);
        throw error;
    }
};

// Métodos para la API de préstamos
export const getPrestamos = async () => {
    try {
        const response = await prestamosApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching prestamos:', error);
        throw error;
    }
};

// Métodos para la API de editoriales
export const getEditoriales = async () => {
    try {
        const response = await editorialesApiClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching editoriales:', error);
        throw error;
    }
};