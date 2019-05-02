# Objectives
Rock Paper Scissors game between a player and a computer.

```
Rock vs Paper -> Paper wins
Rock vs Scissors -> Rock wins
Paper vs Scissors -> Scissors win
```

## Ambition to-do list
* User interface with icons for Rock, Paper and Scissors
* Sound effects for win, lose and draw
* Scoreboard
* To take the players name

<br>

# Problem statement
The customer wants an app for Rock Paper Scissors game where the player picks between the three options and then is presented with computers (random) choice. The app is determining the winner according to the game rules.

<br>

# User Stories
```
As a User
In order to play the game according to rules
I need to be able to choose between Rock, Paper and Scissors for my turn.
```
* A function that takes the user input

```
As a User
In order to play the game according to rules
I need the computer to randomly choose between Rock, Paper and Scissors.
```
* A function (algorithm?) for a random selection


```
As a User
In order to play the game according to rules
I need the app to determine the winner.
```
* A function that takes the user input and computers choice and determines the winner
* And displays it in a message

```
As a User
In order to keep track of my score
I want the app to keep a scoreboard.
```
* Function that raises score for the winner
* And display a message

```
As a User
In order to start a new game
I want to have a "reset game" option.
```
* reset button (reload the page?)

<br>

# Learnings about SinonJS
During this callenge, in order to test randomness of the Computers choice, I researched and explored node.js library [SinonJS](https://sinonjs.org/). SinonJS provides standalone test spies, stubs and mocks for JavaScript. 

That being said, I have not (yet) figured out how to succesfully incorporate Sinon stubs in the acceptance tests. Unit tests for fully functioning stubs can be found in `spec/stub.spec.js`. 

Stub1 works together with following definiton of `Computer`:

```js
class Computer {
    constructor(choice) {
        this.choice = function () {
            let num = Math.floor((Math.random() * 3) + 1)
            if (num==1) {
                return "rock"
            } else if (num==2) {
                return "paper"
            } else {return "scissors"}  
        }
    }
}
```

Stub2 and Stub3 works together with this:

```js
works with stub2 and stub3
const Computer = {
    choice: function () {
        let num = Math.floor((Math.random() * 3) + 1)
        if (num == 1) {
            return "rock"
        } else if (num == 2) {
            return "paper"
        } else { return "scissors" }
    }
}
```




<br>

# Deployment

Deployment - work in progress.

<br>

# Running the tests

## Prerequisites
To run the tests, you will need Node.js and NPM installed, here is [how](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

You will also need [Mocha](https://www.npmjs.com/package/mocha), [Chai](https://www.npmjs.com/package/chai) and [Puppeteer](https://www.npmjs.com/package/puppeteer) installed and set up. The easy way to do it is installing and setting up [End-To-End Testing Training Wheels](https://www.npmjs.com/package/e2e_training_wheels):

In this project folder run:
```
$ npm i e2e_training_wheels --save-dev
```

Once the package is installed, run the following script in your terminal:
```
$ node ./node_modules/e2e_training_wheels/dist/install.js
```
And run the following command in the terminal:
```
$ npm link
```

Good to go!

## Running the tests

To run the feature tests:
```
$ npm run features
```
To run unit tests:
```
$ npm run specs
```
To run both feature and unit tests: 
```
npm test
```

<br>

# Built with

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Tailwind](https://tailwindcss.com/docs/what-is-tailwind/) - A utility-first CSS framework for rapidly building custom user interfaces.

<br>

# Tested with

[Mocha](https://www.npmjs.com/package/mocha) - Simple, flexible, fun JavaScript test framework for Node.js & The Browser. 

[Chai](https://www.npmjs.com/package/chai) - BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. 

[Puppeteer](https://www.npmjs.com/package/puppeteer) - Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. 

<br>

# Author

**Zane Neikena** - [zanenkn](https://github.com/zanenkn)

<br>

# License

This project utilizes the [MIT open-source license](https://opensource.org/licenses/MIT).

<br>

# Acknowledgments

Kudos to [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the README template 


