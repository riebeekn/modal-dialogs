Meteor.publish('animals', function() {
  return Animals.find();
});