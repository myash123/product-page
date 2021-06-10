import React from 'react'

const ShoppingCartItem = ({ id, quantity }) => {
  return ( 
    <div className="shopping-cart-row">
      <p className="row-brand">{id}</p>
      <p className="row-quantity">{`x${quantity}`}</p>
    </div>
  )
}

export default ShoppingCartItem