import axios from "axios";

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
