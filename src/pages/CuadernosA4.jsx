import GrupoProductos from "../components/grupoProductos/GrupoProductos"
import BotonHome from "../components/botonHome/BotonHome";

import { useContext } from "react";
import { counterContext } from "../context/counterContext";



const CuadernosA4 = () => {
  const { productosFiltrados } = useContext(counterContext);

  const productos = productosFiltrados?.filter(
    producto => producto.grupo === "Cuadernos_A4"
  ) || [];

  return (
    <div className="flex flex-col gap-6 bg-gray-200 p-4">
      <div className="flex justify-around">
        <h3 className="text-pink-400 font-bold text-3xl">
          Cuadernos A4
        </h3>
        <BotonHome />
      </div>
      <div className="flex flex-col mb-20 ">
        <GrupoProductos titulo="Cuadernos A4" productos={productos} />
      </div>
    </div>
  );
};


export default CuadernosA4;