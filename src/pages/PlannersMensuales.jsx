import GrupoProductos from "../components/grupoProductos/GrupoProductos"

import { useContext } from "react";
import { counterContext } from "../context/counterContext";
import BotonHome from "../components/botonHome/BotonHome";

const PlannersMensuales = () => {

    const { productosFiltrados } = useContext(counterContext);

    const productos = productosFiltrados?.filter(
        producto => producto.grupo === "PlannersMensuales"
    ) || [];


    return (
        <>
            <div className="flex flex-col gap-6 bg-gray-200 p-4">
                <div className="flex justify-around">
                    <h3 className="text-pink-400 font-bold text-3xl">
                        Planners Mensuales
                    </h3>
                    <BotonHome />
                </div>
                <div className="flex flex-col mb-20">
                    <GrupoProductos titulo="PlannersMensuales" productos={productos} />
                </div>
            </div>
        </>
    )
};

export default PlannersMensuales;