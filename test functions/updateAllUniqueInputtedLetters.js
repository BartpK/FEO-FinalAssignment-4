let allUniqueInputtedLetters = [`i`, `v`];

const updateAllUniqueInputtedLetters = function (randomPickedWord, input) {
    if (!input.match(/^[a-zA-Z]+$/)) { return allUniqueInputtedLetters; }
    if (allUniqueInputtedLetters.includes(input) || input === "") {
        return allUniqueInputtedLetters;
    }

    if (!randomPickedWord.includes(input) && (!allUniqueInputtedLetters.includes(input))) {
        allUniqueInputtedLetters.push(input);

    }
    if (randomPickedWord.includes(input) && (!allUniqueInputtedLetters.includes(input))) {
        allUniqueInputtedLetters.push(input);

    };
    return allUniqueInputtedLetters;
}

module.exports = updateAllUniqueInputtedLetters;