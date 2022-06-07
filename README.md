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
This project displays a list of titles of game franchises thats uses a display function
```JavaScript 
function showAndHide(btnId, text) {
  var x = document.getElementById("myDIV");
  if (activeBtn === btnId) {
    x.innerHTML = text;
    activeBtn = null
  } else {
    x.innerHTML = text;
      activeBtn = btnId;
  } 
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
```
 to show a text box that provides information about each specific franchise upon clicking the title of any game series. 
 
 There's also a click event used to change the web page from its default light theme to a dark theme if someone chooses to do so.

### Languages Used:
* JavaScript
* HTML
* CSS