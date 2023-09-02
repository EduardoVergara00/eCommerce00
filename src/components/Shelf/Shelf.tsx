import { useContext } from "react";
import { GlobalContext } from "../../Contexts/DataContext";
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from "react-router-dom";
import {IitemProps,IProduct} from '../../Types/types';
import Swal from 'sweetalert2';
import "./Shelf.scss";

function Shelf({item}: IitemProps) {
  const {orderData, setOrderData}: any = useContext(GlobalContext);
  
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${item.productId}`);
    
  }

  const handleBuy = (event:any) => {
    event.stopPropagation();
    Swal.fire({
      title: 'Agregado!',
      text: 'Se ha agregado a tu carrito, elige tu siguiente producto',
      icon: 'success',
      confirmButtonText: 'Seguir Comprando'
    })

    const findRepeatElement = orderData.find((element: IProduct)=>element.productId === item.productId);
    if(findRepeatElement){
      const newOrder = {
        ...findRepeatElement,
        "installments": [
          {
            "quantity": findRepeatElement.installments[0].quantity + 1,
            "value": findRepeatElement.installments[0].value
          }
        ]
      }
      const nOrder= orderData.filter((element:IProduct)=> element.productId !== item.productId )
      setOrderData(
         [...nOrder,newOrder ]
      )
      return;
    }
    
    setOrderData([...orderData,item])
  }

  return (
    <ul className='cardcontainer' onClick={handleClick}>
      {item.listPrice != null
        && 
        <li className='cardcontainer__disscount'>
          <span> %</span>
        </li>
      }
        <li className='cardcontainer__image'>
          <img src={item.imageUrl}></img>
        </li>
        <li className='cardcontainer__item'>
          <p>{item.productName}</p>
        </li>
        <li className='cardcontainer__icons'>
          <Rating size={20}  initialValue={item.stars} />
        </li>
        <li className='cardcontainer__pricecross'>
          {item.listPrice === null
            ? <br></br>
            : <p> de ${item.listPrice}</p>
          }
        </li>
        <li className='cardcontainer__price'>
          <p>$ {item.price}</p>
        </li>
        <li className='cardcontainer__btn'>
          <button onClick={handleBuy}>Agregar al carrito</button>
        </li>
    </ul>
  )
}

export default Shelf;