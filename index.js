'use strict';
const BASE_URL = 'http://localhost:3000/games'

document.addEventListener("DOMContentLoaded", () => {
  getGames()
})


function getGames() {
  const ul = document.getElementById('gameDisplay')
  fetch(BASE_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    data.forEach(game => {
      ul.innerHTML += `
        <li><a href="#" data-id="${game.id}">${game.name}</a></li>
      `
    })
    attachClicksToLinks()
  })
}

const attachClicksToLinks = () => {
  const games = document.querySelectorAll('a')
  games.forEach((game) => {
    game.addEventListener('click', gameDetails)
  })
}

const gameDetails = (e) => {
  console.log(e.target.dataset.id)
  const details = document.getElementById('details')
  fetch(BASE_URL + `/${e.target.dataset.id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
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