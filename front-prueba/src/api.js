// src/api.js
import axios from 'axios';

// Configura la instancia de axios
const api = axios.create({
  baseURL: 'http://localhost:3000', // tu backend Nest
  withCredentials: true,            // si usas cookies / sesiones
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ejemplo de función para obtener el mensaje principal
export const getHello = () => api.get('/');

// Puedes agregar más funciones para otros endpoints
export const getUsers = () => api.get('/users');
export const createUser = (data) => api.post('/users', data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);

export default api;
