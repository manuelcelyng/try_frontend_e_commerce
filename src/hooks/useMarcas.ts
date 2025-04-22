import { useEffect, useState } from "react";
import { Marca } from "../models/marca";
import { getMarcas } from "../services/marca.service";

export function useMarcas() {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getMarcas()
      .then((res) => {
        setMarcas(res.data);
      })
      .catch((err) => {
        setError("Error al obtener marcas");
        console.error("Error al obtener marcas:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { marcas, error, loading };
}
