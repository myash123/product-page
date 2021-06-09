import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCartList = ({ cartHistogram }) => { 
  const cart = cartHistogram
    .filter( (element) => element.quantity > 0)
    .map( (element, index) => <ShoppingCartItem key={index} id={element.id} quantity={element.quantity} />)
  return (
    <div className='shopping-cart-list-container'>
      {cart}
    </div>
  )
}

export default ShoppingCartList