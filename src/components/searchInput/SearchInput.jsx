import { AiOutlineSearch } from "react-icons/ai"


const SearchInput = () => {
    return (
        <div className="w-70 h-8 flex justify-center shadow-md ">
            <input
                type="text"
                placeholder="Busqueda..."
                className="w-full h-full pl-2 bg-white outline-none rounded-md "
            />
            <div className="w-10 h-8 flex justify-center items-center bg-slate-700 rounded-xs cursor-pointer shadow-md ">
                <AiOutlineSearch color="pink" />
            </div>
        </div>
    )
}


export default SearchInput;