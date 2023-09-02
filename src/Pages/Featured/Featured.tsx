import {useContext} from 'react';
import {GlobalContext} from '../../Contexts/DataContext';
import Layout from '../../components/Layout/Layout';
import BannerCarrousel from '../../components/BannerCarrousel/BannerCarrousel'
import PLPGrid from '../../components/PLPGrid/PLPGrid';
import './Featured.scss'

function Featured() {
  const {productsFeatured}: any = useContext(GlobalContext)
  return (
    <Layout>
      <>
      <section className='secfeatured__banner'>
        <BannerCarrousel/>
      </section>
      <section className='secfeatured__products'>
        <PLPGrid products ={productsFeatured}/>
      </section>
      </>
    </Layout>
  )
}

export default Featured;