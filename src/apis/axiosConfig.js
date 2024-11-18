import axios from 'axios';

const createApiClient = (baseURL) => {
    return axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const reclusosApiClient = createApiClient(process.env.REACT_APP_RECLUSOS_API_URL);
export const penalesApiClient = createApiClient(process.env.REACT_APP_PENALES_API_URL);
export const empleadosApiClient = createApiClient(process.env.REACT_APP_EMPLEADOS_API_URL);
export const planillasApiClient = createApiClient(process.env.REACT_APP_PLANILLAS_API_URL);
export const librosApiClient = createApiClient(process.env.REACT_APP_LIBROS_API_URL);
export const prestamosApiClient = createApiClient(process.env.REACT_APP_PRESTAMOS_API_URL);
export const createreclusoApiClient = createApiClient(process.env.REACT_APP_CREATE_RECLUSO_API_URL);
export const deletereclusoApiClient = createApiClient(process.env.REACT_APP_DELETE_RECLUSO_API_URL);