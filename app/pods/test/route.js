import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findRecord('account', 1, { include: 'owners,account_addrs' });
  }
});
