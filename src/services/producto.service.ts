import axios from "axios";
import { ProductoFormData } from "../models/producto";

const API = "/api"; // ← ajustá esto según tu backend

export const crearProducto = (producto: unknown) =>
  axios.post(`${API}/producto`, producto);

export const setImagenesProducto = async (files: File[] | null) => {
  if (!files || files.length === 0) return;

  const formData = new FormData();
  Array.from(files).forEach((file) => {
    formData.append("files", file);
  });

  const response = await axios.post(`${API}/producto/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data; // array de URLs
};

export const updateProducto = (id: string, producto: ProductoFormData) =>
  axios.put(`${API}/producto/${id}`, producto);

export const getProductos = () => {
  return axios.get(`${API}/producto`);
};
