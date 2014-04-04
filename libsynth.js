window.AudioContext = window.AudioContext || window.webkitAudioContext;

(function(undefined) {
  window.libsynth = {
    osc: function(audioContext, waveform, freq) {
      var o = audioContext.createOscillator();
      o.type = waveform;
      o.frequency.value = freq;
      return o;
    }
  };

})();
