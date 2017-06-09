import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service(),

  /**
   * create a valid object to store new owner record
   *
   * @param params
   * @returns {*|DS.Model|Promise}
   */
  model: function () {
    return this.store.createRecord('owner');
  },

  actions: {
    /**
     * old function, replaced by controller, kept for reference to bubble up logic
     * @param model
     *
     */
    save: function (newRecord) {
      var self = this;

      let newModel = this.store.createRecord('owner', newRecord);
      newModel.save().then(function (data) {
        self.get('notify').success('Owner created!');
        self.transitionTo('owner.item', data.id);
      }, function (reason) {
        // Bubble up to global error handler
        if (reason && reason.errors[ 0 ].status === "422") {
          // Validation Error, inform user and swallow error
          self.get('notify').alert('Email address already registered.');
        } else {
          // Bubble up to global error handler
          throw reason;
        }
      });
    },

    /**
     * remove store object to clean up behind us
     *
     * @param model
     */
    cancel: function (model) {
      model.destroyRecord();
      this.transitionTo('owner');
    }

  }
});
