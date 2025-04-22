import FormularioProducto from "../components/formularios/FormularioProducto";
import { useDraweContext } from "../context/DrawerContext";

export default function ProductosPage() {
    const { openDrawer } = useDraweContext();


    function handleOpenDrawer() {
        openDrawer(<FormularioProducto modo={"crear"} ></FormularioProducto >); // abre el drawer
    }

    return (
        <section className="bg-white p-6 rounded shadow">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">🛒 Productos</h1>
                <button
                    onClick={handleOpenDrawer}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    + Nuevo Producto
                </button>
            </header>

            <div className="p-4 border rounded text-center text-gray-600 bg-gray-50">
                Aquí irá la tabla 📊
            </div>
        </section>
    );
}
