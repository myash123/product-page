import React from 'react'
import ShoppingCartList from './ShoppingCartList'
import EmptyCartButton from './EmptyCartButton'

const ShoppingCart = ({ isCartHidden, cartHistogram, emptyCart }) => { 
  return (
    <div className={ isCartHidden ? 'shopping-cart-hidden' : 'shopping-cart' }>
      <h4 className='shopping-cart-header'>Your Cart:</h4>
      <ShoppingCartList cartHistogram={cartHistogram} />
      <EmptyCartButton emptyCart={emptyCart} />
    </div>
  )
}

export default ShoppingCart