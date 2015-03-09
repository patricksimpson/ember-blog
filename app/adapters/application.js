import DS from 'ember-data';
import ApplicationAdapter from './application';
import ENV from "../config/environment";

export default ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://cdn.contentful.com/spaces',
  namespace: '5fz01j1uvhb7',
  headers: {
    'Authorization': 'Bearer ' + ENV.apiKey
  },
  buildURL: function(type, id, record) {
    if(type === "post") {
      type = "entries";
    }
    return this._super(type, id, record);
  }
});
