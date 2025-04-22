import { useState } from "react";
import { ProductoFormData } from "../models/producto";
import {
  crearProducto,
  setImagenesProducto,
} from "../services/producto.service";
import { mostrarError, mostrarExito } from "../services/toast.service";
import { productoValidationSchema } from "../validations/producto.schema";

export function useFormularioProducto(
  modo: "crear" | "editar",
  data?: ProductoFormData
) {
  const [archivos, setArchivos] = useState<File[]>([]);
  const [previewImgs, setPreviewImgs] = useState<string[]>([]);

  const initialValues: ProductoFormData = {
    nombre: data?.nombre || "",
    descripcion: data?.descripcion || "",
    referencia: data?.referencia || "",
    precio: data?.precio || 0,
    stock: data?.stock || 0,
    status: data?.status ?? true,
    marcaId: data?.marcaId || "",
    categoriaId: data?.categoriaId || "",
    imagenes: [],
  };

  const onSubmit = async (data: ProductoFormData): Promise<void> => {
    try {
      const imagenes = await setImagenesProducto(archivos);
      const productoFinal = {
        ...data,
        imagenes,
      };
      await crearProducto(productoFinal);
      mostrarExito("Producto creado con éxito 🎉");
    } catch (error) {
      console.error("Error al crear producto:", error);
      mostrarError("Error al guardar producto ❌");
    }
  };

  return {
    initialValues,
    productoValidationSchema,
    onSubmit,
    previewImgs,
    setArchivos,
    setPreviewImgs,
  };
}
