var Backbone = require( 'backbone' );
var $ = require( 'jquery-untouched' );
var MoviesRouter = require( 'routers/movies' );
Backbone.$ = $;

$( document ).ready( function() {
  var router = new MoviesRouter( { el: $( '#movies' ) } );
  Backbone.history.start( {
    pushstate: true,
    root: '/'
  } );
} );

// var Movies = require( 'collections/movies' );
// var data = require( '../movies.json' );
// var Monitor = require( './monitor' );
// var MovieView = require( 'views/movie' );
// var MoviesList = require( 'views/moviesList' );
//
// var movies = new Movies( data );
// var monitor = new Monitor( movies );
//
//
// module.exports = {  movies: movies,
//                     MovieView: MovieView,
//                     MoviesList: MoviesList };
