"use strict";

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
  document.querySelector("#mockup").src = data.img;

  document.querySelector("#live-link").href = data.demoLink;
  document.querySelector("#repo-link").href = data.repoLink;

  document.querySelector(".project-content img").src = data.img;

  document.querySelector(".project-content p:nth-of-type(3)").textContent =
    data.firstP;
  document.querySelector(".project-content p:nth-of-type(4)").textContent =
    data.secondP;

  document.querySelector(".project-content h3").textContent = data.title1;
  document.querySelector("#detail").src = data.img1;
  document.querySelector(".project-content h3+p").textContent = data.thirdP;
}
