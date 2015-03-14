import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve) {
      _this.store.find('post', {'filter[name]': params.post_slug}).then(function(post) {
        resolve(post.get('firstObject'));
      });
    });
  },
  serialize: function (model) {
    return {
      post_slug: model.get('slug'),
      post_id:   model.get('id')
    };
  }
});
