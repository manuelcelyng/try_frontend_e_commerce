import { ReactNode } from "react";

interface Columna<T> {
    id: string;
    header: string;
    render?: (dato: T[keyof T], fila: T) => ReactNode
}

interface Props<T> {
    columnas: Columna<T>[];
    datos: T[];
    onEditar?: (fila: T) => void;
}

export default function TablaGenerica<T>({ columnas, datos, onEditar }: Props<T>) {
    return (
        <div className="overflow-x-auto bg-white shadow rounded">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        {columnas.map((col) => (
                            <th key={col.id} className="p-2 text-left">{col.header}</th>
                        ))}
                        {onEditar && <th className="p-2 text-left">Acciones</th>}
                    </tr>
                </thead>
                <tbody>
                    {datos.map((fila, idx) => (
                        <tr key={idx} className="border-t hover:bg-gray-50">
                            {columnas.map((col) => (
                                <td key={col.id} className="p-2">
                                    {col.render ? col.render(fila[col.id as keyof T], fila) : fila[col.id as keyof T] as ReactNode}
                                </td>
                            ))}
                            {onEditar && (
                                <td className="p-2">
                                    <button
                                        onClick={() => onEditar(fila)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        ✏️ Editar
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}