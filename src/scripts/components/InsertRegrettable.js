import React from 'react'

var InsertRegrettable = React.createClass({
  _handleAddClick: function(){
    console.log( this.refs.regretInput.value )
    var regrettable = this.refs.regretInput.value

    this.props.sendUpRegrettable(regrettable)
  },

  render: function(){
    return (
      <div className="row">

          <input 
            className="ten columns" 
            type="input" 
            placeholder="Add your regrettable!" 
            style={{padding: 10, fontSize: 18}} 
            ref="regretInput"
          />

          <input 
            className="button-primary" 
            type="button" 
            value="+" 
            onClick={this._handleAddClick}
          />

      </div>

    )
  }
})

export default InsertRegrettable

