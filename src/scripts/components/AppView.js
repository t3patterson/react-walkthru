import React from 'react'
import ReactDOM from 'react-dom'

import RegrettablesList from './RegrettablesList.js'



var AView = React.createClass({
  render: function(){
    return (
        <div>
            <h1>Regretsy</h1>
            <p>i have a few...</p>
            <RegrettablesList/>

            <div className="multi-view">
              <h2 className="product-count">
                <span>x</span><span> products</span>
              </h2>
            </div>
            <img src="./images/food-pot.jpg"/>
        </div>      
    )
  }
})


export default AView

