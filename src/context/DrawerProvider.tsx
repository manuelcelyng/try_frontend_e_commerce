import { ReactNode, useState } from "react";
import { DrawerContext } from "./DrawerContext";


export function DrawerProvider({ children }: { children: ReactNode }) {

    const [open, setOpen] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>(null);

    function openDrawer(content: ReactNode) {
        setContent(content) // Establece el contenido del drawer
        setOpen(true); // Abre el drawer
    }

    function closeDrawer() {
        setOpen(false); // Abre el drawer
        setContent(null)    // Limpia el contenido del drawer
    }

    return (
        <DrawerContext.Provider
            value={{
                open,
                openDrawer: openDrawer,
                closeDrawer: closeDrawer,
                content: content
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
}