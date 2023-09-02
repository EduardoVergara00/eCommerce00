import { useContext, useEffect} from 'react';
import {GlobalContext} from '../../Contexts/DataContext';
import {NavLink, useParams} from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import PLPGrid from '../../components/PLPGrid/PLPGrid';
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel';
import './SearchPage.scss';

function SearchPage() {
    const {productSerch, setProductSerch,products,productsRecommended}: any = useContext(GlobalContext);

    const {word} = useParams();

    useEffect(()=>{
        let filter = products.filter((element:any) => element.productName.toUpperCase().includes(word?.toUpperCase()));
        setProductSerch(filter);
    },[word])

  return (
    <div className='research'>
      <Layout>
        <>
        {
          productSerch.length>0
          &&
          <p className='research__text'>Hemos encontrado <strong>{productSerch.length}</strong> sobre "<strong>{word}</strong>".</p> 
        }
        <PLPGrid products={productSerch}/>
          {
            productSerch.length<=0
            &&
            <div>
              <p className='research__text'> Ups! no tenemos o ya se agoto lo que estas buscando "<strong>{word }</strong>" </p>
              <p className='research__text'>Te invitamos a ver nuestro catalogo para seguir buscando nuevas cosas</p>
              <NavLink to={'/shop'} className='research__link'><p>CATALOGO</p></NavLink>
              <h2 className='tittle'>Recomendado</h2>
              <hr className='line'/>
              <ProductCarrousel category={productsRecommended} />
            </div>    
          }
        </>
      </Layout>  
    </div>
  )
}

export default SearchPage;