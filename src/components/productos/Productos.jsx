import Cards from "../cards/Cards";

const Productos = () => {
    return (
        <>
            <main className="flex flex-col gap-8 bg-gray-200 p-6 ">
                <h3 className="text-center text-pink-400 font-bold text-3xl">Nuestros Productos</h3>
                <div className="flex-col ">
                    <h3 className="text-left text-pink-400 font-bold text-2xl bg-gray-100 m-3 p-3 rounded">Cuadernos A4</h3>
                    <div className="flex items-center justify-center gap-4 p-5">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                    <h3 className="text-left text-pink-400 font-bold text-2xl bg-gray-100 m-3 p-3 rounded">Cuadernos A5</h3>
                    <div className="flex items-center justify-center gap-4 p-5">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </main>
        </>
    )
}


export default Productos;