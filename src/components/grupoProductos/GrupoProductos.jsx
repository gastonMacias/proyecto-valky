import Cards from "../cards/Cards.jsx"


const GrupoProductos = ({ titulo, productos }) => {
    return (
        <>
            <h3 className="text-left text-pink-400 font-bold text-2xl bg-gray-100 m-3 p-3 rounded">{titulo}</h3>
            <div className="flex items-center justify-center gap-4 p-5">
                {productos.map((producto) => (
                    <Cards key={producto.id} producto={producto} />
                ))}

            </div>
        </>
    )
}


export default GrupoProductos;