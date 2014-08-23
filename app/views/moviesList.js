var Backbone = require( 'backbone' );

// UI for selecting a movie
var MovieView = require( 'views/movie' );
var MoviesList = Backbone.View.extend({

  tagName: 'section',

  render: function() {
    var that = this;
    var moviesView = this.collection.map( function( movie ){
      return ( new MovieView( { model: movie, route: that.router } )).render().el;
    });
    this.$el.html( moviesView );
    return this;
  }

  intialize: function( options ) {
    this.router = options.router;
  }
});

module.exports = MoviesList;
