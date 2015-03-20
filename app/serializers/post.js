import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload: function(type, payload) {
    var raw, posts;
    posts = [];
    for(var i = 0; i < type.length; i++) {
      raw = type[i];
      posts.push({
        id:       raw.ID,
        title:    raw.title,
        slug:     raw.slug,
        date:     raw.date,
        link:     raw.link,
        content:  raw.content,
        excerpt:  raw.excerpt
      });
    }
    return this._super({"posts": posts}, payload);
  }
});
