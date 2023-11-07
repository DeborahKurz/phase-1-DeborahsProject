# Phase 1 Project: Top US Women Runners

The purpose of this project is to fetch information about the Top 3 US Women Runners in the following events: 100m, 200m, 400m, and 800m. This project does not fetch data from a public API, but rather a local db.json file (therefore, the accuracy of data is subject to change over time).

# How To Get This Project Running
Before you do anything with this project (including view it), you will need to start the JSON server on your computer. Here are the steps:
1. Open your terminal.
2. Type: json-server --watch db.json
3. When the server is running you can open the project. To view this project in your browser, open a new terminal and type: open index.html

# Features
This project was also made to meet several requirements for my Phase-1 Project at Flatiron's School. Some of those requirements included using the method "forEach()", and three distinct eventListeners.

forEach() was used to sort the entire array of athletes into their individual events.

The eventListeners included: 1. A "change" event on the toggle. 2. "Click" events on the Race Events buttons and close buttons. 3. mouseover and mouseout events on the Race Events buttons.
Let's explore these eventListeners more indepth:

At the top of this page a user can toggle between light and dark mode. This will also change the page's text so it is white (dark mode) or black (light mode).

![Toggle Demo](ReadMeGifs/ToggleGif.gif)




The race event buttons have mouseover and mouseout event listeners that change the color of the button, and the button's text color, while the mouse is over the card.

![Mouseover Demo](ReadMeGifs/MouseOverGif.gif)




When a race event button is clicked, the athletes associated with that event will appear on the screen.

![Race Event Buttons Demo](ReadMeGifs/ButtonListenerGif.gif)




If a user is does not want to see one of the athletes, there is a "close" button on the div with the athlete's information. Clicking this button will remove the athlete's information from the page.

![Close Button Demo](ReadMeGifs/CloseButton.gif)

# Credits

100M
Data: World Athletics Ranking Official Site https://worldathletics.org/world-rankings/100m/women?regionType=countries&region=usa&page=1&rankDate=2023-10-03


200M
Data: World Athletics Ranking https://worldathletics.org/world-rankings/200m/women?regionType=countries&region=usa&page=1&rankDate=2023-10-03


400M
Data: World Athletics Ranking https://worldathletics.org/world-rankings/400m/women?regionType=countries&region=usa&page=1&rankDate=2023-10-03


800M
Data: World Athletics Ranking https://worldathletics.org/world-rankings/800m/women?regionType=countries&region=usa&page=1&rankDate=2023-10-03


CSS & HTML TOGGLE SWITCH STYLING
I learned how to create a toggle switch using w3schools.com. My finished toggle closely resembles their example and CSS/HTML code:
https://www.w3schools.com/howto/howto_css_switch.asp