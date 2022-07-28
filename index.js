'use strict';
const BASE_URL = 'http://localhost:3000/games'

document.addEventListener("DOMContentLoaded", getGames)

function getGames() {
  const gameList = document.getElementById('gameDisplay')
  fetch(BASE_URL)
  .then(res => res.json())
  .then(data => {
    data.forEach(game => {
      gameList.innerHTML += `
        <li><a href="#" data-id="${game.id}">${game.name} <img src="${game.image}"</a></li>
      `
    })
    attachClicksToLinks()
  })
}

const attachClicksToLinks = () => {
  const games = document.querySelectorAll('a')
  games.forEach((game) => {
    game.addEventListener('mouseover', gameDetails)
  })
}

const gameDetails = (e) => {
  console.log(e.target.dataset.id)
  const details = document.getElementById('details')
  fetch(BASE_URL + `/${e.target.dataset.id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    details.innerHTML = `<h1>${data.name}</h1>
    <h2>Series Premise:</h2>
    <p>${data.seriesPremise}</p>
    <h2>First Game Release:</h2>
    <p>${data.firstGameRelease}</p>
    <h2>Latest Game Release:</h2>
    <p>${data.latestGameRelease}</p>
    <h2>Highest Earning Game:</h2>
    <p>${data.highestEarningGame}</p>
    `

   let infoBox = document.getElementById('details');
if(infoBox.style.display === "none") {
  infoBox.style.display = "block";
} else {
  infoBox.style.display = "block";
}

  })
}

const lightSwitch = document.querySelector('.btn2');

lightSwitch.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});