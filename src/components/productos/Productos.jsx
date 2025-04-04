
import { useState, useEffect } from "react";
import GrupoProductos from "../grupoProductos/GrupoProductos.jsx";


const Productos = ({ searchTerm }) => {
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        fetch("/jsonAPI/datos.json")
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error("Error al cargar los productos:", error));
    }, []);

    // Primero filtramos los productos antes de agruparlos
    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Luego agrupamos los productos filtrados
    const grupos = productosFiltrados.reduce((acc, { anuncio, ...producto }) => {
        if (!acc[anuncio]) acc[anuncio] = [];
        acc[anuncio].push(producto);
        return acc;
    }, {});

    return (
        <main className="flex flex-col items-center justify-center gap-6 bg-gray-200 p-4">
            <h3 className="text-center text-pink-400 font-bold text-3xl">
                Nuestros Productos
            </h3>

            <div className="mb-20">
                {Object.keys(grupos).map((grupo, index) => (
                    <GrupoProductos key={index} titulo={grupo} productos={grupos[grupo]} />
                ))}
            </div>
        </main>
    );
};

export default Productos;



