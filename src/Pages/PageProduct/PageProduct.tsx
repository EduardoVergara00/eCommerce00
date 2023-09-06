import {useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../../Contexts/DataContext';
import {NavLink, useParams} from "react-router-dom";
import {getProduct} from '../../Utils/helpers';
import { IProduct } from '../../Types/types';
import Layout from '../../components/Layout/Layout';
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel';
import { HiArrowNarrowLeft } from "react-icons/hi";
import Swal from 'sweetalert2';
import './PageProduct.scss';

function PageProduct() {
    const [item, setItem]= useState<IProduct> ()
    const {products, orderData, setOrderData,productsRecommended}: any = useContext(GlobalContext)
    const {id} = useParams();

    useEffect(()=>{
        setItem(getProduct(products, id ))
    }, [])

    const handleBuy = () => {
        Swal.fire({
            title: 'Sucess!',
            text: 'Product has been added to your cart',
            icon: 'success',
            confirmButtonText: 'Ok'
        })

    const findRepeatElement = orderData.find((element: IProduct)=>element.productId === item?.productId)
        if(findRepeatElement){
          const newOrder = {
            ...findRepeatElement,
            "installments": [
              {
                "quantity": findRepeatElement.installments[0].quantity + 1,
                "value": findRepeatElement.installments[0].value
              }
            ]
          }
          const nOrder= orderData.filter((element:IProduct)=> element.productId !== item?.productId )
            setOrderData(
             [...nOrder,newOrder ]
          )
          return;
        }
        setOrderData([...orderData,item])
    }

  return (
    <Layout>
    <>
    <div className='pdpsection'>
        <section className='pdpsection__backpage'>
            <NavLink to={'/shop'}>
                <HiArrowNarrowLeft></HiArrowNarrowLeft> 
                <span>Atras</span>
            </NavLink>
        </section>
        <div className='pdpsection__fullproduct'>
            <section className='section__image'>
                <img  className='mainimage'src={item?.imageUrl}/>
                <div className='section__image--pics'>
                    <div className='image__one'>
                        <img src={item?.imageUrl}/>
                    </div>
                    <div className='image__two'>
                        <img src={item?.imageUrl}/>
                    </div>
                </div>
            </section>
            <section className='section__details'>
                <div className='container'>
                    <h3 className='section__details--name'>{item?.productName}</h3>
                    <p className='section__details--description'> {item?.productDetail}</p>
                    <p className='section__details--select'>Escribe tu producto</p>
                <div>
                <select className='section__details--selector'>
                    <option>--Seleccionar--</option>
                    {
                        item?.size.map((item)=>(
                            <option> {item} </option>
                        ))
                    }
                </select>
                </div>
                <div className='section__details--sdk'>
                    <p>Selecciona el color</p>
                    {
                        item?.color.map((item)=>(
                            <input type='button'className={item}/>
                        ))
                    }
                </div>
                <p className='section__details--price'> $ </p>
                <input 
                    className='section__details--btn'
                    type='button'
                    value='Agregar al Carrito'
                    onClick={handleBuy}
                />
                </div>
            </section>
        </div>
    </div> 
    <h2 className='tittle'>Recomendado</h2>
    <hr className='line'/>
    <ProductCarrousel category={productsRecommended} />
    </>
    </Layout>
  )
}

export default PageProduct;