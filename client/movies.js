// Declare client Movies collection
Movies = new Meteor.Collection("movies");
 
// Bind moviesTemplate to Movies collection
Template.moviesTemplate.movies = function () {
    return Movies.find();
};