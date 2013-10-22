define([
  'app'
], function(app){
  var Boston = [
    { 
      name: 'intro' ,
      title: 'Boston | Hour 1',
      start: 3,
      end: 46,
      onStart: function(options){
        app.trigger('video:item-name', options.title);
      }
    },
    { 
      name: 'baseball' ,
      title: '1915 Boston Red Sox Team-Signed Baseball',
      start: 66,
      end: 204,
      length: 138,
      onStart: function(options){
        app.router.go('episode', 'boston', '1', 'appraisal', options.name);
        app.trigger('video:item-name', options.title);
        app.trigger('timer:start', options.length);
      },
      onEnd: function(options){
        app.trigger('timer:end', options.name);
      }
    },
    {
      name: 'pocketwatch',
      title: 'Tiffany & Company Demantoid Garnet Watch with Fob, ca. 1890',
      start: 230,
      end: 319,
      length: 89, 
      onStart: function(options){
        app.router.go('episode', 'boston', '1', 'appraisal', options.name);
        app.trigger('video:item-name', options.title);
        app.trigger('timer:start', options.length);
      },
      onEnd: function(options){
        app.trigger('timer:end', options.name);
      }
    }
  ];

  return Boston;
});
