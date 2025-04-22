import { useField } from "formik";




interface Props {
    name: string;
    label: string;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
}



export default function InputNumber({
    name,
    label,
    placeholder = "",
    min,
    max,
    step,
}: Props) {


    const [field, meta] = useField(name);

    const errorEstilo = meta.touched && meta.error ? "border-red-500" : "border-gray-300";

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                {...field}
                id={name}
                type="number"
                placeholder={placeholder}
                min={min}
                max={max}
                step={step}
                className={`input ${errorEstilo}`}
            />
            {meta.touched && meta.error && (
                <span className="text-red-500 text-sm">{meta.error}</span>
            )}
        </div>
    );
}