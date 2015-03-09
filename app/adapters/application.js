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
      console.log(id);
      console.log(record);
      type = "entries";
    }
    return this._super(type, id, record);
  },
  findQuery: function(store, type, query) {
    if (this.sortQueryParams) {
      query = this.sortQueryParams(query);
    }
    console.log(query);
    if(query.slug !== "") {
      query = {
        "content_type": "2Iq3Gza1AciCGcA0c4A0Oc",
        "fields.slug": query.slug
      }
    }
    return this.ajax(this.buildURL(type.typeKey), 'GET', { data: query });
  }
});
