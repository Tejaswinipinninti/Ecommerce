import {useState,useEffect,createContext} from 'react'


//creating the cart context
export const CartContext=createContext()

const CartProvider = ({children}) => {

  //state to store items added to cart
  const [cartItems,setCartItems]=useState(()=>{
    let storeditems=localStorage.getItem("cartitems")
    return storeditems?JSON.parse(storeditems):[]
  })

  //adding items to the local stoarge

  useEffect(()=>{
    localStorage.setItem("cartitems",JSON.stringify(cartItems))
  },[cartItems])

  //function to handle add to cart
  const AddtoCart=(product)=>{
    setCartItems((prevItems)=>{
      let existingItem=prevItems.find((item)=>item.id===product.id)
      if(existingItem){
        existingItem.quantity+=1//incrementing the value by 1
        return[...prevItems]

      }else{
        return[...prevItems,{...product,quantity:1}]
      }
        })


  }

  //function to increment the quantity 

  const increment=(id)=>{
    setCartItems((prevItems)=>
      prevItems.map((item)=>{
        return item.id==id?{...item,quantity:item.quantity+1}:item

      })
    )

  
  }

  //function to decrement the quantity
  const decrement=(id)=>{

    setCartItems((prevItems)=>
      prevItems.map((item)=>{
        return item.id==id&&item.quantity>1?{...item,quantity:item.quantity-1}:item

      })
    )
  }

  //function to remove the product
  const removeItem=(id)=>{
    setCartItems((prevItems)=>
      prevItems.filter((item)=>item.id!==id))
    }

    //function all items for functionality

    const removeAllItems = () => {
      setCartItems([]);
    };
  

  //function to calculate the cart total 

  const Total=cartItems.reduce((total,item)=>total+item.price*item.quantity,0)

  

  //function to calculate the cart icon total

  const IconTotal=cartItems.reduce((total,item)=>total+item.quantity,0)


  return (
   <CartContext.Provider value={{AddtoCart,cartItems,increment,decrement,removeItem,Total,IconTotal,removeAllItems}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartProvider
