import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Drawer from "./Drawer";
import { useDraweContext } from "../context/DrawerContext";

export default function Layout({ children }: { children: ReactNode }) {

    const { open, closeDrawer, content } = useDraweContext()

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar fija */}
            <Sidebar />
            {/* Contenido principal (ocupa todo el espacio disponible) */}
            <main className="flex-1 ml-64 p-8">{children}</main>
            <Drawer closeDrawer={closeDrawer} open={open} >{content}</Drawer>

        </div >
    );
}