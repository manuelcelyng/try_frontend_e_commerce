import * as Yup from "yup";

export const productoValidationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
  referencia: Yup.string().required("La referencia es obligatoria"),
  precio: Yup.number()
    .required("El precio es obligatorio")
    .positive("Debe ser positivo"),
  stock: Yup.number()
    .required("El stock es obligatorio")
    .min(0, "Debe ser 0 o más"),
  status: Yup.boolean(),
  marcaId: Yup.string().required("La marca es obligatoria"),
  categoriaId: Yup.string().required("La categoría es obligatoria"),
});
