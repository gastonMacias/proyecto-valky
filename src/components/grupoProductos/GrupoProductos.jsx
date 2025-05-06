
import Cards from "../cards/Cards.jsx"

const GrupoProductos = ({ titulo, productos }) => {


    return (
        <>
            <h3 className="text-left text-white font-bold text-2xl bg-orange-300 m-3 p-3 rounded">
                {titulo}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-3 lg:grid-cols-5 lg:mb-20">
                {productos.map((producto, index) => (
                    <Cards key={index} producto={producto} />
                ))}
            </div>
        </>
    );
};

export default GrupoProductos;