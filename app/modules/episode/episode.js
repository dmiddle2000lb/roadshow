define([
  // Application.
  'app',
  'modules/episode/scripts/boston',
  'popcorn.code'
], function(app, Script) {

  var Episode = app.module();

  Episode.Model = Backbone.Model.extend();

  Episode.Views.Video = Backbone.View.extend({
    template: 'episode/views/video',

    beforeRender: function(){
      this.setView('.item-name', new Episode.Views.Item());
    },

    afterRender: function(){
      var Roadshow = Popcorn( "#video" );
      Roadshow.play();

      Script.forEach(function(time){
        return Roadshow.code(time);
      });

    }
  });

  Episode.Views.Item = Backbone.View.extend({
    tagName: 'h3',
    template: 'episode/views/item',

    initialize: function(){
      this.model = new Episode.Model();
      app.on('video:item-name', this.setItem, this);
      this.model.on('change:item', this.render, this);
    },

    serialize: function(){
      return {
        item: this.model.get('item')
      };
    },
    
    setItem: function(item){
      this.model.set('item', item);
    }

  });

  return Episode;

});