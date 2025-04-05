

import Carrousel from "../components/carrousel/Carrousel";
import Productos from "../components/productos/Productos";

const Home = ( {searchTerm} ) => {
    return (
    <>
        <Carrousel />
        <Productos searchTerm={searchTerm} />
    </>
    )
};

export default Home;