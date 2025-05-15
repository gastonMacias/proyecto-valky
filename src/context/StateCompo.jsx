
import { useState, useEffect } from 'react'
import { counterContext } from "./counterContext";


const StateCompo = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState(""); //para busqueda
    const [inputValue, setInputValue] = useState(""); //lo que el usuario escribe

    const [productos, setProductos] = useState([]); //para desplegar los productos


    useEffect(() => {
        fetch(`jsonAPI/datos.json`) 
          .then((response) => {
            // console.log("Respuesta del fetch:", response); // Primer console.log para la respuesta
            return response.json();
          })
          .then((data) => {
            // console.log("Datos recibidos del JSON:", data); // Segundo console.log para los datos
            setProductos(data);
          })
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
    }, {}); // ← Esto ya garantiza un objeto, así que está bien

    return (
        <counterContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                inputValue,
                setInputValue,
                productos,
                productosFiltrados,
                grupos
            }}
        >
            {children}
        </counterContext.Provider>
    )
}

export default StateCompo;