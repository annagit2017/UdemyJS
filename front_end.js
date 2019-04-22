
const test1 = new Hangman('dog bla', 100);
let id = () => uuidv4();

document.querySelector('#guess_input').addEventListener('submit', function (guessedLetter) {
    guessedLetter.preventDefault();
    guessedLetter = guessedLetter.target.text.value;
    document.querySelector('#guess_letter').value =''
    return (test1.guess(guessedLetter));
});

/*Print word to the page*/
const updWord = function(){
    let guessWord = document.createElement('text');
    guessWord.setAttribute('id', id());
    guessWord.textContent = test1.obj.puzzle;
    removeChld("#guess_word");
    document.querySelector("#guess_word").appendChild(guessWord);
    return 'foo';
};

/*Print the number of the tries*/
const updNum = () => {
    let num = document.createElement('text');
    num.setAttribute('id', id());
    num.textContent = test1.obj.numGuesses;
    removeChld("#number_of_guesses");
    document.querySelector("#number_of_guesses").appendChild(num)};


/*Clean up existing Node element to beautify puzzle print-out*/
const removeChld = function (selector) {
    if (document.querySelector(selector).children.length > 0) {
        document.querySelector(selector).firstElementChild.remove()}
};


updWord();
updNum();
