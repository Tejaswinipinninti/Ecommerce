import {createContext,useState,useEffect} from 'react'
import { productsData } from '../data/ProductData'


export const ProductContext=createContext()
const ProductProvider = ({children}) => {

    //managing the state for fetching the products
    const[product,setProduct]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[isError,setIsError]=useState(false)

    useEffect(()=>{
        let fetchProduct=async()=>{
           setTimeout(()=>{
            setProduct(productsData)//replaced by firestore data in future
            setIsLoading(false)
           },500)
        };
        //calling the function
           fetchProduct()
        
        return()=>{}//cleanup function for further user
    },[])

  return (
    <ProductContext.Provider value={{product,isLoading,isError}}>
        {children}
        </ProductContext.Provider>
  
  )
}

export default ProductProvider
