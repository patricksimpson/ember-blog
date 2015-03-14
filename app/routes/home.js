import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var posts = this.store.find('post');
    return posts;
  }
});
