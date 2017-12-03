var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var Button = document.querySelector('.button');
Button.addEventListener('click', checkGuess);
Button.focus();

var guessCount = 1;
var resetButton;


    
function checkGuess() {
  var guess = prompt ("Введите число");
  var userGuess = Number(guess);
  
  if (guessCount === 1) {
    guesses.textContent = 'Ваши предыдущие числа: ';
  }
  guesses.textContent += userGuess + ' ';
    
  
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Вы угадали. Круто!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!Попытки исчерпаны. Игра закончена!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Не угадали!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess === 0) {
        lowOrHi.textContent = 'Ноль не входит в промежуток от 1 до 100...';
    } else if(userGuess > 99) {
      lowOrHi.textContent = 'Ваше число не входит в промежуток от 1 до 100...' ;
      } else {
        if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Подсказка: Ваше число меньше, чем заданное!';
        } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Подсказка: Ваше число больше, чем заданное!';
          }
        }
    }
  guessCount++;
  Button.focus();
}


    
function setGameOver() {
 Button.disabled = true;
 
  resetButton = document.createElement('button');
  resetButton.textContent = 'Начать игру заново';
  document.body.appendChild(resetButton);
  resetButton.focus();
  resetButton.addEventListener('click', resetGame);
}
    
function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

Button.disabled = false;
Button.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
    