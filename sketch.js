
var canvas, gameState, playerCount, database;

var game, form, player;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
}