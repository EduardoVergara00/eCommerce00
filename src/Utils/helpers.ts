import {IProduct} from '../Types/types';

export const featured = (products: IProduct[])=>{
  const FeauturedProducts = products.filter((product)=> product.category === "featured")
  return FeauturedProducts;
}
export const ChangeShelf = (adjustment : number) => {
  if(adjustment <= 850){
    return 2;
  }
    return 4;
}
export const recommended = (products: IProduct[])=>{
  const recommended = products.filter((product)=> product.category === "recommended")
  return recommended;
}

export const setDraweView = (adjustment: number) => {
  if(adjustment <= 648){
    return adjustment;
  }
    return 500;
}
export const getProduct = (products : IProduct[], id : string | undefined  | number )=>{
  const filteredProduct = products.find((product: IProduct)=>product.productId+"" === id)
  return filteredProduct;
  
}
export const orderByProduct = (productsFilter : IProduct[], e:any)=>{
  if(e.target.value === 'A-Z'){
    const sortedList = [...productsFilter].sort((a, b) => (a.productName > b.productName ? 1 : a.productName < b.productName ? -1 : 0))
    return sortedList 
  }else if(e.target.value === 'LowerPrice'){
    const sortedList = [...productsFilter].sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
    return sortedList
  }else if(e.target.value === 'HigherPrice'){
    const sortedList = [...productsFilter].sort((a, b) => (a.price < b.price ? 1 : a.price > b.price ? -1 : 0))
    return sortedList
  }else if(e.target.value === 'BestRated'){
    const sortedList = [...productsFilter].sort((a, b) => (a.stars < b.stars ? 1 : a.stars > b.stars ? -1 : 0))
    return sortedList
  }else{
    return productsFilter;
  }
}
export const getTotalPrice = (orderData:IProduct[]) => {
  let total=0
  orderData.map((item:IProduct)=>{ 
  total = (item.installments[0].quantity * item.price ) + total
}) 
  return total 
}

export const getTotalCount = (orderData:IProduct[]) => {
  let total=0
      orderData.map((item:IProduct)=>{ 
      total = item.installments[0].quantity + total
  })
  return total 
}