import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType,
  isStaticContentRemoved: false
});

Router.map(function() {
  if(window && typeof($) !== "undefined" && !this.isStaticContentRemoved) {
    $(".ember-view").addClass("timebomb");
    Ember.run.later(this, function(){
      $(".timebomb").hide();
      $("body").addClass("js");
    }, 350);
    this.isStaticContentRemoved = true;
  }
  this.resource("home", {
    path: "/"
  }, function() {});
  this.resource("post", {path: "/posts/:post_slug"});
  this.resource("post", {path: "/post/:post_slug"});
  this.route("about");
  this.route("posts");
});

export default Router;
