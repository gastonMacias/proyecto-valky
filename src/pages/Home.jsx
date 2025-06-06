import { useContext } from "react";
import Carrousel from "../components/carrousel/Carrousel";
import Productos from "../components/productos/Productos";
import { counterContext } from "../context/counterContext"; // <-- importá el context


const Home = () => {
    const { grupos } = useContext(counterContext); // <-- accedé al contexto

    return (
        <>
            <Carrousel />
            <Productos grupos={grupos} />
        </>
    );
};

export default Home;