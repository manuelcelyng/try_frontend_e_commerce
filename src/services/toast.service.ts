import { toast } from "react-toastify";

export const mostrarExito = (mensaje: string) => {
  toast.success(mensaje, {
    position: "bottom-right",
    autoClose: 3000,
  });
};

export const mostrarError = (mensaje: string) => {
  toast.error(mensaje, {
    position: "bottom-right",
    autoClose: 3000,
  });
};

export const mostrarInfo = (mensaje: string) => {
  toast.info(mensaje, {
    position: "bottom-right",
    autoClose: 3000,
  });
};

export const mostrarAdvertencia = (mensaje: string) => {
  toast.warning(mensaje, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
  });
};
