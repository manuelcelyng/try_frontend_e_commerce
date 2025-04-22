import { useFormikContext } from "formik";
import { ReactNode, ButtonHTMLAttributes } from "react";



interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}


export default function BotonSubmit({
    children,
    ...Rest
}: Props) {

    const { isSubmitting } = useFormikContext();

    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            {...Rest}
        >
            {isSubmitting && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {children}
        </button>
    )


}