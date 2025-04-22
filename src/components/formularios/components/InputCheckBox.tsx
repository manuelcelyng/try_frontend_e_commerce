import { useField } from "formik";

interface Props {
    name: string;
    label: string;
}

export default function InputCheckbox({ name, label }: Props) {
    const [field, meta] = useField({ name, type: "checkbox" });

    return (
        <div className="flex items-center gap-2">
            <input
                {...field}
                id={name}
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            {meta.touched && meta.error && (
                <span className="text-red-500 text-sm ml-2">{meta.error}</span>
            )}
        </div>
    );
}
