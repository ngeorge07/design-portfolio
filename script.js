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

const urlParams = new URLSearchParams(document.location.search.substring(1));
const id = urlParams.get("id");
const url = `https://gnmmd2ndsemester-6f2a.restdb.io/rest/design-for-devs/${id}`;

const options = {
  headers: {
    "x-apikey": "61b64c7672a03f5dae822307",
  },
};

// fetch the data from the database
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showData(data);
  });

function showData(data) {
  document.querySelector(".project-content h2").textContent = data.title;
  document.querySelector(".project-content img").src = data.img;

  document.querySelector("#live-link").href = data.demoLink;
  document.querySelector("#repo-link").href = data.repoLink;

  document.querySelector(".project-content img").src = data.img;

  document.querySelector(".project-content p:nth-of-type(3)").textContent =
    data.firstP;
  document.querySelector(".project-content p:nth-of-type(4)").textContent =
    data.secondP;
}
