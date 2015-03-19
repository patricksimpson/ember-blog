import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var posts = this.store.find('post', { 'filter[posts_per_page]': 1 });
    return posts;
  }
});
