const navbarLinks = document.querySelectorAll('.navbar a');
const navbar = document.querySelector('.nav-links');
const hamburger = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector(".navbar ul");

// hamburger.addEventListener('click', () => {

//     navbarTogglerClick();
// });

hamburger.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  hamburger.classList.toggle("open-navbar-toggler");
  navbar.classList.toggle('open');
}


navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));

function hamburgerClick() {
  if (navbar.classList.contains('open')) {
    hamburger.click();
  }
}


function navbarLinkClick(event) {
  smoothScroll(event);
}

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener('click', hamburgerClick);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 2000;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
