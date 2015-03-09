import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
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
