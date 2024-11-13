import { usersApiClient, librosApiClient, prestamosApiClient, editorialesApiClient, createLibroApiClient, deleteLibroApiClient } from '../apis/axiosConfig';

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

//Metodo para crear un nuevo libro
export const createLibro = async (libro) => {
    try {
        const response = await createLibroApiClient.post('', libro);
        return response.data;
    } catch (error) {
        console.error('Error creating libro:', error);
        throw error;
    }
};

//Metodo para eliminar un libro
export const deleteLibro = async (libroId) => {
    try {
        const response = await deleteLibroApiClient.delete(`/${libroId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting libro:', error);
        throw error;
    }
};