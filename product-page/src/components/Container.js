import React from 'react'
import { useState } from 'react'

import '../App.css'
import { products } from '../model/products.json'

import Menu from './Menu'
import ProductDisplay from './ProductDisplay'
import ShoppingCartButton from './ShoppingCartButton'
import ShoppingCart from './ShoppingCart'

const Container = () => {

  const initialState = {
    products: products,
    filter: "none",
    sort: "none",

    // On page load, initialize cart by creating a histogram of 
    // product IDs and their associated quantity (this will be zero
    // on initialization). It will be an array of objects of the form:
    // [ {id: x1, quantity: y1}, {id: x2, quantity: y2}]
    // This histogram will be passed down to the ShoppingCartList component

    cart: [],
    isCartHidden: true
  }

  const initializeCart = ( products ) => {
    let emptyCart = []
    products.forEach( element => emptyCart.push({ id: element.id, quantity: 0 }))
    return emptyCart
  }

  const [ state, updateState ] = useState({ ...initialState, cart: initializeCart( products )})

  const updateSort = ( e ) => {
    const sortMethod = e.target.value
    switch (sortMethod) {
      case "Most Popular":
        sortByPopularity(state.products)
        break
      case "Most Pricey":
        sortByPrice(state.products)
        break
      default:
        break;
    }
  }
  
  const sortByPopularity = ( products ) => {
    let sortedProducts = [...products]
    sortedProducts.sort(( a,b ) => { return b.popularity - a.popularity })
    updateState({ ...state, filter: "Most Popular", products: sortedProducts})
  }

  const sortByPrice = ( products ) => {
    let sortedProducts = [...products]
    sortedProducts.sort(( a,b ) => {

      //Process string represented as $X.YZ to float
      let priceA = parseFloat(a.price.substring(1))
      let priceB = parseFloat(b.price.substring(1))

      return priceB - priceA
    })
    updateState({ ...state, filter: "Most Pricey", products: sortedProducts })
  }

  const toggleShoppingCart = () => {
    updateState({ ...state, isCartHidden: !state.isCartHidden })
  }

  const addItemToCartOnClick = ( e ) => {
    const id = e.target.name
    let newCart = state.cart.map( e => {
        if (e.id === id) {
          return { id: e.id, quantity: e.quantity + 1}         
        }
        else {
          return e
        }
      }
    )
    updateState({ ...state, cart: newCart })
  }

  const emptyCart = () => updateState({ ...state, cart: initializeCart( products )})

  return (
    <div className="container">
      <Menu
        updateSort={updateSort}
      />
      <ProductDisplay
        products={state.products}
        addItemToCartOnClick={addItemToCartOnClick}
      />
      <ShoppingCartButton
        toggleShoppingCart={toggleShoppingCart}
        isCartHidden={state.isCartHidden}
      /> 
      <ShoppingCart
        isCartHidden={state.isCartHidden}
        cartHistogram={state.cart}
        emptyCart={emptyCart}
      />
    </div>
  )
}

export default Container