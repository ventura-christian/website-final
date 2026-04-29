"use strict";

const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const modeLinks = document.querySelectorAll("[data-model]");
const body = document.body;
const label = document.getElementById("mode-label");

modeLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const mode = link.getAttribute("data-mode");

    body.setAttribute("data-mode", mode);
    label.textContent = `[${mode.toUpperCase()}]`;
  });
});
