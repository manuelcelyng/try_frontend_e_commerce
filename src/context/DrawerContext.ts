import { createContext, ReactNode, useContext } from "react";

type DrawerContextType = {
  open: boolean;
  openDrawer: (content: ReactNode) => void;
  closeDrawer: () => void;
  content: React.ReactNode;
};

export const DrawerContext = createContext<DrawerContextType>({
  open: false,
  openDrawer: () => null,
  closeDrawer: () => null,
  content: null,
});

export const useDraweContext = () => {
  const context = useContext(DrawerContext);
  if (!context) throw new Error("useDrawer must be used inside DrawerProvider");
  return context;
};
