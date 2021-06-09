import React from 'react'
import '../App.css'

const Menu = ( props ) => {

  return(
    <div className="menu">
      <div className="product-name">
        <h1>Product Name</h1>
      </div>
      <div className="product-spec">

        <div className="product-criteria">
          <label>Filter by:</label>
          <select>
            <option value="--">--</option>
            <option value="Sub-Product 1">Sub-Product 1</option>
            <option value="Sub-Product 2">Sub-Product 2</option>
          </select>
        </div>

        <div className="product-criteria">
          <label>Sort by:</label>
          <select onChange={props.updateSort}>
            <option value="--">--</option>
            <option value="Most Pricey">Most Pricey</option>
            <option value="Most Popular">Most Popular</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default Menu