Template.animal.events({
  'click #delete': function(e) {
    e.preventDefault();

    Meteor.call('deleteAnimal', this, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
  }
});