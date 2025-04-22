import { useEffect, useState } from "react";
import FormularioProducto from "../components/formularios/FormularioProducto";
import ProductosTabla from "../components/productos/ProductosTabla";
import { useDraweContext } from "../context/DrawerContext";
import { getProductos } from "../services/producto.service";
import { ProductoFormData } from "../models/producto";

export default function ProductosPage() {
    const { openDrawer } = useDraweContext();

    const [productos, setProductos] = useState<ProductoFormData[]>([]);

    function handleOpenDrawer(modo: "crear" | "editar", producto?: ProductoFormData) {
        openDrawer(<FormularioProducto modo={modo} data={producto} ></FormularioProducto >); // abre el drawer
    }

    useEffect(() => {
        getProductos().then((res) => {
            setProductos(res.data); // setea los productos en el estado
        }
        ).catch((error) => {
            console.error("Error al obtener productos:", error);
        });
    }, []);

    const handleEditar = (producto: ProductoFormData) => {
        handleOpenDrawer("editar", producto)
    };

    const handleCrear = () => {

        handleOpenDrawer("crear")
    };


    return (
        <section className="bg-white p-6 rounded shadow">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">🛒 Productos</h1>
                <button
                    onClick={handleCrear}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    + Nuevo Producto
                </button>
            </header>

            <div className="p-4 border rounded text-center text-gray-600 bg-gray-50">
                <ProductosTabla productos={productos} onEditar={handleEditar} />
            </div>
        </section>
    );
}
