import axios from "axios";

const API = "/api"; // ← ajustá esto según tu backend

export const getMarcas = () => axios.get(`${API}/marca`);
