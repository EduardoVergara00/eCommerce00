import {useContext} from 'react';
import {GlobalContext} from '../../Contexts/DataContext';
import Layout from '../../components/Layout/Layout';
import PLPGrid from '../../components/PLPGrid/PLPGrid';
import Filter from '../../components/Filter/Filter';
import Orderby from '../../components/Orderby/Orderby';
import './Shop.scss';

function Shop() {
  const {productsFilter}: any = useContext(GlobalContext);

  return (
    <Layout>
      <section className='section'>
        <div className='section__orderby'>
          <Orderby/>
        </div>
        <div className='section__container'>
            <Filter/>
            <Orderby/>
            <PLPGrid products ={productsFilter}/>
        </div>
      </section>
    </Layout>
  )
}

export default Shop;