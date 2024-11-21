import {
    usersApiClient,
    librosApiClient,
    prestamosApiClient,
    editorialesApiClient,
    createLibroApiClient,
    deleteLibroApiClient,
    createUsuarioApiClient,
    deleteUsuarioApiClient,
    updateLibroApiClient,
    updateUsuarioApiClient
} from '../apis/axiosConfig';

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

//Metodo para actualizar un libro
export const updateLibro = async (libro) => {
    try {
        const response = await updateLibroApiClient.put(`/${libro.libro_id}`, libro);
        return response.data;
    } catch (error) {
        console.error('Error updating libro:', error);
        throw error;
    }
};


export const createUsuario = async (usuario) => {
    try {
        const response = await createUsuarioApiClient.post('', usuario);
        return response.data;
    } catch (error) {
        console.error('Error creating usuario:', error);
        throw error;
    }
};

//Metodo para actualizar un usuario
export const updateUsuario = async (usuario) => {
    try {
        const response = await updateUsuarioApiClient.put(`/${usuario.usuario_id}`, usuario);
        return response.data;
    } catch (error) {
        console.error('Error updating usuario:', error);
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

//Metodo para eliminar un usuario
export const deleteUsuario = async (usuarioId) => {
    try {
        const response = await deleteUsuarioApiClient.delete(`/${usuarioId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting usuario:', error);
        throw error;
    }
};