import React from 'react'
import '../App.css'

const ProductCard = ({ productInfo, addItemToCartOnClick, id }) => {

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productInfo.resourcePath} alt="shirt" />
      </div>
      <div className="product-info">
        <h5>{productInfo.description}</h5>
        <h5>{productInfo.price}</h5>
        <div className='add-to-cart'>
          <button onClick={addItemToCartOnClick} name={productInfo.id}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard