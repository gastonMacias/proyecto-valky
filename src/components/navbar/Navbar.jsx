import { useContext } from "react";
import { counterContext } from "../../context/counterContext";
import SearchInput from '../searchInput/SearchInput';
import Carrito from "../carrito/Carrito";



const Navbar = () => {


    const { searchTerm, setSearchTerm } = useContext(counterContext); // <-- accedé al contexto


    return (
        <>
            <nav className="flex min-h-[4rem] bg-pink-300 p-4 sm: flex-col">
                <div className="flex flex-col items-center">
                    <img
                        className="w-16 rounded-xl sm:w-24 sm:rounded-2xl lg:w-32 lg:rounded-4xl"
                        src={`${import.meta.env.BASE_URL}logo/logo sin fondo.jpg`}
                        alt="logo valky"
                    />
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                        Papelería Creativa Valky
                    </h1>
                </div>
                <div className="flex items-center justify-around">
                    <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Carrito />
                </div>
            </nav>
        </>
    )
}


export default Navbar;


