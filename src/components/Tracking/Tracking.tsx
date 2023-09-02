import React from 'react'
import { IStepProps } from '../../Types/types'
import './Tracking.scss'

function Tracking( {step}:IStepProps) {
  return (
    <div className='tracking'>
        <ul className='tracking__list'>
            <li className='tracking__list--item'>
                <div className='circle'>
                    <div className='circle__icon'>
                        <h4 className={`circle__icon--step ${step===1 && "active"}`}>1</h4>
                    </div>
                    <h6 className='circle__subtitle'>Confirma tus productos</h6>
                </div> 
            </li>
            <li className='tracking__list--item'>
                <div className='circle'>
                    <div className='circle__icon'>
                        <h4 className={`circle__icon--step ${step===2 && "active"}`}>2</h4>
                    </div>
                    <h6 className='circle__subtitle'>Detalles de envio tu envio.</h6>
                </div> 
            </li>
            <li className='tracking__list--item'>
                <div className='circle'>
                    <div className='circle__icon'>
                        <h4 className={`circle__icon--step ${step===3 && "active"}`}>3</h4>
                    </div>
                    <h6 className='circle__subtitle'>Pago</h6>
                </div> 
            </li>
        </ul>
    </div>
  )
}

export default Tracking