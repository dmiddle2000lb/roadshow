require.config({
  "deps": ["main"],
  
  "paths": {
    "vendor": "../vendor",
    // Almond is used to lighten the output filesize.
    "almond": "../vendor/bower/almond/almond",
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",
    "lodash": "../vendor/bower/lodash/dist/lodash",
    "jquery": "../vendor/bower/jquery/jquery",
    "backbone": "../vendor/bower/backbone/backbone",
    "popcorn": "../vendor/bower/popcornjs/popcorn",
    "ldsh": "../vendor/bower/lodash-template-loader/loader",
    "popcorn.code": "../vendor/bower/popcornjs/plugins/code/popcorn.code",
    "popcorn.roadshow": "../vendor/js/plugins/popcorn.roadshow",
    "layoutmanager": "../vendor/bower/layoutmanager/backbone.layoutmanager",
    "socketio": "/socket.io/socket.io"
  },

  "shim": {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
      "deps": ["jquery", "lodash"],
      "exports": "Backbone"
    },

    "layoutmanager": ["backbone"],

    "popcorn.code": {
      "deps": ["popcorn"],
      "exports": "Popcorn"
    }
  },

  "lodashLoader": {
    "root": ""
  }
});
