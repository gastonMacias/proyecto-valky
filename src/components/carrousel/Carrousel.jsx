import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const Carrousel = () => {
    const [datosCarrousel, setDatosCarrousel] = useState([]);
    const carruselRef = useRef(null);

    const navigate = useNavigate();


    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}jsonAPI/datosCarrousel.json`)
            .then((response) => response.json())
            .then((data) => setDatosCarrousel(data))
            .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    const scrollDerecha = () => {
        carruselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const scrollIzquierda = () => {
        carruselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const manejarClick = (ruta) => {
        navigate(ruta); // 👉 Navega a la ruta de ese ítem
    };

    return (
        <div className="relative bg-gray-400 p-4">
            {/* Botón Izquierda */}
            <button
                onClick={scrollIzquierda}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
                ◀
            </button>

            {/* Contenedor del carrusel */}
            <div
                ref={carruselRef}
                className="flex gap-4 scroll-smooth scrollbar-hide w-full h-60 px-4 overflow-hidden overflow-x-hidden"
            >
                {datosCarrousel.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white w-40 h-60 rounded-md flex items-center justify-center flex-col shrink-0 cursor-pointer" 
                        onClick={() => manejarClick(item.ruta)}
                        >
                        
                        <img
                            src={item.imagen}
                            alt={item.nombre}
                            className="w-35 h-35" />
                        <p
                            className="text-center p-2  titulo-carrousel ">{item.nombre}</p>
                    </div>
                ))}
            </div>

            {/* Botón Derecha */}
            <button
                onClick={scrollDerecha}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
                ▶
            </button>
        </div>
    );
};

export default Carrousel;
