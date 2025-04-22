import axios from "axios";

const API = "/api"; // ← ajustá esto según tu backend

export const getCategorias = () => axios.get(`${API}/categoria`);
