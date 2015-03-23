import DS from 'ember-data';
import ApplicationAdapter from './application';

export default ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://api.patricksimpson.me',
  namespace: 'wp-json',
  ajaxSuccess: function(jqXHR, jsonPayload) {
    var totalPages = jqXHR.getResponseHeader('X-WP-TotalPages');
    jsonPayload.meta = {total_pages: totalPages}
    return jsonPayload;
  }
});
