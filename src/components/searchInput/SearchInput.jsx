
import { AiOutlineSearch } from "react-icons/ai"


const SearchInput = ({searchTerm, setSearchTerm }) => {

   

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };


    return (
        <div className="w-70 h-8 flex justify-center shadow-md ">
            <input
                type="text"
                placeholder="Busca entre nuestros productos..."
                className="w-full h-full pl-2 bg-white outline-none rounded-1-md "
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