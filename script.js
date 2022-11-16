"use strict";

// **** website first-load opacity animation ****

const heroSection = document.querySelector(".hero-section");

window.onload = function () {
  heroSection.style.opacity = 1;
};

// **** intersection observer to implement "scroll up" button ****

const scrollUp = document.querySelector(".scroll-up");

const stickyScrollUp = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) scrollUp.classList.add("opacity");
  else scrollUp.classList.remove("opacity");
};

const buttonObserver = new IntersectionObserver(stickyScrollUp, {
  root: null,
  threshold: 0,
});

buttonObserver.observe(heroSection);
