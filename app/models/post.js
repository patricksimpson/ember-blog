import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  content: DS.attr('string'),
  excerpt: DS.attr('string'),
  date: DS.attr('date'),
  link: DS.attr('string'),
  contentRendered: function() {
    return this.get('content').htmlSafe();
  }.property('content'),
  excerptRendered: function() {
    return this.get('excerpt').htmlSafe();
  }.property('excerpt'),
  titleRendered: function() {
    return this.get('title').htmlSafe();
  }.property('title'),
  shortDate: function() {
    console.log(this.get('date'));
    return moment(this.get('date')).format('MMMM DD, YYYY');
  }.property('date')
});
