
import { useState, useEffect } from "react";
import GrupoProductos from "../grupoProductos/GrupoProductos.jsx";


const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/jsonAPI/datos.json")
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error("Error al cargar los productos:", error));
    }, []);

    const grupos = productos.reduce((acc, { anuncio, ...producto }) => {
        if (!acc[anuncio]) acc[anuncio] = [];
        acc[anuncio].push(producto);
        return acc;
    }, {});


    return (
        <>
            <main className="flex flex-col gap-8 bg-gray-200 p-6 ">
                <h3 className="text-center text-pink-400 font-bold text-3xl">Nuestros Productos</h3>
                <div className="flex-col ">
                    {Object.keys(grupos).map((grupo, index) => (
                        <GrupoProductos key={index} titulo={grupo} productos={grupos[grupo]} />
                    ))}

                </div>
            </main>
        </>
    )
}


export default Productos;


