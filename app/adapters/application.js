import DS from 'ember-data';
import ApplicationAdapter from './application';

export default ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://api.patricksimpson.me',
  namespace: 'wp-json'
});
