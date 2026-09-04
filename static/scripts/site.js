// Only job: toggle the mobile menu. No dependencies.
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav__burger');
  if (!nav || !burger) return;
  burger.addEventListener('click', function () {
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    burger.setAttribute('aria-expanded', String(!open));
  });
  nav.querySelectorAll('.nav__links a').forEach(function (a) {
    a.addEventListener('click', function () { nav.setAttribute('data-open', 'false'); });
  });
});
