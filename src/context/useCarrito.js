import { useContext } from "react";
import { CarritoContext } from "./carritoProvider";


const useCarrito = () => {
    const context = useContext(CarritoContext)

if(context === undefined) {
    throw new Error("useCarrito debe ser usado dentro de CarritoProvider")
}
return context

}


export default useCarrito;