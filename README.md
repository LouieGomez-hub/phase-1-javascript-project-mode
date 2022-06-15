# Popular Game Franchises

## Project Design:
This project was made with the intention of being a simple display of some of the most popular video game franchises of the modern era, specifically the last 20 years. 

After seeing a similar web page based on specific films, I decided to take my love of video games and my newly gained knowledge of coding and combine them to create my first project. This can serve as a new place people can go to if they want to learn just a little more about some popular franchises in the gaming industry.

## Features:
* Displays a list of the titles of game franchises along with the logo of that respective franchise
* Can toggle between dark and light theme webpage
* Provides:
    * the premise of each franchise of games 
    * the release dates of both the first game in the series and the most recent outing
    * and which game earned the most money in the series

## Project Function:
This project uses an event listener and fetch request, shown here...
```JavaScript 
document.addEventListener("DOMContentLoaded", () => {
  getGames()
})

function getGames() {
  const ul = document.getElementById('gameDisplay')
  fetch(BASE_URL)
  .then(res => res.json())
  .then(data => {
    data.forEach(game => {
      ul.innerHTML += `
        <li><a href="#" data-id="${game.id}">${game.name} <img src="${game.image}"</a></li>
```
 ...in order to render each game in the list along with the logo of each respective game. 
 
 There's also an event listener added to toggle the web page between its default light theme and a dark theme should someone wish to do so.
 ```JavaScript
 lightSwitch.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
```

### Languages Used:
* JavaScript
* HTML
* CSS