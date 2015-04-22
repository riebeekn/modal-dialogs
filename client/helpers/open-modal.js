ModalHelper = {};

ModalHelper.openModalFor = function(animalId) {
  Session.set('selectedAnimalId', animalId);
  Modal.show('animalsModal');
}