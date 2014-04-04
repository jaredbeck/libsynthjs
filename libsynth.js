window.AudioContext = window.AudioContext || window.webkitAudioContext;

(function($, undefined) {
  var synth = {
    osc: function(audioContext, waveform, freq) {
      var o = audioContext.createOscillator();
      o.type = waveform;
      o.frequency.value = freq;
      return o;
    }
  };

  var ctx = new AudioContext();
  var o = synth.osc(ctx, 'sine', 440.0);
  o.start(0);
  o.connect(ctx.destination);
  o.stop(1);

})(jQuery);
