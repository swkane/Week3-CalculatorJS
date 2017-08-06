let one = document.getElementById('one');
let two = document.getElementById('two');
let plus = document.getElementById('plus');
let equal = document.getElementById('equal');
let answer = document.getElementById('answer');

one.addEventListener("click", function() {
  answer.innerHTML += Number(this.textContent);
  // alert(`You pressed ${this.textContent}`);
}, false);

two.addEventListener("click", function() {
  answer.innerHTML += Number(this.textContent);
  // alert(`You pressed ${this.textContent}`);
}, false);

plus.addEventListener("click", function() {
  answer.innerHTML += this.innerHTML;
  // alert(`You pressed ${this.textContent}`);
}, false);

mult.addEventListener("click", function() {
  answer.innerHTML += "*";
  // alert(`You pressed ${this.textContent}`);
});

// build a function that evaluates whatever number is currently inside and answer and then replaces the current value of answer with that value

// ISSUE valueOf is not evaluating the equation, it is simply printing out the same value. I believe it thinks the + is within quotes and thus is just concatenating

// Many logged out tests to try to convert data type

equal.addEventListener("click", function() {
  let answerContent = answer.innerHTML;
  console.log(answerContent.valueOf());
  // answer.textContent =
  // answer = answer.innerHTML.valueOf();
  // alert(`You pressed ${this.textContent}`);
});

console.log((1+2).valueOf());
