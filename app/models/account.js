import DS from 'ember-data';

export default DS.Model.extend({
  active: DS.attr('string'),
  createdOn: DS.attr('utcdate'),
  updatedOn: DS.attr('utcdate'),
  notes: DS.attr('string'),
  name: DS.attr('string'),

  // relationships
  owners: DS.hasMany('owner', {
    async: false
  }),
  accountAddrs: DS.hasMany('account-addr', {})
});
