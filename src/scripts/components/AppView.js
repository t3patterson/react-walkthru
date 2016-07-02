import React from 'react'
import ReactDOM from 'react-dom'

import RegrettablesList from './RegrettablesList.js'
import ListingContainer from './ListingContainer.js'
import InsertRegrettable from './InsertRegrettable.js'


var AView = React.createClass({
  getInitialState: function(){
    return {
      regrettables: [
        'Five lbs gummy bear',
        'Gray boots',
        "Cosimo's first two wives",
        "Vanilla candle"
      ]
    }
  },

  _modifyRegrettables: function( payload ){
    console.log('Appview, payload received:', payload, this)
    var regretsCopy = this.state.regrettables.map( function(copy){ return copy } )
    regretsCopy.push(payload)

    // NOOOO this.state.regrettables.push(payload)
    this.setState({
      regrettables: regretsCopy
    })
  },


  render: function(){
    console.log('from AppView', this.props.listingsColl)

    return (
      <div>
        <h1>Regretsy</h1>
        <p>i have a few...</p>
        
        <RegrettablesList regrettablesArray={this.state.regrettables} />

        <ListingContainer sendUpRegrettable={this._modifyRegrettables} listingsColl={this.props.listingsColl} />
        
        <hr/>
        <hr/>

        <InsertRegrettable sendUpRegrettable={this._modifyRegrettables}/>
        

      </div>      
    )
  }
})


export default AView

// <hr/>
// <div className="row">
//     <input className="ten columns" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
//     <input className="button-primary" type="button" value="+"/>
// </div>

//
