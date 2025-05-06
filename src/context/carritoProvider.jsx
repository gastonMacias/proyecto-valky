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

  const sacarDelCarrito = (productoId) => {
    setCarrito((prev) => {
      return prev
        .map((item) =>
          item.id === productoId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // 👈 elimina si la cantidad llega a 0
    });
  };


  const limpiarCarrito = () => {
    setCarrito([])
  }

  const totalItems = carrito.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = carrito.reduce((sum, item) => {
    return sum + (parseFloat(item.precio) || 0) * (item.quantity || 1);
  }, 0);


  const generarMensaje = (carrito, totalPrice) => {
    const productosTexto = carrito.map(item => `- ${item.quantity} x ${item.nombre} (${item.precio})`)
      .join("\n");
  
    const mensaje = `Hola, quiero hacer un pedido:\n${productosTexto}\nTotal: $${totalPrice}`;
  
    console.log("📝 Mensaje generado:", mensaje); // <-- corregido, antes decía mensajeCompleto (que no existe)
    
    return mensaje;
  };


  const enviarPorWhatsapp = () => {
    const mensaje = generarMensaje(carrito, totalPrice);
    const numero = "5491159362462"; 

    console.log("📤 Enviando mensaje a WhatsApp:", mensaje); 
    limpiarCarrito()
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank"); 
  };


  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarAlCarrito,
      sacarDelCarrito,
      totalItems,
      totalPrice,
      limpiarCarrito,
      generarMensaje,
      enviarPorWhatsapp
    }}>
      {children}
    </CarritoContext.Provider>
  )
}


export default CarritoProvider



