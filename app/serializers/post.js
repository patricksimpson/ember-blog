import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload: function(type, payload) {
    var posts = [];
    var items = type.items;
    var currentItem = [];

    for(var i = 0; i < items.length; i++) {
      currentItem = items[i].fields;
      currentItem.id = items[i].sys.id;
      posts.push(currentItem);
    }
    return this._super({"posts": posts}, payload);
  }
});
