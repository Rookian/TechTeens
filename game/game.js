Game = {
  
    run: function(options) {
  
      var now,
          dt       = 0,
          last     = window.performance.now,
          slow     = options.slow || 1, // slow motion scaling factor
          step     = 1/options.fps,
          slowStep = slow * step,
          update   = options.update,
          render   = options.render
  
      function frame() {
        now = window.performance.now;
        dt = dt + Math.min(1, (now - last) / 1000);
        while(dt > slowStep) {
          dt = dt - slowStep;
          update(step);
        }
        render(dt/slow);
        last = now;
        requestAnimationFrame(frame, options.canvas);
      }
  
      requestAnimationFrame(frame);
    },
  }