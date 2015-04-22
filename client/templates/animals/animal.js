Template.animal.events({
	'click #edit': function(e) {
    e.preventDefault();

    animal = $(e.target).closest('.animal')
    animalId = animal.attr('data-id')
    ModalHelper.openModalFor(animalId);
  },
  'click #delete': function(e) {
    e.preventDefault();

    Meteor.call('deleteAnimal', this, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
  }
});