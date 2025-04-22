import { ChangeEvent } from "react";


interface Props {
    previews: string[];
    setArchivos: React.Dispatch<React.SetStateAction<File[]>>;
    setPreviewImgs: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function InputImages({
    previews,
    setArchivos,
    setPreviewImgs
}: Props) {


    const eliminarImagen = (index: number) => {
        setArchivos((prev) => prev.filter((_, i) => i !== index));
        setPreviewImgs((prev) => prev.filter((_, i) => i !== index));
    };


    const handleFileUpload = async (files: FileList | null) => {
        if (!files) return;

        // Guardar archivos en el estado
        const fileArray = Array.from(files);
        setArchivos((prev) => [...prev, ...fileArray]);

        // Preview inmediato
        const previews = Array.from(files).map((file) => URL.createObjectURL(file));
        setPreviewImgs((prev) => [...prev, ...previews]);
    };


    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor="file-upload"
                className="inline-block bg-gray-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition"
            >
                📁 Subir imágenes
            </label>
            <input
                type="file"
                id="file-upload"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleFileUpload(e.target.files)
                }
            />

            {/* Previews */}
            <div className="flex gap-2 flex-wrap mb-2">
                {previews.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative group w-24 h-24 rounded border overflow-hidden"
                    >
                        <img
                            src={src}
                            alt={`preview-${idx}`}
                            className="w-full h-full object-cover"
                        />
                        <button
                            type="button"
                            onClick={() => eliminarImagen(idx)}
                            className="absolute top-1 right-1 w-6 h-6 rounded bg-black/30 text-white text-sm opacity-0 group-hover:opacity-100 hover:bg-red-600 hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                            title="Eliminar"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

}