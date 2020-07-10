const updateCorrectGuessedLetters = (randomPickedWord, uniqueInputletters) => {
    let correctGuessedLetters = randomPickedWord.map(function (letterFromPickedWord) {
        if (uniqueInputletters.includes(letterFromPickedWord)) {
            return letterFromPickedWord;
        } else {
            return "_";
        }
    })

    return correctGuessedLetters;
}

module.exports = updateCorrectGuessedLetters;