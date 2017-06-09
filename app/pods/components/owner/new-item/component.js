import Ember from 'ember';

export default Ember.Component.extend({

  /**
   * let's clear out the partially created model if we haven't already
   */
  willDestroyElement() {
    this._super(...arguments);
    let model = this.get('model');

    if (!model.get('isDeleted')) {
      model.destroyRecord();
    }
  }

});
