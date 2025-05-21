
import { useState } from "react";
import useCarrito from "../../context/useCarrito";



const Cards = ({ producto }) => {

    const [buttonText, setButtonText] = useState('Agregar al carrito')

    const { agregarAlCarrito } = useCarrito();


    const handleAgregar = () => {
        console.log("Click en Agregar al carrito", producto); // 👈 Log para verificar
        agregarAlCarrito(producto);
        setButtonText('En el carrito');
      };

    return (
        <>
            <div className="flex flex-col items-center justify-between w-full h-auto pb-4 bg-pink-100 rounded-lg shadow-md hover:shadow-lg hover:shadow-pink-600 overflow-hidden md:w-60">
                {/* Imagen */}
                <div className="w-full">
                    <img
                        className="w-full h-40 object-cover p-2 rounded-t-lg"
                        src={producto.imagen}
                        alt={producto.descripcion}
                    />
                </div>

                {/* Información */}
                <div className="text-center p-4">
                    <h4 className="mb-2 text-lg font-thin">{producto.nombre}</h4>
                    <p className="text-xl font-extrabold text-pink-700">$ {producto.precio}</p>
                </div>

                {/* Botón */}
                <div className="w-full px-4">
                    <button className="w-full p-2 border rounded bg-pink-200 hover:bg-pink-400 hover:text-white transition duration-300" 
                    onClick={handleAgregar}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

        </>
    )
}


export default Cards;


{/* <div className="w-55 h-85 border rounded-xl flex items-center justify-center flex-col">
                <div className=" ">
                    <img className="size-45" src={producto.imagen} alt={producto.descripcion} />
                </div>
                <div className="flex items-center justify-center flex-col m-4">
                    <h4 className="font-thin ">{producto.nombre}</h4>
                    <p className="font-extrabold">{producto.precio}</p>
                </div>
                <div className="m-1">
                    <button className=" border rounded-md cursor-pointer p-1">Agregar al carrito</button>
                </div>
            </div> */}