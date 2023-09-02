// SECCION DE LAS TARJETAS 
import React from 'react'

function AcceptedCards() {
  return (
    <div className='cards'>
        <span className='cards__title'>Tarjetas Aceptadas</span>
        <div className='cards__images'>
            <div>Img Card</div>
            <div>Img Card</div>
            <div>Img Card</div>
            <div>Img Card</div>
            <div>Img Card</div>
        </div>
        <br/>
        <div className='cards__field'>
            <div className='cards__field--fieldset'>
                <div className='field'>
                    <div className='field__group'>
                        <span>Nombre</span>
                        <input type='text'/>
                    </div>
                </div>
                <div className='field'>
                    <div className='field__group'>
                        <label>*Numero de Tarjeta</label>
                        <input type='text'/>
                    </div>
                </div>
            </div>
            <div className='cards__field--fieldset'>
                <div className='field'>
                    <div className='field__group'>
                        <label>*Fecha de Vencimiento</label>
                        <input type='date'/>
                    </div>
                </div>
                <div className='field'>
                    <div className='field__group'>
                        <label>*CCV</label>
                        <input type='text'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AcceptedCards