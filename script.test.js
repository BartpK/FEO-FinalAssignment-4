const decrementTries = require("./test functions/decrementTries.js");
const updateGuessedLettersArray = require("./test functions/updateGuessedLettersArray")
const checkIfGameOver = require("./test functions/checkIfGameOver")
const updateWrongLetters = require("./test functions/updateWrongLetters")


describe("Test if tries decrement", () => {

    test("Decrements tries by 1", function () {
        let remainingTries = 5;
        expect(decrementTries(remainingTries)).toEqual(remainingTries - 1);
    });
})

describe("Test function to add guessed letters to array", () => {

    test("Adds guessed letter to array", function () {

        letter = "t"
        testArray = ["T", "e", "s"]
        expected = ["T", "e", "s", letter]
        expect(updateGuessedLettersArray(letter, testArray)).toEqual(expected);
    });

    test("Accepts only single characters", function () {
        letter = "tt"
        testArray = ["T", "e", "s"]
        expect(updateGuessedLettersArray(letter, testArray)).not.toHaveLength(4);
    });

    test("Accepts only a-z characters", function () {
        letter = "@"
        testArray = ["T", "e", "s"]
        expect(updateGuessedLettersArray(letter, testArray)).not.toHaveLength(4);
    });
})

describe("Test function that checks if game is over", () => {

    test("Returns false if remainingTries >= 0", function () {
        remainingTries = 6;
        expect(checkIfGameOver(remainingTries)).not.toBe(true);
    });

    test("Returns true if remainingTries <= 0", function () {
        remainingTries = 0;
        expect(checkIfGameOver(remainingTries)).toBe(true);
    });

})

describe("Test function that updates array with incorrect guesses", () => {


    test("check if function filters correct guesses from return", function () {
        word = ["v", "i", "s"];
        expect(updateWrongLetters(word, ["b", "a", "v"])).toEqual(["b", "a"]);
    });

    test("check if function return empty array if all guesses are correct", function () {
        word = ["v", "i", "s"];
        expect(updateWrongLetters(word, ["v", "i", "s"])).toEqual([]);
    });

})