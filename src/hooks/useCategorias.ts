import { useEffect, useState } from "react";
import { Categoria } from "../models/categoria";
import { getCategorias } from "../services/categoria.service";

export function useCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getCategorias()
      .then((res) => {
        setCategorias(res.data);
      })
      .catch((err) => {
        setError("Error al obtener marcas");
        console.error("Error al obtener marcas:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { categorias, error, loading };
}
