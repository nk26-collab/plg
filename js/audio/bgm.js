// BGM system (simple WebAudio ambient music)

window.BGM = (() => {
  let ctx = null;
  let osc = null;
  let gain = null;
  let running = false;

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();

    gain = ctx.createGain();
    gain.gain.value = 0.05;
    gain.connect(ctx.destination);
  }

  function start() {
    init();
    if (running) return;

    osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 220;

    osc.connect(gain);
    osc.start();

    running = true;
  }

  function stop() {
    if (!osc) return;
    osc.stop();
    osc.disconnect();
    osc = null;
    running = false;
  }

  function toggle() {
    if (running) stop();
    else start();
  }

  return { start, stop, toggle };
})();

// auto start on user interaction
window.addEventListener('click', () => {
  window.BGM?.start();
}, { once: true });