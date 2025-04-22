import { ProductoFormData } from "../../models/producto";
import InputTexto from "./components/InputTexto";
import InputSelect from "./components/InputSelect";
import InputNumber from "./components/InputNumber";
import InputCheckbox from "./components/InputCheckBox";
import FormularioWrapper from "./components/FormularioWrapper";
import BotonSubmit from "./components/BotonSubmit";
import { useFormularioProducto } from "../../hooks/useFormularioProducto";
import { useMarcas } from "../../hooks/useMarcas";
import { useCategorias } from "../../hooks/useCategorias";
import InputImages from "./components/InputImages";



type Props = {
    modo: "crear" | "editar";
    data?: ProductoFormData
};




export default function FormularioProducto({ modo, data }: Props) {

    // Cargar marcas y categorias
    const { marcas } = useMarcas();
    const { categorias } = useCategorias();

    const {
        initialValues,
        productoValidationSchema,
        onSubmit,
        previewImgs,
        setArchivos,
        setPreviewImgs,
    } = useFormularioProducto(modo, data);



    return (
        <FormularioWrapper
            initialValues={initialValues}
            validationSchema={productoValidationSchema}
            onSubmit={onSubmit}
        >
            <h2 className="text-xl font-semibold mb-2">
                {modo === "crear" ? "Nuevo Producto" : `Editar Producto`}
            </h2>

            <InputTexto name="nombre" label="Nombre" />
            <InputTexto name="descripcion" label="Descripcion" as="textarea" />
            <InputTexto name="referencia" label="Referencia" />
            <InputNumber name="precio" label="Precio" placeholder="0" min={0} step={1} />
            <InputNumber name="stock" label="Stock" placeholder="0" min={0} step={1} />
            <InputCheckbox name="status" label="Activo" />
            <InputSelect name="marcaId" label="Marca"
                opciones={marcas.map((marca) => ({ value: marca.marcaId, label: marca.nombre }))}
            />
            <InputSelect name="categoriaId" label="Categoría"
                opciones={categorias.map((categoria) => ({ value: categoria.categoriaId, label: categoria.nombre }))}
            />

            <InputImages previews={previewImgs} setArchivos={setArchivos} setPreviewImgs={setPreviewImgs} />

            <BotonSubmit >
                {modo === "crear" ? "Crear" : "Actualizar"}
            </BotonSubmit>

        </FormularioWrapper>
    );
}
