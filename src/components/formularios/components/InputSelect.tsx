import { useField } from "formik";

interface Option {
    value: string;
    label: string;
}

interface Props {
    name: string;
    label: string;
    opciones: Option[];
}

export default function InputSelect({ name, label, opciones }: Props) {
    const [field, meta] = useField(name);

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                {...field}
                id={name}
                className={`input ${meta.touched && meta.error ? "border-red-500" : "border-gray-300"
                    }`}
            >
                <option value="">Seleccione una opción</option>
                {opciones.map((op) => (
                    <option key={op.value} value={op.value}>
                        {op.label}
                    </option>
                ))}
            </select>
            {meta.touched && meta.error && (
                <span className="text-red-500 text-sm">{meta.error}</span>
            )}
        </div>
    );
}
