import React from 'react'
import useCart from '../hooks/useCart'

const Cart = () => {
  const{cartItems,increment,decrement,removeItem,Total,removeAllItems}=useCart()

  
  return (
    <>
    <div className="container">
      {/*cart header section starts*/}

      <h3 className="text-center fw-bold display-4 my-2">Shopping Cart</h3>

      {/*cart header section starts*/}

      {(cartItems.length==0)? 
      (<h3>Cart is Empty</h3>):
      (<>
      <div className="row">
        {
          cartItems.map((item)=>{
            return  <div className='col-12 col-sm-12 col-md-3 col-lg-3'key={item.id}>
            <div className="card shadow text-white">
        <img src={item.image} className="card-img-top" alt="..."width="100%"height="200px"/>
        <div className="card-body products-data " >
          <h5 className="card-title">{item.brand}</h5>
          <p className="card-text">{item.description}</p>
          <h3>${(item.quantity==1?(item.price):(item.quantity*item.price))}</h3>
          <div className='d-flex justify-content-around'>
            {/*Increment & decrement function btn starts*/}
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger"onClick={()=>decrement(item.id)}>-</button>
  <span className="btn btn-warning">{item.quantity}</span>
  <button type="button" className="btn btn-success"onClick={()=>increment(item.id)}>+</button>
</div>
{/*increment & decrement function btn ends*/}
{/*remove btn starts*/}
<div className="remove-container">
  <button type="button" className=" btn btn-danger"onClick={()=>removeItem(item.id)}>Delete</button>
</div>

{/*remove btn ends*/}

        </div>
      </div>
            
          </div>
          </div>
          })
        }
      </div>
      
      </>)}
      {/*Cart-items*/}
      
      {cartItems.length>0?<p>Total:{Total.toFixed(2)}</p>:<p>Total:00.00</p>}

      <div>
      <button type="button" className=" btn btn-danger"onClick={removeAllItems}>RemoveAll</button>
      </div>
      
    </div>
    </>
    
  )
}

export default Cart
