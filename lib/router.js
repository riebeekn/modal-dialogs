Router.configure({
  layoutTemplate: 'layout',
  // subscribe to our animals publication
  // with a waitOn function in Iron Router
  // ... now our application will wait to load 
  // until we've successfully subscribed to the
  // publication
  waitOn: function () {
    Meteor.subscribe('animals');
  }
});

Router.route('/', {
  name: 'animals'
});