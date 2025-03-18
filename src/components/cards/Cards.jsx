

const Cards = () => {
    return (
        <>
            <div className="w-55 h-85 border rounded-xl flex items-center justify-center flex-col">
                <div className=" ">
                    <img className="size-45  " src="../public/imagenes/cuaderno anillado marvel.jpg" alt="imagen de producto" />
                </div>
                <div className="flex items-center justify-center flex-col m-4">
                    <h4 className="font-thin ">Cuaderno anillado MARVEL</h4>
                    <p className="font-extrabold">$ 2000</p>
                </div>
                <div className="m-1">
                    <button className=" border rounded-md cursor-pointer p-1">Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}


export default Cards;