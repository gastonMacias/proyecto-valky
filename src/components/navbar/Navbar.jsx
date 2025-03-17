
import SearchInput from '../searchInput/SearchInput';


const Navbar = () => {
    return (
        <>
            <nav className="bg-pink-300 h-40 flex items-center justify-around ">
                <div className="flex flex-col items-center ">
                    <img className="size-20 w-fit rounded-4xl  " src="../public/logo/logo sin fondo.jpg" alt="logo valky" />
                    <h1 className="text-black font-thin text-3xl ">Libreria Creativa Valky</h1>
                </div>
                <div>
                    <SearchInput />
                </div>
            </nav>

        </>
    )
}


export default Navbar;



{/* <form className="">
                    <textarea className=" bg-amber-50 w-70 h-8 rounded-lg" />
                </form> */}