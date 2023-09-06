import {useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import Swal from 'sweetalert2';
import { FaArrowRight } from "react-icons/fa";
import './Login.scss';

function Login() {

  let navigate = useNavigate();

  const [subscribe, setSubscribe]= useState({
    name:"",
    email:"",
  })

  const handleSubmit =(e:any)=>{
    e.preventDefault();
    Swal.fire({
      title: 'Logeado!',
      text: 'Te has logeado correctamente',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    navigate(`/`);
  }

  const handleChange =(e:any)=>{
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...subscribe,
      [name]: value,
    };
    setSubscribe(newValues)
  }

  return (
    <Layout>
      <div className='accessing'>
        <div className='accessing__fieldset'>
          <div className='accessing__heading'>
            <h3 className='accessing__heading--title'>Inicia Sesión</h3>
            <br/>
            <div className='accessing__body'>
              <form onSubmit={handleSubmit} className='accessing__form'>
                <div className='accessing__fields'>
                  <div className='accessing__fields--item'>
                    <label> *Correo Electronico</label>
                    <input
                      name="email"
                      type="email"
                      value={subscribe.email}
                      onChange={handleChange}
                      placeholder='Introduce tu e-Mail'
                      required
                      min="3"
                      max="50"
                    />
                  </div>
                </div>
                <div>
                  <div className='accessing__fields--item'>
                    <label> *Contraseña</label>
                    <input
                      name="name"
                      type="password"
                      value={subscribe.name}
                      onChange={handleChange}
                      placeholder='Introduce tu contraseña'
                      required
                      min="3"
                      max="50"
                    />
                  </div>
                </div>
                  <br/>
                  <div className='accessing__fields--forget'>
                    <NavLink to={'*'}>
                      <span>Olvide mi contraseña</span>
                    </NavLink>
                    <button type="submit">Iniciar Sesion <FaArrowRight/></button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <div className='accessing__fields--account'>
          <span>Aún no tienes cuenta?</span>
          <button>REGISTRATE</button>
        </div>
      </div>
    </Layout>
  )
}

export default Login