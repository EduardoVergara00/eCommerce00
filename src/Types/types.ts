export interface IDataFilterProps  {
    category: IProduct[]
}
export interface IDataArrayProducts {
    products: IProduct[]
  }

  export type IProduct = {
    "productId": number
    "productName": string 
    "productDetail":string
    "category": string
    "color": string[]
    "gender":{
        "categoryName": string
        "subCategory": string
    }
    "size": string[]
    "stars": number
    "imageUrl": string
    "listPrice": number | null
    "price": number
    "installments": {
        quantity: number;
        value: number;
    }[];
}
export type subCategory = {
    "subCategoryId": number
    "checked": boolean
    "subCategoryName": string    
}[]
export type ISubCategoryProps  = {
    subCategory: subCategory
}
export type IitemProps  = {
    item: IProduct
}

 export interface IPropsChildren {
    children: JSX.Element;
}
  export type IiOrderProps  = {
    order: IProduct
}
export type IsetStepProps  = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}
export type IStepProps  = {
    step: number
}
