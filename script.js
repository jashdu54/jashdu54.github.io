/* Scroll reveal */
const els = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
els.forEach(el => obs.observe(el));

/* Smooth nav active state */
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if(window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#'+current ? 'var(--teal)' : '';
  });
}, {passive:true});
