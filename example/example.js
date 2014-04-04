$(function(){
  var clock = 10; // 10 ms
  var playing = false;
  var time = 0.0;
  var maxTime = 4000.0; // 4 s
  var timelineLen = 4;
  var playSymbol = '&#9654;';
  var pauseSymbol = 'll';
  var playPauseSlr = '#play-pause';

  var ctx = new AudioContext();
  var o = libsynth.osc(ctx, 'sine', 440.0);
  o.start(0);

  var pause = function() {
    o.disconnect();
    playing = false;
    $(playPauseSlr).html(playSymbol);
  }
  pause();

  var play = function() {
    playing = true;
    $(playPauseSlr).html(pauseSymbol);
  };

  $(playPauseSlr).click(function(){
    playing ? pause() : play();
  });

  setInterval(function(){
    if (playing) {
      time += clock;
      if (time > maxTime) { time -= maxTime; }
      var ix = Math.ceil(timelineLen * (time / maxTime));

      $('#drum th').removeClass('active');
      $('#drum th:nth-child(' + ix + ')').addClass('active');

      if ($('#drum td:nth-child(' + ix + ')').hasClass('marked')) {
        o.connect(ctx.destination);
      } else {
        o.disconnect();
      }
    }
  }, clock);

});
