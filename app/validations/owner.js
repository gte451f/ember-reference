// validations/owner.js
import {
  validatePresence,
  validateLength,
  validateFormat,
  validateInclusion
} from 'ember-changeset-validations/validators';

export default {
  firstName: [
    validatePresence(true),
    validateLength({ min: 4 })
  ],
  lastName: validatePresence(true),
  email: validateFormat({ type: 'email' }),
  gender: validateInclusion({ list: [ 'Male', 'Female' ], allowBlank: false })
};
