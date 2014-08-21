var Backbone = require( 'backbone' );

// Data
var Movies = require( 'collections/movies' );
var data = require( '../../movies.json' );
var movies = new Movies( data );

// Views
var MoviesList = require( 'views/moviesList' );

var MoviesRouter = Backbone.Router.extend( {

  routes: {
    'movies/:id': 'selectMovie',
    '':           'showMain'
  },

  selectMovie: function( id ) {
    this.moviesList.render();
    this.movies.selectByID( id );
  },

  showMain: function() {
    this.moviesList.render();
  },

  initialize: function( options ) {
    this.movies = movies;
    this.moviesList = new MoviesList( {
      el: options.el,
      collection: movies
    } );
  }
} );

module.exports = MoviesRouter;
