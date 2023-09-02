import { createContext, useState } from "react";
import ProductsJson from '../Data/products.json';
import { IPropsChildren } from '../Types/types';
import { featured, recommended } from '../Utils/helpers';

export const GlobalContext = createContext({})

export function DataContextProvider( { children }: IPropsChildren){
    const [adjustment, setAdjustment ] = useState(window.innerWidth);
    const [products, setProducts] = useState(ProductsJson);
    const [productsFeatured, setProductsFeatured] = useState(featured(products)) 
    const [productsRecommended, setProductsRecommended] = useState(recommended(products));
    const [productsFilter, setProductsFilter] = useState(products);
    const [productSerch, setProductSerch] = useState(products)
    const [orderData, setOrderData] = useState([])

    const value = {adjustment, setAdjustment, products, setProducts, productsFeatured, 
        setProductsFeatured, productsRecommended, setProductsRecommended, productsFilter, 
        setProductsFilter,productSerch, setProductSerch, orderData, setOrderData
    };
    

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider> 
    )
}