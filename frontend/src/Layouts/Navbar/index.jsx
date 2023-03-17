import NavBarList from "./navBarList";
import { NavItemsLeft, NavItemsRight } from "./NavItems";


const NavBar = () => {
   



    return (<nav className="h-16 bg-black flex text-Netflix font-semibold justify-between items-center max-w-[100%] mx-auto px-10" >
        <NavBarList items={NavItemsLeft}  />
        <NavBarList items={NavItemsRight} />
    </nav>)

}


export default NavBar;