document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');
  const themeToggleBtn = document.getElementById('theme-toggle');

  /* -------------------------------------------------------------
     1. Navigation Drawer Toggle Controller
  ------------------------------------------------------------- */
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.classList.toggle('active');
      
      // Accessibility Update: Tell screen readers menu state changes
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu drawer dynamically if any in-page link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -------------------------------------------------------------
     2. Dark / Light Mode Switching Runtime Architecture
  ------------------------------------------------------------- */
  if (themeToggleBtn) {
    const savedTheme = localStorage.getItem('theme');

    // Initialize layout themes safely
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      
      if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});