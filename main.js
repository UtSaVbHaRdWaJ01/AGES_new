/**
 * AGES – Anshumala Green Energy Solutions
 * JavaScript: js/main.js
 */

/* ────────────────────────────────────────── */
/* NAVBAR SCROLL SHADOW */
/* ────────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ────────────────────────────────────────── */
/* MOBILE MENU TOGGLE */
/* ────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
  hamburger.innerHTML = mobileNav.style.display === 'flex' ? '✕' : '&#9776;';
});

function closeMobileNav() {
  mobileNav.style.display = 'none';
  hamburger.innerHTML = '&#9776;';
}

/* ────────────────────────────────────────── */
/* SOLUTION FILTER */
/* ────────────────────────────────────────── */
function filterSol(type, btn) {
  // Update active button
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');

  // Show/hide solution cards
  document.querySelectorAll('.sc').forEach(card => {
    if (type === 'all' || card.dataset.t === type) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ────────────────────────────────────────── */
/* SCROLL ANIMATIONS – Fade in on scroll */
/* ────────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

document.querySelectorAll('.animate').forEach((el, i) => {
  observer.observe(el);
});

/* ────────────────────────────────────────── */
/* SMOOTH SCROLL FOR ANCHOR LINKS */
/* ────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
      closeMobileNav();
    }
  });
});

/* ────────────────────────────────────────── */
/* NAV LINK HIGHLIGHTING ON SCROLL */
/* ────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nm a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#0d7a3e';
      link.style.fontWeight = '700';
    }
  });
});

/* ────────────────────────────────────────── */
/* MOBILE RESPONSIVE MENU */
/* ────────────────────────────────────────── */
window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    mobileNav.style.display = 'none';
    hamburger.innerHTML = '&#9776;';
  }
});

console.log('AGES Solar Website Loaded ✓');
