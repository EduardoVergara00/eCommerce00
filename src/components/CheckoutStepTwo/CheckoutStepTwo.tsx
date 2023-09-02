import {useContext} from 'react';
import { GlobalContext } from '../../Contexts/DataContext';
import { getTotalPrice } from '../../Utils/helpers';
import { IsetStepProps } from '../../Types/types';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './CheckoutStepTwo.scss';

function CheckoutStepTwo({setStep}:IsetStepProps) {

    const {orderData}: any = useContext(GlobalContext);

    const hanblesubmit =(e:any)=> {
        e.preventDefault();
        setStep(3)
    }

  return (
    <div className='shipping'>
        <h3 className='shipping__title'>Shipping Details</h3>
        <form  onSubmit={hanblesubmit} className='shipping__formulary'>
            <div className='shipping__formulary--wrapper'>
                <div className='form'>
                    <div className='form__fieldset'>
                        <div className='form__fieldset--field'>
                            <div className='input'>
                                <label>* Nombre completo</label>
                                <input 
                                    type='text'
                                    required
                                    min="3"
                                    max="40"
                                />
                            </div>
                        </div>
                        <div className='form__fieldset--field'>
                            <div className='input'>
                                <label>* Coreo electronico</label>
                                <input 
                                    type='email'
                                    required
                                    min="3"
                                    max="30"
                                />
                            </div>
                        </div>
                    </div>  
                    <div className='form__fieldset'>
                        <div className='form__fieldset--field'>
                            <div className='input'>
                                <label>* Direcion de envio</label>
                                <input 
                                    type='text'
                                    required
                                    min="3"
                                    max="30"
                                />
                            </div>
                        </div>
                        <div className='form__fieldset--field'>
                            <div className='input'>
                                <label>* Telefono</label>
                                <input 
                                    type='text'
                                    required
                                    min="6"
                                    max="12"
                                />
                            </div>
                        </div> 
                    </div>  
                    
                </div>
            </div>
            <br/>  
            <div className='shipping__formulary--total'>
                <div className='total' >
                    <div className='total__subtotal' >
                        <p>Subtotal:</p>
                        <h4>$ { getTotalPrice(orderData) }</h4>
                    </div>
                    <div className='total__fullamount' >
                        <p>Total:</p>
                        <h2>$ { getTotalPrice(orderData) }</h2> 
                    </div>
                </div>
            </div>
            <br/>   
            <div className='shipping__formulary--actions'>
                <button  onClick={()=> setStep(1)}><FaArrowLeft/>Volver Atras</button>
                <button type='submit'>Siguiente <FaArrowRight/></button>
            </div>  
        </form>

    </div>
  )
}

export default CheckoutStepTwo