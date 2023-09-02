import {useContext} from 'react';
import { GlobalContext } from '../../Contexts/DataContext';
import Layout from '../../components/Layout/Layout';
import BannerCarrousel from '../../components/BannerCarrousel/BannerCarrousel';
import PLPGrid from '../../components/PLPGrid/PLPGrid';
import './Recommended.scss';

function Recommended() {
  const { productsRecommended }: any= useContext(GlobalContext)
  return (
    <Layout>
      <>
      <section>
        <BannerCarrousel/>
      </section>
      <section className='boxing'>
        <PLPGrid products={productsRecommended}/>
      </section>
      </>
    </Layout>
  )
}

export default Recommended;