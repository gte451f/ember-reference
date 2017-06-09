import Ember from 'ember';
import OwnerValidations from 'ember-reference/validations/owner';
import { task } from 'ember-concurrency';
const { Controller } = Ember;

export default Controller.extend({
  OwnerValidations,

  notify: Ember.inject.service(),

  /**
   *
   */
  saveOwner: task(function* (model) {
    yield model.validate();
    if (model.get("isValid")) {
      try {
        yield model.save();
        // TBD
        this.transitionToRoute('owner.item', model.get('id'));
      } catch (error) {
        // console.log(error);
        this.get('notify').alert('Please correct validation errors before saving. (API)');
      }
    } else {
      // model was invalid
      this.get('notify').alert('Please correct validation errors listed above.');
    }
  })
});
