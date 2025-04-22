import { useField } from "formik";

interface Props {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    as?: "input" | "textarea";
}

export default function InputTexto(
    {
        name,
        label,
        placeholder = "",
        type = "text",
        as = "input",
    }: Props) {


    const [field, meta] = useField(name);

    const errorEstilo = meta.touched && meta.error ? "border-red-500" : "border-gray-300";


    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                {label}
            </label>

            {as === "textarea" ? (
                <textarea
                    {...field}
                    id={name}
                    placeholder={placeholder}
                    className={`input block font-medium ${errorEstilo}`}
                />
            ) : (
                <input
                    {...field}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    className={`input ${errorEstilo}`}
                />
            )}
            {meta.touched && meta.error && (
                <span className="text-red-500 text-sm">{meta.error}</span>
            )}
        </div>
    );
}
