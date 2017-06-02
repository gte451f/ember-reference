import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  primaryContact: DS.attr('number'),
  relationship: DS.attr('string'),

  // user fields
  email: DS.attr('string'),
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  userName: DS.attr('string'),
  userType: DS.attr('string'),
  gender: DS.attr('string'),

  //calculated
  fullName: Ember.computed('firstName', 'lastName', function () {
    var fullName = this.get('lastName') + ', ' + this.get('firstName');
    return fullName;
  }),

  // relationshps
  account: DS.belongsTo('account', {
    async: false
  })
});

