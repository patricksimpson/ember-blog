import Ember from 'ember';

export default Ember.Route.extend({
  isStaticContentRemoved: false,
  model: function() {
    var posts = this.store.find('post', { 'filter[posts_per_page]': 1 });
    return posts;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    if(window && typeof($) !== "undefined" && !this.isStaticContentRemoved) {
      console.log('removed static content...');
      $('.ember-view').remove();
      this.isStaticContentRemoved = true;
    }
  }

});
