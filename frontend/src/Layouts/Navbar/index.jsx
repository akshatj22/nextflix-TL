import { Link } from "react-router-dom";
import NavBarList from "./navBarList";
import { NavItemsLeft, NavItemsRight } from "./NavItems";


const NavBar = () => {
   



    return (<nav className="h-16 bg-black flex text-Netflix font-semibold justify-between items-center max-w-[100%] mx-auto px-10" >
        <Link to="/"><NavBarList items={NavItemsLeft}  /></Link>
    </nav>)

}


export default NavBar;