import GrupoProductos from "../components/grupoProductos/GrupoProductos"
import { useContext } from "react";
import { counterContext } from "../context/counterContext";

const CuadernosA4 = () => {

    const { productosFiltrados } = useContext(counterContext);

    const productosA4 = productosFiltrados.filter(
        producto => producto.categoria === "cuadernosA4"
    );

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-6 bg-gray-200 p-4">
            <h3 className="text-center text-pink-400 font-bold text-3xl">
                Cuadernos A4
            </h3>
                <div className="mb-20">
                    {productosA4.map(producto => (
                        <GrupoProductos key={producto.id} {...producto} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default CuadernosA4;