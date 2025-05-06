
import { useContext, useState } from 'react';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import useCarrito from '../../context/useCarrito';



const Carrito = () => {
    

    const [abierto, setAbierto] = useState(false);
    const {
      carrito, 
      agregarAlCarrito,
      removerDelCarrito,
      limpiarCarrito,
      totalItems,
      totalPrice
    } = useCarrito();
  
    const toggleCarrito = () => {
      setAbierto(!abierto);
    };
  
    const cerrarCarrito = () => {
      setAbierto(false);
    };
  
    return (
      <div className="relative">
        <button
          onClick={toggleCarrito}
          className="relative cursor-pointer p-2"
        >
          <AddShoppingCartSharpIcon sx={{ fontSize: 40 }} color="action" />
          <p className="absolute -top-2 -right-2 bg-white text-black text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full border">
            {totalItems}
          </p>
        </button>
  
        {/* Aside del carrito */}
        <aside
          className={`fixed top-0 right-0 h-full w-80 z-40 bg-pink-600 p-6 shadow-lg transform transition-transform duration-300 overflow-y-scroll ${abierto ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Botón para cerrar */}
          <button
            onClick={cerrarCarrito}
            className="fixed right-5 top-4 text-white text-2xl font-bold p-2 bg-pink-800 rounded hover:bg-pink-700 transition"
          >X</button>
  
          <h2 className="text-white text-2xl mb-6">Tu Carrito</h2>
  
          <ul className="space-y-4">
            {carrito.length === 0 ? (
              <p className="text-white">El carrito está vacío</p>
            ) : (
              carrito.map((producto) => (
                <li key={producto.id} className="border-b border-amber-200 pb-4">
                  <div className="flex justify-between text-white">
                    <p>{producto.nombre}</p>
                    <p>${producto.precio}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-white">
                    <p>Cantidad: {producto.quantity}</p>
                    <div className="space-x-2">
                      <button
                        onClick={() => agregarAlCarrito(producto)}
                        className="bg-white text-pink-600 font-bold px-2 rounded hover:bg-gray-200"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removerDelCarrito(producto.id)}
                        className="bg-white text-pink-600 font-bold px-2 rounded hover:bg-gray-200"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
  
          {carrito.length > 0 && (
            <>
              <div className="mt-4 text-white">
                <p>Total: ${totalPrice}</p>
              </div>
  
              <button
                onClick={limpiarCarrito}
                className="mt-6 w-full bg-white text-pink-600 font-bold py-2 rounded hover:bg-gray-200"
              >
                Limpiar el carrito
              </button>
            </>
          )}
        </aside>
      </div>
    );
  };
  
  export default Carrito;
  