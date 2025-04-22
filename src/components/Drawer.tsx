import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    closeDrawer: () => void;
    open: boolean;
};

export default function Drawer({ children, closeDrawer, open }: Props) {




    return (
        <div
            className={`fixed top-0 right-0 h-screen w-96 bg-white shadow-lg border-l z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-bold">Formulario</h2>
                    <button onClick={closeDrawer} className="text-gray-500 hover:text-red-500">✖</button>
                </div>
                <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}

