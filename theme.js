"use strict";
let theme = localStorage.getItem("data-theme");

if (theme === "dark") {
  changeThemeToDark();
} else {
  changeThemeToLight();
}

function changeThemeToDark() {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
}

function changeThemeToLight() {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
}

// Get the element based on ID
const checkbox = document.getElementById("switch");

//dont forget change instead of click
// Apply retrieved them to the website
checkbox.addEventListener("click", () => {
  console.log("Da");
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
