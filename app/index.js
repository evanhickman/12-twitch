import 'whatwg-fetch';
import data from './data.js';
import addGamesToList from './twitch/add-games-to-list';
import createGameElement from './twitch/create-game-element';


// Look up a `ul` element with a class called `results`
const ul = document.querySelector('.results');

// Add games to the results list based on the data from `data.json`
const list = addGamesToList(ul, data.top);
