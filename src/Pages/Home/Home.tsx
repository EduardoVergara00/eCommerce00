import {useContext} from 'react';
import {GlobalContext} from '../../Contexts/DataContext';
import Layout from '../../components/Layout/Layout';
import BannerCarrousel from '../../components/BannerCarrousel/BannerCarrousel';
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';
import './Home.scss';

function Home() {
  const { productsFeatured, productsRecommended } : any = useContext(GlobalContext);

  return (
    <Layout>
      <>
      <BannerCarrousel />
      <h2 className='tittle'>Destacado</h2>
      <hr className='line'/>
      <ProductCarrousel category={productsFeatured} />
      <h2 className='tittle'>Recomendado</h2>
      <hr className='line'/>
      <ProductCarrousel category={productsRecommended} />
      <SubscriptionForm />
      </>
    </Layout>
  )
}

export default Home