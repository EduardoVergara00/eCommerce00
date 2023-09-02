import { ListItemAvatar } from '@mui/material';
import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {IitemProps,IiOrderProps,IProduct} from '../../Types/types'
import { GlobalContext } from '../../Contexts/DataContext';
import './Basket.scss'

function Basket({order}: IiOrderProps) {
    const {orderData, setOrderData}: any = useContext(GlobalContext);

    let navigate = useNavigate();

    const handleClick = () => {
      navigate(`/product/${order.productId}`);  
    }

    const handleAdd = (order: IProduct) =>{
        const newOrder = {
            ...order,
            "installments": [
              {
                "quantity": order.installments[0].quantity + 1,
                "value": order.installments[0].value
              }
            ]
          }
           
        const nOrder= orderData.filter((item:IProduct)=> item.productId !== order.productId )
         setOrderData(
            [...nOrder,newOrder ]
            )  
    }

    const handleLess = (order: IProduct) =>{
        if(order.installments[0].quantity <= 1){
            const nOrder= orderData.filter((item:IProduct)=> item.productId !== order.productId )
            setOrderData(nOrder)
            return;  
        }
        const newOrder = {
            ...order,
            "installments": [
              {
                "quantity": order.installments[0].quantity - 1,
                "value": order.installments[0].value
              }
            ]
          }
          const nOrder= orderData.filter((item:IProduct)=> item.productId !== order.productId )
         setOrderData(
            [...nOrder,newOrder ]
            )  
    }

    const handleRemove = (order : IProduct)=> {
         const newOrder = orderData.filter((item: IProduct)=> item.productId !== order.productId)
         setOrderData(newOrder)
    }
  return (
    <div className='basket'>
        <div className='basket__controller'>
            <button onClick={()=>{handleAdd(order)}} className='basket__controller--button'>+</button>
            <button onClick={()=>{handleLess(order)}}className='basket__controller--button'>-</button>
        </div>
        <div className='basket__wrapper'>
            <div className='basket__wrapper--picture'>
                <img className='image' src={order.imageUrl}></img>
            </div>
            <div className='basket__wrapper--details'>
                <h4  onClick={handleClick} className='linked__product'>{order.productName}</h4>
                <div className='specs'>
                    <div className='specs__quantity'>
                        <span>Cantidad</span>
                        <h5>{order.installments[0].quantity}</h5>
                    </div> 
                    <div className='specs__size'>
                        <span>Tamaño</span>
                        <h5>M</h5>
                    </div> 
                    <div className='specs__color'>
                        <span>Color</span>
                        <p></p>
                    </div> 
                </div>
            </div>
            <div className='basket__wrapper--price'>
                <h4>$ {order.price}</h4>
            </div>
            <button onClick={()=>{handleRemove(order)}} className='basket__wrapper--close'>X</button>
        </div>
    </div>
  )
}

export default Basket
