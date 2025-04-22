import { ImagenesProductos } from "./imagenesProductos";

export type ProductoFormData = {
  id?: string;
  nombre: string;
  descripcion: string;
  referencia: string;
  precio: number;
  stock: number;
  status: boolean;
  marcaId: string;
  categoriaId: string;
  imagenes?: ImagenesProductos[];
};
