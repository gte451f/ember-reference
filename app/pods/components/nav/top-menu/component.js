import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['navbar', 'navbar-default'],
  tagName: 'nav',
  navbar: true,
  'navbar-default': true

});
