(function() {
    var target = new Date('2026-08-23T12:00:00+03:00');
  
    function update() {
      var now = new Date();
      var diff = target - now;
      if (diff <= 0) {
        document.getElementById('cd-days').textContent  = '00';
        document.getElementById('cd-hours').textContent = '00';
        document.getElementById('cd-mins').textContent  = '00';
        document.getElementById('cd-secs').textContent  = '00';
        clearInterval(timer);
        return;
      }
      var days  = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins  = Math.floor((diff % 3600000)  / 60000);
      var secs  = Math.floor((diff % 60000)    / 1000);
  
      document.getElementById('cd-days').textContent  = String(days).padStart(2, '0');
      document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
      document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
    }
  
    update();
    var timer = setInterval(update, 1000);
  })();
  
  (function() {
    var animatables = document.querySelectorAll(
      '.split, .photo-gap, .rsvp, .footer'
    );
  
    if (!animatables.length) return;
  
    // Hide all targets on load (JS required; visible by default without JS)
    animatables.forEach(function(el) {
      el.classList.add('hidden');
    });
  
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    }, { threshold: 0.15 });
  
    animatables.forEach(function(el) {
      observer.observe(el);
    });
  })();