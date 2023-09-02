import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <ul className='nav'>
        <li className='nav__item'>
          <NavLink to={'/'} className='navigatelink'>
            INICIO
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to={'/shop'} className='navigatelink'>
            TIENDA
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to={'/featured'} className='navigatelink'>
            LO NUEVO
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to={'/recommended'} className='navigatelink'>
            Recomendado
          </NavLink>
        </li>
    </ul>
  )
}

export default Navbar