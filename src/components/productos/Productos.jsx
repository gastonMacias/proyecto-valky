import { useContext } from "react";
import { counterContext } from "../../context/counterContext";
import GrupoProductos from "../grupoProductos/GrupoProductos.jsx";

const Productos = () => {
    const { grupos } = useContext(counterContext); // <-- obtenés 'grupos' desde el contexto

    return (
        <main className="flex flex-col items-center justify-center gap-6 bg-gray-200 p-4">
            <h3 className="text-center text-pink-400 font-bold text-3xl">
                Nuestros Productos
            </h3>

            <div className="mb-20">
                {grupos && Object.keys(grupos).length > 0 ? (
                    Object.keys(grupos).map((grupo, index) => (
                        <GrupoProductos key={index} titulo={grupo} productos={grupos[grupo]} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-10">Cargando productos...</p>
                )}
            </div>
        </main>
    );
};

export default Productos;




