let random = Math.floor(Math.random()*100+1)
let submit = document.querySelector('#subt');
let guesses = document.querySelector('.guesses');
let lastresult = document.querySelector('.lastResult');
let lorH = document.querySelector('.loworHi')


let playGame = true;
let guessCount = 1;

let p = document.createElement('p');
  if(playGame){
submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guessfield = document.querySelector('#guessField')

    const guess = parseInt(guessfield.value)
   

    validate(guess);
    
})}


function validate (guess){

    if(guess <1){
sendMesaage(`please enter a value greater than ${guess}`)
    }
    else if(guess >100){
        sendMesaage(`please enter a value smaller than 101`)

    }
    else if(isNaN(guess)){
        sendMesaage(`please enter a Number between 1 to 100`)

    }
    else {
        if(guessCount === 11){
            sendMesaage (`game over, the actual no is ${guess}`);
            endgame();
        }
        else{
            check (guess)
    }}}


function sendMesaage(message){
lorH.innerHTML = `${message}`
}

function check (guess){
if (guess === random){
    sendMesaage (`congrats you guessed the right number `)
    endgame();
}
else if (guess < random ){
    sendMesaage(`number is too low`);
    displayguess(guess);
}
}

function displayguess (guess) {

guessfield.value = '';

guesses.innerHTML += `${guess},  `

guessCount++ ;

lastresult.innerHTML = `${10 - guessCount}`

}

function endgame(){
    guessfield.value = '';
    guessfield.setAttribute('disable','');
    p.classList.add('button');
    p.innerHTML =  <h2 id = "but"> Start a new Game </h2>
    lastresult.append(p);
    playGame = false;
    newGame();

}

function newGame(){
    playGame = true;
    guessfield.remove
}