import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyAccount.scss';

function MyAccount() {
  let navigate = useNavigate();

  return (
    <div className='useractions'>
      <button onClick={()=>  navigate(`/login`) }>Registrate</button>
      <button onClick={()=>  navigate(`/login`) }>Inicia Sesion</button>
    </div>
  )
}

export default MyAccount