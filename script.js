// all global variables
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

let allUniqueInputtedLetters = [];
let gameOver;
let randomPickedWord;
let remainingTries = 5;

const wrongLettersDisplayElement = document.getElementById("guessedletters");
const correctLettersDisplayElement = document.getElementById("currentword");
const guessbutton = document.getElementById("guessbutton");
const restartbutton = document.getElementById("restartbutton");
const livespanElement = document.querySelector(".lives span");

// all functions
const displayRemainingTries = () => {
  livespanElement.innerHTML = remainingTries
};

const displayCorrectGuessedLetters = (correctLetters) => {
  correctLettersDisplayElement.innerHTML = correctLetters.join(" ")
};

const displayWrongGuessedLetters = (wrongLetters) => {
  wrongLettersDisplayElement.innerHTML = wrongLetters.join(" ")
};

const emptyDisplayCorrectGuessedLetters = () => {
  correctLettersDisplayElement.innerHTML = " "
};

const emptyDisplayWrongGuessedLetters = () => {
  wrongLettersDisplayElement.innerHTML = " ";
};

const emptyPickedWordSpan = () => {
  document.querySelector(".lose p span").innerHTML = " ";
};

const pickRandomWord = function (list) {
  let index = Math.floor(Math.random() * list.length);
  randomPickedWord = (list[index].split(""));
  console.log(`ik ben een ${randomPickedWord}`);
  return randomPickedWord;
};

const spanTheRandomPickedWordInDOM = function () {
  document.querySelector(".lose p span").innerHTML = `"${randomPickedWord.join("")}"`;
};

const cleanInputField = function () {
  document.querySelector("input").value = "";
};

const decrementRemainingTries = () => {
  remainingTries--;

};

const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

const LoseGame = function () {
  document.querySelector(".lose").style.display = "block";
  spanTheRandomPickedWordInDOM();
  gameOver = true;
};

const displayStartingMessage = (player) => {
  const playElement = document.getElementById("player1");
  const startingMessage = `${player} We are about to start the game`
  playElement.innerHTML = startingMessage
};

const resetRemainingTries = () => {
  remainingTries = 5;
};

const resetAllUNiqueInputtedLetters = () => {
  allUniqueInputtedLetters = [];
};

const checkIfGameOVer = (remainingTries) => {
  return (remainingTries == 0)
}

const checkIfGameWon = function (word, inputs) {
  let lettersNotYetGuessed = word.filter(function (letter) {
    return !inputs.includes(letter);
  });
  return (lettersNotYetGuessed.length === 0)
};

const updateAllUniqueInputtedLetters = function (randomWord, input) {
  cleanInputField();
  if (gameOver == true) { return; };
  if (!input.match(/^[a-zA-Z]+$/)) { return allUniqueInputtedLetters; }
  if (allUniqueInputtedLetters.includes(input) || input === "") {
    return allUniqueInputtedLetters;
  }

  if (!randomWord.includes(input) && (!allUniqueInputtedLetters.includes(input))) {
    allUniqueInputtedLetters.push(input);
    decrementRemainingTries();
    displayRemainingTries();

  }
  if (randomWord.includes(input) && (!allUniqueInputtedLetters.includes(input))) {
    allUniqueInputtedLetters.push(input);

  };
  updateCorrectGuessedLetters(randomWord, allUniqueInputtedLetters);
  updateWrongLetters(randomWord, allUniqueInputtedLetters);
  console.log(`all unique inputted letters: ${allUniqueInputtedLetters}`);

  if (checkIfGameWon(randomWord, allUniqueInputtedLetters) == true) {
    //console.log("gewonnen")
    winTheGame()
  };
  if (checkIfGameOVer(remainingTries) == true) {
    //console.log("verloren")
    LoseGame()
  };

};

const updateCorrectGuessedLetters = (randomWord, uniqueInputletters) => {
  let correctGuessedLetters = randomWord.map(function (letterFromRandomWord) {
    if (uniqueInputletters.includes(letterFromRandomWord)) {
      return letterFromRandomWord;
    } else {
      return "_";
    }
  })
  console.log(`correct letters: ${correctGuessedLetters}`);
  displayCorrectGuessedLetters(correctGuessedLetters);
};

const updateWrongLetters = function (word, inputs) {
  let wrongLettersArray = inputs.filter(function (letter) {

    return !word.includes(letter);
  });
  console.log(`wrong letters: ${wrongLettersArray}`);
  displayWrongGuessedLetters(wrongLettersArray);
};

const beginTheGameWithPlayer = () => {
  gameOver = false;
  pickRandomWord(wordList);
  //displayStartingMessage(`player1`);
  resetRemainingTries();
  document.querySelector(".lose").style.display = "none";
  document.querySelector(".win").style.display = "none";
  emptyPickedWordSpan();
  emptyDisplayCorrectGuessedLetters();
  emptyDisplayWrongGuessedLetters();
  resetAllUNiqueInputtedLetters();
  displayRemainingTries();
};

beginTheGameWithPlayer();

restartbutton.addEventListener("click", function () { beginTheGameWithPlayer(); })
guessbutton.addEventListener("click", function () {
  const input = document.querySelector("input").value;
  updateAllUniqueInputtedLetters(randomPickedWord, input)
});
