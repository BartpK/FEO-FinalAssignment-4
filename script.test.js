// functionaliteit: selecteren van het random woord
test(`pickRandomWord should return a random word from the wordList as an array`, () => {
    const pickRandomWord = function (list) {
        let index = Math.floor(Math.random() * list.length);
        let randomPickedWord = (list[index].split(""));
        return randomPickedWord;
    }

    expect(pickRandomWord(wordList)).toEqual([`v`, `i`, `s`])
});

//functionaliteit: checken of een letter voorkomt in het woord
describe(`updateAllUniqueInputtedLetters should update array with all the letters that are once inputted
by the user`, () => {
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
    test("updateAllUniqueInputtedLetters", () => {
        expect(updateAllUniqueInputtedLetters([`g`, `e`, `e`, `u`, `w`], `t`)).toEqual([`i`, `v`, `t`]);
    });

    test("giving a % as input", () => {
        expect(updateAllUniqueInputtedLetters([`g`, `e`, `e`, `u`, `w`], `%`)).toEqual([`i`, `v`, `t`]);
    })

    test("giving a number as input", () => {
        expect(updateAllUniqueInputtedLetters([`g`, `e`, `e`, `u`, `w`], `9`)).toEqual([`i`, `v`, `t`]);
    })
});

// functionaliteit: updaten van de goed geraden letters
describe(`updateCorrectGuessedLetters should update the letters that are already guessed correctly by the user
with the array of unique inputs`, () => {
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
    test(`vis as random word and vesab as uniqueinputted letters`, () => {
        expect(updateCorrectGuessedLetters([`v`, `i`, `s`], [`v`, `e`, `s`, `a`, `b`])).toEqual([`v`, `_`, `s`])
    })

    test(`geeuw as random word and ab as uniqueinputted letters`, () => {
        expect(updateCorrectGuessedLetters([`g`, `e`, `e`, `u`, `w`], [`a`, `b`])).toEqual([`_`, `_`, `_`, `_`, `_`])
    })

    test(`developer as random word and epw as uniqueinputted letters`, () => {
        expect(updateCorrectGuessedLetters([`d`, `e`, `v`, `e`, `l`, `o`, `p`, `e`, `r`], [`e`, `p`, `w`])).toEqual([`_`, `e`, `_`, `e`, `_`, `_`, `p`, `e`, `_`])
    })

    test(`snoer as random word and xvbn as uniqueinputted letters`, () => {
        expect(updateCorrectGuessedLetters([`s`, `n`, `o`, `e`, `r`], [`x`, `v`, `b`, `n`])).toEqual([`_`, `n`, `_`, `_`, `_`])
    })

});