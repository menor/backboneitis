var Backbone = require( 'backbone' );

var Movie = Backbone.Model.extend( {
  defaults: {
    title: "default",
    year: 0,
    description: "No description available.",
    selected: false
  }
});

module.exports = Movie;
