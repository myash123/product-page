import React from 'react'

const ShoppingCartButton = ({ toggleShoppingCart, isCartHidden }) => {
  return (
    <div>
      <div 
        className="shopping-cart-button"
        onClick={ toggleShoppingCart }
      >
        <p>{ isCartHidden ? 'Show Cart' : 'Hide Cart' }</p>
      </div>
    </div>
  )
}

export default ShoppingCartButton