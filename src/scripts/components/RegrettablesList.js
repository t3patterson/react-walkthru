import React from 'react'


var RegrettablesList = React.createClass({
  getInitialState: function(){
    return {
      isShowing: false

    }
  },

  _handleToggleClick: function(){
    console.log(this.state.isShowing)

    if(this.state.isShowing === true){
      this.setState({
        isShowing: false
      })
    } else {
      this.setState({
        isShowing: true
      })
    }   
  },

  render: function(){

    var styleObj
    var buttonLabel

    if(this.state.isShowing){
      buttonLabel = 'x'
      styleObj = {
        right: 0
      }
    } else {
      buttonLabel = '<'
      styleObj = {
        right: -250
      }

    }

    return (
      <div className="regrets-list" style={styleObj}>
        <div className="side-panel" >
          <h3>Regrettables</h3>
          <ul>
            { 
              this.props.regrettablesArray.map(function(regret, i){
                return <li key={i}>{regret}</li>
              }) 
            }
          </ul>

        </div>

        <button onClick={this._handleToggleClick} >{buttonLabel}</button>

      </div>
    )
  }
})

export default RegrettablesList