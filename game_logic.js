const Hangman = function ( word, numGuesses ) {
    this.word = word.toLowerCase().split('');
    this.numGuesses = numGuesses;
    this.guessedStore= [];
    this.puzzle = word.replace(/\S/gi, '*');
    // this.puzzle = 'abcdefgj';
    return {

        guess: this.makeGuess.bind(this),
        puzzle: this.concatPuzzle.bind(this),
        obj: this

    }
};

Hangman.prototype.makeGuess = function (guessedLetter) {
    if (this.guessedStore.includes(guessedLetter)){
        return console.log(`You already guessed '${guessedLetter}'`);
    } else {
        this.guessedStore.push(guessedLetter);
        test1.puzzle(guessedLetter)}
    return this.guessedStore;
};



Hangman.prototype.concatPuzzle = function (guessedLetter) {
    let index = this.word.indexOf(guessedLetter);
    if ( index !== -1) {
        this.numGuesses--;
        this.puzzle = this.puzzle.split('');
        this.puzzle.splice(index, 1, guessedLetter);
        this.puzzle = this.puzzle.join('');
    } else {
        this.numGuesses--;
        window.alert(`\"${guessedLetter}\" doesn't exist, you have ${this.numGuesses} guesses left`)
    }
    updWord();
    updNum();
    return this.puzzle;
}