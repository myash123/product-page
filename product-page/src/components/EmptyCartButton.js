import React from 'react'

const EmptyCartButton = ({ emptyCart }) => {
  return(
    <div className="empty-cart-button" onClick={emptyCart}>
      Empty Cart
    </div>
  )
}

export default EmptyCartButton