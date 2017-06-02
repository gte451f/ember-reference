import Transform from 'ember-data/transform';
import moment from 'moment';

export default Transform.extend({
  deserialize(serialized) {
    if (serialized) {
      return moment(serialized + ' +00:00', 'YYYY-MM-DD HH:mm:ss Z').toDate();
    }
    return serialized;
  },

  serialize(deserialized) {
    if (deserialized) {
      return moment(deserialized).utc().format('YYYY-MM-DD HH:mm:ss');
    }
    return deserialized;
  }
});
