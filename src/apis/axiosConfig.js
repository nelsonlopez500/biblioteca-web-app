import axios from 'axios';

const createApiClient = (baseURL) => {
    return axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const usersApiClient = createApiClient(process.env.REACT_APP_USERS_API_URL);
export const bibliotecasApiClient = createApiClient(process.env.REACT_APP_BIBLIOTECAS_API_URL);
export const categoriasApiClient = createApiClient(process.env.REACT_APP_CATEGORIAS_API_URL);
export const editorialesApiClient = createApiClient(process.env.REACT_APP_EDITORIALES_API_URL);
export const librosApiClient = createApiClient(process.env.REACT_APP_LIBROS_API_URL);
export const prestamosApiClient = createApiClient(process.env.REACT_APP_PRESTAMOS_API_URL);
export const createLibroApiClient = createApiClient(process.env.REACT_APP_CREATE_LIBRO_API_URL);
export const createUsuarioApiClient = createApiClient(process.env.REACT_APP_CREATE_USERS_API_URL);
export const deleteLibroApiClient = createApiClient(process.env.REACT_APP_DELETE_LIBRO_API_URL);
export const deleteUsuarioApiClient = createApiClient(process.env.REACT_APP_DELETE_USERS_API_URL);
export const updateLibroApiClient = createApiClient(process.env.REACT_APP_UPDATE_LIBRO_API_URL);
