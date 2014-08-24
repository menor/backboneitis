var Backbone = require( 'backbone' );

// Import movies list
var MoviesList = require( 'views/MoviesList' );

var Layout = Backbone.extend( {

  render: function() {
    this.$el.append( this.MoviesList.render().el );
    return this;
  }

  initialize: function( options ) {
    this.moviesList = new MoviesList( {
      el: options.el,
      collection: options.collection,
      router: options.router
    } );
  }
} );
