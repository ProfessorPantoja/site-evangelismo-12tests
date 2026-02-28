(function () {
  var sections = document.querySelectorAll('.section, .hero, .mid-cta, .final-cta');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12
      }
    );

    sections.forEach(function (section) {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }

  var header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (!header) return;
    if (window.scrollY > 16) {
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.25)';
    } else {
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.14)';
    }
  });
})();
