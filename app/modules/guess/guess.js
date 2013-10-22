define([
  // Application.
  'app'
], function(app) {

  var Guess = app.module();

  Guess.Collection = Backbone.Collection.extend({
    
  });

  Guess.Views.Appraisal = Backbone.View.extend({
    template: 'guess/views/appraisal',
    
    initialize: function(){
      this.model = new Backbone.Model();
      app.on('video:item-name', this.setItem, this);
      app.on('timer:start', this.timer, this);
      app.on('timer:end', this.close, this);
      this.model.on('change:item', this.render, this);
    },

    events: {
      'click #vote-submit': 'emitGuess'
    },

    serialize: function(){
      return {
        item: this.model.get('item')
      };
    },

    setItem: function(item){
      this.model.set('item', item);
    },
    
    timer: function(length){
      this.tick = setInterval(function(){
        length--;
        var m, s, z = '00';
        m = ~~(length / 60);
        s = length % 60;
        s = '' + s;
        s = z.substring( 0, z.length - s.length ) + s;
        $('#time-remaining').html(m + ':' + s);
      }, 1000);
    },

    close: function(data){
      clearInterval(this.tick);
      $('#time-remaining').removeClass('timer').addClass('timer-done').html("Time's up!");
    },

    emitGuess: function(e){
      var val = $('#value').val(); 
      app.socket.emit('guess', { guess: val });
      return false;
    }
    
  });

  Guess.Views.NewGuess = Backbone.View.extend({
    template: 'guess/views/newguess',
    tagName: 'li',
    serialize: function(){
      return {
        guess: this.options.guess
      };
    }
  });

  Guess.Views.World = Backbone.Layout.extend({
    template: 'guess/views/world',
    
    initialize: function(){
      var that = this;
      app.socket.on('new guess', that.updateGuesses, this);
      app.on('guess:update', this.addGuess, this);
    },

    updateGuesses: function(guess){
      console.log('ug',guess);
      app.trigger('guess:update', guess);
    },

    addGuess: function(guess){
      console.log('ag',guess);
      this.insertView('ul', new Guess.Views.NewGuess(guess)).render();
    }

  });

  return Guess;

});