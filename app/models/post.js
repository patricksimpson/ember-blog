import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  postdate: DS.attr('date'),
  slug: DS.attr('string')
});
