import ENV from 'ember-reference/config/environment';
import DS from 'ember-data';

/**
 * use this file to configure your app to hit an API for data persistence
 */
export default DS.JSONAPIAdapter.extend({
  namespace: ENV.APP.restNameSpace,
  host: ENV.APP.restDestination
});
