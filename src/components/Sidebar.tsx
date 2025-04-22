import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r shadow p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Panel Admin</h2>
            <nav className="flex flex-col gap-4">
                <Link to="/productos">🛒 Productos</Link>
                <Link to="/categorias">📦 Categorías</Link>
                <Link to="/marcas">🏷️ Marcas</Link>
            </nav>
        </aside>
    );
}
