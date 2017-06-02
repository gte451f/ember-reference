import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.findRecord('account', params.account_id, { include: 'owners,account_addrs' });
  }
});
