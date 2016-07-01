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
              <div className="multi-listing align-children">
                <div>
                  <img src="./images/food-pot.jpg"/>
                  <h5>Awesome zebra skirt...</h5>
                  <p><button>––</button></p>
                  <p><i className="fa fa-thumbs-o-down fa-3x" data-user_rating="boo"></i></p>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row">
                <input className="ten columns" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
                <input className="button-primary" type="button" value="+"/>
            </div>

        </div>      
    )
  }
})


export default AView

