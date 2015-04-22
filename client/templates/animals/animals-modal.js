Template.animalsModal.helpers({
  animal: function() {
    var animalId = Session.get('selectedAnimalId');
    
    if (typeof animalId !== "undefined") {
      var animal = Animals.findOne(animalId);
      return animal;
    } else {
      return {name:'', rank:''}
    }
  }
});

Template.animalsModal.events({
  'click #save': function(e) {
    e.preventDefault();
    
    var animalId = Session.get('selectedAnimalId');
    var animal = {
      name: $('#animalName').val()
    }

    if (!animalId) {
      Meteor.call('addAnimal', animal, function(error, result) {
        if (error) {
          alert(error);
        }
      });
    } else {
      _.extend(animal, {id: animalId});
      Meteor.call('editAnimal', animal, function(error, result) {
        if (error) {
          alert(error);
        }
      });
    }

    Modal.hide('animalsModal');
  }
});