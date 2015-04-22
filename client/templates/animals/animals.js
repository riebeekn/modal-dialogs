Template.animals.helpers({
  animals: function() {
    return Animals.find({}, { sort: {rank: 1}});
  }
});