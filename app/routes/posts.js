import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function(params) {
    params.paramMapping = { total_pages: "X-WP-TotalPages" };
    return this.findPaged('post',params);
  }
});
