import { HiMail } from "react-icons/hi";
import { FaHeadset, FaReact } from "react-icons/fa";
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__location'>
      <h3>Esta pagina, es solamente para propositos educativos, ningun producto esta a la venta</h3>
      <hr/>
      <ul className='footer__location--text'>
        <li className='footer__location--text-item'>Proyecto de eCommerce - Eduardo Vergara - para DEV.F - 2023</li>

      </ul>
      </div>
    </div>
  )
}

export default Footer