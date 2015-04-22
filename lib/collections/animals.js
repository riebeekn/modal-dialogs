Animals = new Mongo.Collection('animals');

Meteor.methods({
  deleteAnimal: function(animal) {
    Animals.remove(animal);
  }
});