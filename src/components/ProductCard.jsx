import React from 'react'
import useCart from '../hooks/useCart'

const ProductCard = ({data}) => {
  console.log(data)
  const { AddtoCart}=useCart()

  return (
    <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
      <div className="card shadow text-white" id="product-card">
  <img src={data.image} className="card-img-top" alt="..."width="100%" height="200px"/>
  <div className="card-body products-data " >
    <h5 className="card-title">{data.brand}</h5>
    <p className="card-text">{data.description}</p>
    <button className="btn btn-success rounded-pill" onClick={()=>AddtoCart(data)}>AddToCart</button>
  </div>
</div>
      
    </div>
  )
}

export default ProductCard
