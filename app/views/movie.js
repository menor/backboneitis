var Backbone = require( 'backbone' );
var $ = require( 'jquery-untouched' );
var _ = require( 'underscore' );

var MovieView = Backbone.View.extend( {
  tagName: 'article',
  className: 'movie',
  template: '<h1><%= title %></h1>',

  events: {
    'click': '_selectMovie'
  },

  render: function() {
    var tmpl = _.template( this.template );
    this.$el.html( tmpl( this.model.toJSON() ) );
    this.$el.toggleClass( 'selected', this.model.get( 'selected') );
    return this;
  },

  initialize: function() {
    this.listenTo( this.model, 'change: title', this.render );
  },

  _selectMovie: function( e ) {
    e.preventDefault();
    console.log( $( e.currentTarget ).html() );
  }

} );

module.exports = MovieView;
