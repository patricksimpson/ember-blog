import DS from 'ember-data';
import ApplicationAdapter from './application';
import ENV from "../config/environment";

export default ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://pks.dev',
  namespace: 'wp-json'
});
