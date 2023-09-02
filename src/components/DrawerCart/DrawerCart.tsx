import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../Contexts/DataContext';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { TiShoppingCart } from "react-icons/ti";
import { getTotalPrice, getTotalCount, setDraweView } from '../../Utils/helpers';
import {IProduct} from '../../Types/types';
import { useNavigate } from "react-router-dom";
import Basket from '../Basket/Basket';
import './DrawerCart.scss'

function DrawerCart() {
    const { adjustment, orderData, setOrderData}: any = useContext(GlobalContext);
    const [isOpen, setIsOpen] = React.useState(false);
    const [totalCounter, setItotalCounter] = React.useState(0);
    const [totalPrice, setItotalPrice] = React.useState(0);
    
    let navigate = useNavigate();

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(()=>{
        setItotalCounter(getTotalCount(orderData))
        setItotalPrice(getTotalPrice(orderData))
        
    },[orderData])
    
  return (
    <>
    <div className="cart" onClick={toggleDrawer}>
        <TiShoppingCart></TiShoppingCart>
        <div className="cart__pop">
            <span>{totalCounter}</span>
        </div>
    </div>
    <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
        size={setDraweView(adjustment)}
    >
        <div className='cart__container'>
            <ul className='cart__container--heading'>
                <li className='cart__container--heading-item'>
                    <span>Mi carrito</span>
                    <span>({orderData.length} articulos)</span>
                </li>
                <li className='cart__container--heading-btn'>
                    <button onClick={toggleDrawer}>Cerrar</button>
                    <button onClick={()=>{setOrderData([])}}>Limpiar Carrito</button>
                </li>
            </ul>
            <section className='baskets'>
                {
                    orderData.length === 0 
                    ? 
                    <p className='baskets__text'>Tu carrito esta vacio</p>
                    :
                    orderData.map((order: IProduct)=>{
                        return <Basket order={order} key={order.productId} />
                    })
                }
            </section>
            <div className='cart__container--footer'>
                <div className='cart__container--footer-div'>
                    <p>Subtotal:</p>
                    <p>$ {totalPrice}</p>
                </div>
                <button onClick={() =>{navigate(`/checkout`) }}>CHECK OUT</button>
            </div>
        </div>
    </Drawer>
    </>
  )
}

export default DrawerCart