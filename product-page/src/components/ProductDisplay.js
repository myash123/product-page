import '../App.css'

import ProductCard from './ProductCard'

const ProductDisplay = ({ products, addItemToCartOnClick }) => {

  const productList = products.map(( element, index ) => {
    return (
      <ProductCard 
        productInfo={element} 
        key={index}
        addItemToCartOnClick={addItemToCartOnClick}
      />
    )
  })

  return(
    <div 
      className="product-display"
    >
      {productList}
    </div>
  )
}

export default ProductDisplay