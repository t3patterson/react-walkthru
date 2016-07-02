import React from 'react';

var ListingContainer = React.createClass({
  
  _createListingsJSX: function(theCollectionModels){
    var self = this

    var singleListingsJSXArray = theCollectionModels.map( function(m,theDex){
      // console.log(m)
      // console.log(theDex)
      return <SingleListing sendUpRegrettable={self.props.sendUpRegrettable} key={m.cid} listingModel={m} />
    })

    return singleListingsJSXArray

  },

  render: function(){
    console.log(this.props)
    // console.log('from ListingContainer', this.props.listingsColl)
    return (
      <div className="multi-view">
        <h2 className="product-count">
          <span>x</span><span> products</span>
        </h2>
        <div className="multi-listing align-children">
          { this._createListingsJSX( this.props.listingsColl.models )  }
        </div>
      </div>
    )

  }
})

var SingleListing = React.createClass({
  _handleRegretClick: function(){
    var regrettable = this.props.listingModel.get('title')
    
    this.props.sendUpRegrettable( regrettable )
  
  },

  render: function(){

    return (
      <div className="single-listing">
        <img src={ this.props.listingModel.get('Images')[0].url_170x135 }/>
        <h5>{this.props.listingModel.get('title')}</h5>
        <p><button>––</button></p>
        <p><i className="fa fa-thumbs-o-down fa-3x" onClick={this._handleRegretClick} ></i></p>
      </div>
    )
  }
})





export default ListingContainer