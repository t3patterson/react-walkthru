import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $

export var EtsyModel = Backbone.Model.extend({})

export var EtsyCollection = Backbone.Collection.extend({
  model: EtsyModel,

  accessToken: 'rtf0g2lb2o0xqsksl3jcro8z',

  url: function(){
    return "https://openapi.etsy.com/v2/listings/active.js?includes=Images&callback=?&api_key="+this.accessToken
  },

  parse: function(payload){
    return payload.results
  }
})
