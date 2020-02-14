// dependency for inquirer npm package
let inquirer = require("inquirer");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function Player(_name, _position, _offense, _defense) {
    this.name = _name;
    this.position = _position;
    this.offense = _offense;
    this.defense = _defense;
    this.starter = true;
    this.goodGame = function () {
        if (getRandomInt(2) === 1) {
            this.offense++;
        } else {
            this.defense++;
        }
    };
    this.badGame = function () {
        if (getRandomInt(2) === 1) {
            this.offense--;
        } else {
            this.defense--;
        }
    };
    this.printStats = function () {
        console.log(`Name: ${this.name}`);
        console.log(`Position: ${this.position}`);
        console.log(`Offensive Rating: ${this.offense}`);
        console.log(`Defensive Rating: ${this.defense}`);
        console.log(`Starter? ${this.starter}`);
        console.log(`-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`);
    };
};

function playgame2() {

};
let teamScore = 0;
let playCount = 0;

let playGame = function () {
    if (playCount < 5) {
        let number1 = getRandomInt(20) + 1;
        let number2 = getRandomInt(20) + 1;
        let offenseSum = 0;
        let defenseSum = 0;
        let subs = [];
        let starters = []

        playersArray.forEach(function (element, index) {
            if (element.starter) {
                offenseSum += parseInt(element.offense);
                defenseSum += parseInt(element.defense);
                starters.push(element.name);
            } else {
                subs.push(element.name);
            }
        });

        if (number1 < offenseSum) {
            teamScore++;
        }
        if (number2 > defenseSum) {
            teamScore--;
        }

        console.log(`Your Score is ${teamScore}`);
        inquirer.prompt([{
            type: "list",
            message: "Which player would you like to sub out?",
            choices: starters, // this is a hack need to fix later
            name: "subOut",
        }, {
            type: "list",
            message: "Which player would you like to sub in?",
            choices: subs, // this is a hack need to fix later
            name: "subIn",
        }]).then(function (answers) {
            playersArray.forEach(function (element, index) {

                if (element.name === answers.subOut) {
                    element.starter = false;
                }
                if (element.name === answers.subIn) {
                    element.starter = true;
                }
            });
            playCount++;
            playGame();
        });

    } else {
        playersArray.forEach(function (element, index) {
            if (element.starter && teamScore > 0) {
                element.goodGame();
            } else if (element.starter && teamScore < 0) {
                element.badGame();
            }
        });
        console.log("New Player Stats");
        console.log(`-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`);
        for (var x = 0; x < playersArray.length; x++) {
            playersArray[x].printStats();
        }
        if (teamScore > 0) {
            console.log("You Win!");
            console.log(`-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`);
        
        } else {
            console.log("You Lose :(");
            console.log(`-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`);
        }
        inquirer.prompt([{
            type: "confirm",
            message: "Do you want to play again?",
            name: "replay",
            default: true
        }]).then(function (answers) {
            if (answers.replay) {
                playCount = 0;
                playGame();
            } else {
                process.exit();
            }
        });
    }
};



// variable we will use to count how many times our questions have been asked
let count = 0;
// array in which we will store each of our new programmer objects
let playersArray = [];
let startersArray = [];
let subArray = [];

let askQuestion = function () {
    // if statement to ensure that our questions are only asked five times
    if (count < 5) {
        console.log("Add a new player!");
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([{
            name: "name",
            message: "What is the player name?"
        }, {
            name: "position",
            message: "What is the player's position?"
        }, {
            type: "list",
            message: "How good are you on offense?",
            choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            name: "offense"
        }, {
            type: "list",
            choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            name: "defense",
            message: "How good are you on defense?"
        }]).then(function (answers) {
            // initializes the variable newProgrammer to be a programmer object which will
            // take in all of the user's answers to the questions above
            var newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);
            // pushes newProgrammer object into our array
            if (count > 2) {
                newPlayer.starter = false;
            }
            playersArray.push(newPlayer);
            // add one to count to increment our recursive loop by one
            count++;
            // run the askquestion function again so as to either end the loop or ask the questions again
            askQuestion();
        });
        // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
    } else {
        console.log(`-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`);
        for (var x = 0; x < playersArray.length; x++) {
            playersArray[x].printStats();
        }
        playGame();
    }
};

// call askQuestion to run our code
askQuestion();