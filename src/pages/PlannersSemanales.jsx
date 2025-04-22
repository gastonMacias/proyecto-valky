import GrupoProductos from "../components/grupoProductos/GrupoProductos"
import BotonHome from "../components/botonHome/BotonHome";

import { useContext } from "react";
import { counterContext } from "../context/counterContext";



const PlannersSemanales = () => {

    const { productosFiltrados } = useContext(counterContext);

    const productos = productosFiltrados?.filter(
        producto => producto.grupo === "PlannersSemanales"
    ) || [];


    return (
        <>
            <div className="flex flex-col gap-6 bg-gray-200 p-4">
                <div className="flex justify-around">
                <h3 className="text-pink-400 font-bold text-3xl">
                    Planners Semanales
                </h3>
                <BotonHome />
                </div>
                <div className="flex flex-col mb-20">
                    <GrupoProductos titulo="PlannersSemanales" productos={productos} />
                </div>
            </div>
        </>
    )
};

export default PlannersSemanales;