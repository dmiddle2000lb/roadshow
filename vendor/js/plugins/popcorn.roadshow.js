(function( window ){
  var Roadshow = window.Popcorn( "#video" );

  Roadshow
    .play()
    .code({
      name: 'baseball',
      title: '1915 Boston Red Sox Team-Signed Baseball',
      start: 66,
      end: 138,
      onStart: function( options ) {
        console.log(options);
        document.getElementById( "main" ).innerHTML = options.title;
      },
      onEnd: function( options ) {
        document.getElementById( "main" ).innerHTML = "No";
      }
    });
  
  return Roadshow;
})( this );