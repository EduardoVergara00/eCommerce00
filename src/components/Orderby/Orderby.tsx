import {useState,useContext} from 'react';
import { GlobalContext } from '../../Contexts/DataContext';
import {orderByProduct} from '../../Utils/helpers';
import './Orderby.scss';

function Orderby() {
  const [value, setValue] = useState('')
  const {productsFilter, setProductsFilter}:any = useContext(GlobalContext);

  const handleChange = (e:any) => {
    setValue(e.target.value)

    const sortedList = orderByProduct(productsFilter, e)
    setProductsFilter(sortedList)
  }
  return (
    <div className='orderby'>
      <label className='orderby__label'>
        Ordenar por:
      </label>
        <select className='orderby__selector'value={value} onChange={handleChange}>
          <option>--Selecciona--</option>
          <option value='A-Z'>A-Z</option>
          <option value='BestRated'>Mejor votados</option>
          <option value='LowerPrice'>Precio BAJO</option>
          <option value='HigherPrice'>Precio ALTO</option>
        </select>
    </div>
  )
}

export default Orderby;