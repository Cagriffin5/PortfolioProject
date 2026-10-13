const menuBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  // Toggle the visual active states
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('open');
  
  // Toggle accessibility state (true/false)
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !isExpanded);
});
