let one = document.getElementById('one');
let two = document.getElementById('two');
let plus = document.getElementById('plus');
let equal = document.getElementById('equal');
let answer = document.getElementById('answer');
let clear = document.getElementById('clear');
let minus = document.getElementById('minus');

function clickNumber() {
  answer.innerHTML += this.innerHTML;
}

// const operators = ["+", "-", "*", "/"];

one.addEventListener("click", clickNumber);
two.addEventListener("click", clickNumber);
three.addEventListener("click", clickNumber);
four.addEventListener("click", clickNumber);
five.addEventListener("click", clickNumber);
six.addEventListener("click", clickNumber);
seven.addEventListener("click", clickNumber);
eight.addEventListener("click", clickNumber);
nine.addEventListener("click", clickNumber);

plus.addEventListener("click", clickNumber);
minus.addEventListener("click", clickNumber);
divide.addEventListener("click", clickNumber);
decimal.addEventListener("click", clickNumber);

mult.addEventListener("click", function() {
  answer.innerHTML += "*";
  // alert(`You pressed ${this.textContent}`);
});

clear.addEventListener("click", function() {
  answer.innerHTML = '';
});

equal.addEventListener("click", function() {
  let answerContent = answer.innerHTML;
  answer.innerHTML = eval(answerContent);
});

// build a function that evaluates whatever number is currently inside and answer and then replaces the current value of answer with that value

// ISSUE valueOf is not evaluating the equation, it is simply printing out the same value. I believe it thinks the + is within quotes and thus is just concatenating

// Many logged out tests to try to convert data type
