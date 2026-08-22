/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

const readLine = require("readline-sync");
let playerName = "";

//Create variables for player stats
let playerHealth = 100;
let playerGold = 20;
let playerLocation = "village";
let gameRunning = true;
let inventory = [];

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Get player name using readline-sync
playerName=readLine.question("What's your name?");

//Personalized Welcome
console.log("Welcome " + playerName);
console.log("Staring gold: " + playerGold);
