define([
  // Application.
  'app',
  'modules/episode/episode',
  'modules/guess/guess'
], function(app, Episode, Guess) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    initialize: function(){
      this.layout = new Backbone.Layout({
        el: 'main',
        template: '../templates/main-layout',
        views: {
          '.video': new Episode.Views.Video(),
          '.world': new Guess.Views.World()
        }
      }).render();
    },

    routes: {
      'episode/:city/:hour/:guess/:item': 'episode'
    },

    episode: function(){
      this.layout.setView('.guess', new Guess.Views.Appraisal()).render();
    },

    go: function() {
      return this.navigate(_.toArray(arguments).join('/'), true);
    }
  });

  // Required, return the module for AMD compliance.
  return Router;

});
