import { useContext } from "react";
import { counterContext } from "../../context/counterContext";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  const { inputValue, setInputValue, setSearchTerm } = useContext(counterContext);

  const handleChange = (e) => {
    setInputValue(e.target.value); // solo actualiza lo que se escribe
  };

  const handleSearch = () => {
    setSearchTerm(inputValue); // recién ahora actualiza lo que dispara la búsqueda
    setInputValue(""); 
};

  return (
    <div className="w-70 h-8 flex justify-center shadow-lg">
      <input
        type="text"
        placeholder="Buscá entre nuestros productos..."
        className="w-full h-full pl-2 bg-white outline-none rounded-bl-md rounded-l-md "
        value={inputValue}
        onChange={handleChange}
      />
      <div
        className="w-10 h-8 flex justify-center items-center bg-slate-700 rounded-r-md cursor-pointer shadow-md"
        onClick={handleSearch}
      >
        <AiOutlineSearch color="pink" />
      </div>
    </div>
  );
};

export default SearchInput;