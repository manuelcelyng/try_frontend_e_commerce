import { useEffect, useState } from "react";
import { ProductoFormData } from "../models/producto";
import {
  crearProducto,
  setImagenesProducto,
  updateProducto,
} from "../services/producto.service";
import { mostrarError, mostrarExito } from "../services/toast.service";
import { productoValidationSchema } from "../validations/producto.schema";

export function useFormularioProducto(
  modo: "crear" | "editar",
  data?: ProductoFormData
) {
  const [archivos, setArchivos] = useState<File[]>([]);
  const [previewImgs, setPreviewImgs] = useState<string[]>([]);

  useEffect(() => {
    if (modo === "editar" && data?.imagenes) {
      const urls = data.imagenes.map((img) => img.url);
      setPreviewImgs(urls);
    }
  }, []);

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
      if (modo === "editar") {
        if (!data.id) {
          mostrarError("ID de producto no encontrado ❌");
          throw new Error("ID de producto no encontrado");
        }
        await updateProducto(data.id, productoFinal);
        mostrarExito("Producto editado con éxito 🎉");
      } else if (modo === "crear") {
        await crearProducto(productoFinal);
        mostrarExito("Producto creado con éxito 🎉");
      }
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
