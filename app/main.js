var Backbone = require( 'backbone' );
var Movies = require( 'collections/movies' );
var data = require( '../movies.json' );
var Monitor = require( './monitor' );

var movies = new Movies( data );
var monitor = new Monitor( movies );

module.exports = movies;
