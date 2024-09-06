const score = JSON.parse(localStorage.getItem('score'))
||
{
    wins : 0,
    losses : 0,
    ties : 0
}
catchShowscore();

function computerMove() {
const randomNumber = Math.random();
let computerMove1 = ' ';
if (randomNumber >=0 && randomNumber < 1/3) {
    computerMove1 = 'rock';
} else if (randomNumber >=1/3 && randomNumber < 2/3) {
    computerMove1 = 'paper';
} else if (randomNumber >=2/3 && randomNumber < 1) {
    computerMove1 = 'scissors';
}
return computerMove1 ;
}

function gamePlay(para) {
const computerMove1 = computerMove();
let result = ' ';
if (para === 'rock') {
    if (computerMove1 === 'rock') {
        result = 'You ties!';
    } else if (computerMove1 === 'scissors') {
        result = 'You wins!';
    } else if (computerMove1 === 'paper') {
        result = 'You losses!';
    }
} else if (para === 'paper') {
    if (computerMove1 === 'rock') {
        result = 'You wins!';
    } else if (computerMove1 === 'scissors') {
        result = 'You losses!';
    } else if (computerMove1 === 'paper') {
        result = 'You ties!';
    }
} else if (para === 'scissors') {
    if (computerMove1 === 'rock') {
        result = 'You losses!';
    } else if (computerMove1 === 'scissors') {
        result = 'You ties!';
    } else if (computerMove1 === 'paper') {
        result = 'You wins!';
    }
}
if (result === 'You wins!') {
    score.wins++;
} else if (result === 'You losses!'){
    score.losses++;
} else if (result === 'You ties!') {
    score.ties++;
}
localStorage.setItem('score', JSON.stringify(score));
catchShowscore();

const jsResult = document.querySelector('.js-result');
jsResult.innerHTML = `${result}`;

const jsMoves = document.querySelector('.js-moves');
// jsMoves.innerHTML = ' You <img class="rps-img" style="padding: 0" src="images/${para}.png" alt="rock">\n' +
//     '        <img class="rps-img" style="padding: 0" src="images/scissors.png" alt="scissors">\n' +
//     '        Computer'
jsMoves.innerHTML = `  
    You <img class="rps-img" style="padding: 0" src="images/${para}.png" alt="${para}">
    <img class="rps-img" style="padding: 0" src="images/${computerMove1}.png" alt="${computerMove1}">
     Computer
`

//         alert(`You moves ${para.toUpperCase()} and Computer moves ${computerMove1.toUpperCase()}. So,${result}
// Win : ${score.wins} and Losses : ${score.losses} and Ties : ${score.ties}`)
}
function catchShowscore() {
const jsScore = document.querySelector('.js-score');
jsScore.innerHTML = `Win : ${score.wins} and Losses : ${score.losses} and Ties : ${score.ties}`
}

