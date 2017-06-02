import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.query('account', {with: 'owners,account_addrs'});
  }
});
