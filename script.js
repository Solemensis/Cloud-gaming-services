"use strict";

const heroSection = document.querySelector(".hero-section");

window.onload = function () {
  heroSection.style.opacity = 1;
};

document.querySelector(".select").addEventListener("click", function () {
  document.querySelector(".modal").showModal();
});
