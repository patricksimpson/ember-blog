import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType,
  isStaticContentRemoved: false
});

Router.map(function() {
  if(window && typeof($) !== "undefined" && !this.isStaticContentRemoved) {
    $('.ember-view').addClass('timebomb');
    Ember.run.schedule('afterRender', this, function(){
      $('.timebomb').remove();
    });
    this.isStaticContentRemoved = true;
  }
  this.resource("home", {
    path: "/"
  }, function() {});
  this.resource("post", {
    path: "/post/:post_slug"
  }, function() {});

  this.route("about");
  this.route("posts");
});

export default Router;
