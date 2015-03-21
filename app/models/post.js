import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  content: DS.attr('string'),
  excerpt: DS.attr('string'),
  date: DS.attr('date'),
  link: DS.attr('string'),
  contentRendered: function() {
    var r = this.get('content').htmlSafe();
    if(r) {
      return r;
    }
    var element = document.createElement('div');
    var decode = function(str) {
      if(str && typeof str === 'string') {
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }
      return str;
    };
    return decode(this.get('content'));
  }.property('content'),
  excerptRendered: function() {
    return this.get('excerpt').htmlSafe();
  }.property('excerpt'),
  titleRendered: function() {
    return this.get('title').htmlSafe();
  }.property('title'),
  shortDate: function() {
    if(typeof(moment) !== "undefined") {
      return moment(this.get('date')).format('MMMM DD, YYYY');
    }
  }.property('date')
});
