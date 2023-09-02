import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";
import './MenuDropDown.scss';

function MenuDropDown() {

  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
    <div onClick={toggleDrawer}><HiMenu></HiMenu></div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='bla bla bla'
      >
      <div className='content'>
        <span onClick={toggleDrawer}><HiX></HiX></span>
        <div className='content__heading'>
          <NavLink to={'/login'} className='content__heading--navigateto'>
            <button>Iniciar Sesion</button>
          </NavLink>
          <NavLink to={'/checkout'} className='content__heading--navigateto'>
            <button>Mis Compras</button>
          </NavLink>
        </div>
        <ul className='content__categories'>
          <NavLink to={'/'} className='content__categories--link'>
            <li>Inicio</li>
          </NavLink>
          <NavLink to={'/shop'} className='content__categories--link'>
            <li>La tiendita</li>
          </NavLink>
          <NavLink to={'/featured'} className='content__categories--link'>
            <li>Reciente</li>
          </NavLink>
          <NavLink to={'/recommended'} className='content__categories--link'>
            <li>Recomendado</li>
          </NavLink>
        </ul>
      </div>
      </Drawer>
    </>
  )
}

export default MenuDropDown;