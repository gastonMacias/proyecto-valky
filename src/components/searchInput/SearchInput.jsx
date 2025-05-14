import { useContext } from "react";
import { counterContext } from "../../context/counterContext";
import { AiOutlineSearch } from "react-icons/ai"


const SearchInput = () => {

    const { searchTerm, setSearchTerm } = useContext(counterContext); // <-- accedé al contexto

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };


    return (
        <div className="w-70 h-8 flex justify-center shadow-lg">
            <input
                type="text"
                placeholder="Buscá entre nuestros productos..."
                className="w-full h-full pl-2 bg-white outline-none rounded-bl-md rounded-l-md "
                value={searchTerm}
                onChange={handleChange}
            />
            <div className="w-10 h-8 flex justify-center items-center bg-slate-700 rounded-r-md cursor-pointer shadow-md  ">
                <AiOutlineSearch color="pink" />
            </div>
        </div>
    )
}


export default SearchInput;