import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $

import AppView from './components/AppView.js'
import {EtsyModel, EtsyCollection} from './models/etsyModel.js'
// import * as Et from './models/etsyModel.js'



var AppRouter = Backbone.Router.extend({
  routes: {
    '*path' : 'showHomeView'
  },

  showHomeView: function(){
    var collection = new EtsyCollection()

    collection.fetch().then( function(resData){
      // 1
      console.log(collection)
      ReactDOM.render(<AppView listingsColl={collection}/>, document.querySelector('.container'))

    })
  },

  initialize: function(){
    console.log('app routing')
    Backbone.history.start()
  }
})

var whatever = new AppRouter()

