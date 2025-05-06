import { createContext, useState } from "react";

export const CarritoContext = createContext();


const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    

    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => {
          const productoEnCarritoIndex = prev.find((item) => item.id === producto.id);
          if (productoEnCarritoIndex) {
            return prev.map((item) =>
              item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prev, { ...producto, quantity: 1 }];
          }
        });
      };
      

    const removerDelCarrito = (productoId) => {
        setCarrito((prev) => prev.filter((item) => item.id !== productoId));
      };


    const limpiarCarrito = () => {
        setCarrito([])
    }

    const totalItems = carrito.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);


    return (
        <CarritoContext.Provider  value={{
            carrito,
            agregarAlCarrito,
            removerDelCarrito,
            totalItems,
            totalPrice,
            limpiarCarrito
        }}>
        { children }
        </CarritoContext.Provider>
)}


export default CarritoProvider



// const agregarAlCarrito = product => {
       
//     const productoEnCarritoIndex = carrito.findIndex(item => item.id === product.id)

//     if (productoEnCarritoIndex >= 0) {
//         const nuevoCarrito = structuredClone(carrito)
//         nuevoCarrito[productoEnCarritoIndex].quantity += 1
//         setCarrito(nuevoCarrito)
//         return
//     }

//     setCarrito(prevState => ([
//         ... prevState,
//         {
//             ...product,
//             quantity: 1
//         }
//     ]))
//  }