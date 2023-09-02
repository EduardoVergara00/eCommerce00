import {useContext} from 'react';
import { GlobalContext } from '../../Contexts/DataContext';
import { useNavigate } from "react-router-dom";
import { getTotalPrice } from '../../Utils/helpers';
import { IsetStepProps } from '../../Types/types';
import { FaArrowLeft, FaCheck, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcStripe, FaCcAmazonPay, FaCashRegister, FaCreditCard } from "react-icons/fa";
import './CheckoutStepThree.scss';

function CheckoutStepThree({setStep}:IsetStepProps) {
    const {orderData}: any = useContext(GlobalContext);
    let navigate = useNavigate();
  return (
    <form className='form'>
        <h3 className='form__title'>Pago</h3>
        <br/>
        <span className='form__subtitle'>Opciones de Pago</span>
        <div className='form__credit'>
            <div className='form__pay'>
                <div className='form__credit'>
                    <input type='radio'/>
                    <label>
                        <div className='form__pay'>
                            <h4>TARJETA</h4>
                            <span>Puedes pagar con tarjeta de Credito y/o Debito</span>
                        </div>
                        <div>
                            <div className='form__img'> <FaCreditCard /></div>
                        </div>
                    </label>
                </div>
            </div>
        </div> 
        <div className='form__paypal'>
            <div>
                <div className='form__credit'>
                    <input type='radio'/>
                    <label>
                        <div className='form__pay'>
                            <h4>EFECTIVO</h4>
                            <span>Paga en efectivo en tu tienda favorita mas cercana</span>
                        </div>
                        <div className='form__img'> <FaCashRegister /> </div>
                    </label>
                </div>
            </div>
        </div> 
        <div className='form__amount'>
            <p>Total:</p>
            <h2>${ getTotalPrice(orderData) }</h2>
        </div>
        <br/>
        <div className='form__confirmation'>
            <button  onClick={()=> setStep(2)} ><FaArrowLeft/> Atras</button>
            <button onClick={()=> navigate(`/`)}><FaCheck/>Confirmar</button>
        </div> 
    </form>
  )
}

export default CheckoutStepThree