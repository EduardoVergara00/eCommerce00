import {IDataArrayProducts, IProduct} from '../../Types/types';
import Shelf from '../Shelf/Shelf';
import './PLPGrid.scss';

function PLPGrid( {products}: IDataArrayProducts) {
  
  return (
    <div className='grid'>
      {products.map((item : IProduct )=>(
       <Shelf key= {item.productId} item={item}/>
      ))}
    </div>
  )
}

export default PLPGrid