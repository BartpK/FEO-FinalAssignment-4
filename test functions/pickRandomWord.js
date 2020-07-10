const pickRandomWord = function (list) {
    let index = Math.floor(Math.random() * list.length);
    let randomPickedWord = (list[index].split(""));
    return randomPickedWord;
}

module.exports = pickRandomWord;