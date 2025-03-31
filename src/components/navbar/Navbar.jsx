
import SearchInput from '../searchInput/SearchInput';


const Navbar = () => {
    return (
        <>
            <nav className="flex flex-col items-center justify-around min-h-[4rem] bg-pink-300 sm:flex-col lg:flex-row p-4">
                <div className="flex flex-col items-center text-center">
                    <img
                        className="w-16 rounded-xl sm:w-24 sm:rounded-2xl lg:w-32 lg:rounded-4xl"
                        src="../public/logo/logo sin fondo.jpg"
                        alt="logo valky"
                    />
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                        Papelería Creativa Valky
                    </h1>
                </div>
                <div>
                    <SearchInput />
                </div>
            </nav>
        </>
    )
}


export default Navbar;


