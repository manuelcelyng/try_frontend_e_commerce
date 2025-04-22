import { ProductoFormData } from "../../models/producto";
import TablaGenerica from "../Table";


interface Props {
    productos: ProductoFormData[];
    onEditar: (producto: ProductoFormData) => void;
}

export default function ProductosTabla({ productos, onEditar }: Props) {
    const columnas = [
        { id: "nombre", header: "Nombre" },
        { id: "referencia", header: "Referencia" },
        {
            id: "precio",
            header: "Precio",
            render: (val: unknown) => `$${val}`,
        },
        {
            id: "status",
            header: "Estado",
            render: (val: unknown) => val ? "🟢 Activo" : "🔴 Inactivo",
        },
    ];

    return (
        <TablaGenerica
            columnas={columnas}
            datos={productos}
            onEditar={onEditar}
        />
    );
}
