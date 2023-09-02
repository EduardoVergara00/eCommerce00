import MenuDropDown from "../MenuDropDown/MenuDropDown";
import Search from "../Search/Search";
import MyAccount from "../MyAccount/MyAccount";
import Navbar from "../Navbar/Navbar";
import DrawerCart from "../DrawerCart/DrawerCart";
import { NavLink } from "react-router-dom";
import './Header.scss';

export default function Header(){

  return(
    <header className="header">
      <div className='header__bar'>
        <ul className='header__toolbar'>
         <li className="header__toolbar--menu">
          <MenuDropDown />
         </li>
         <li className="header__toolbar--title">
            <NavLink to={'/'} className='navigatelink'>
              <h2>Tiendita de la esquina</h2>
            </NavLink>
         </li>
         <li className="searchdesktop">
          <Search />
        </li>
         <li className="header__toolbar--cart">
          <MyAccount/>
            <DrawerCart />  
         </li>
        </ul>
        <div className="searchmobile">
          <Search />
        </div>
        <Navbar/>
      </div>
    </header>
  )
}