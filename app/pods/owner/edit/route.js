import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service(),

  model: function (params) {
    return this.store.findRecord('owner', params.id, { include: 'accounts' });
  },

  actions: {
    //test error handler
    error: function () {
      // console.log(err);
      return true;
    },

    /**
     * save a model and deal with validation errors
     * @param model
     *
     */
    save: function (model) {
      var self = this;
      model.save().then(function () {
        self.get('notify').success('Owner saved!');
        self.transitionTo('owner.item', model.id);
      }, function (reason) {
        // Bubble up to global error handler
        if (!Ember.isEmpty(reason.errors) && reason.errors[ 0 ].status === 422) {
          // Expected rejection, inform user and swallow error
          self.get('notify').alert('Email address already registered.');
        } else {
          // Bubble up to global error handler
          // console.debug(reason);
          throw reason;
        }
      });
    }
  }
});
