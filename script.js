// JavaScript code for game logic and interactions

// Global variable to store the score
var score = 0;
var countdown;
var rounds = 5;
var commonWords = [
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
    "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
    "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
    "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
    "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
    "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
    "even", "new", "want", "because", "any", "these", "give", "day", "most", "us",
    "is", "are", "was", "were", "be", "been", "being", "have", "has", "had",
    "do", "does", "did", "get", "gets", "got", "getting", "make", "makes", "made",
    "making", "say", "says", "said", "saying", "go", "goes", "went", "gone", "going",
    "know", "knows", "knew", "known", "knowing", "take", "takes", "took", "taken", "taking",
    "see", "sees", "saw", "seen", "seeing", "come", "comes", "came", "come", "coming",
    "want", "wants", "wanted", "wanting", "use", "uses", "used", "using", "work", "works",
    "worked", "working", "call", "calls", "called", "calling", "try", "tries", "tried", "trying",
    "ask", "asks", "asked", "asking", "need", "needs", "needed", "needing", "feel", "feels",
    "felt", "feeling", "become", "becomes", "became", "become", "becoming", "leave", "leaves", "left",
    "leaving", "put", "puts", "put", "putting", "mean", "means", "meant", "meaning", "keep",
    "keeps", "kept", "keeping", "let", "lets", "let", "letting", "begin", "begins", "began",
    "begun", "beginning", "seem", "seems", "seemed", "seeming", "help", "helps", "helped", "helping",
    "talk", "talks", "talked", "talking", "turn", "turns", "turned", "turning", "start", "starts",
    "started", "starting", "show", "shows", "showed", "showing", "hear", "hears", "heard", "hearing",
    "play", "plays", "played", "playing", "run", "runs", "ran", "running", "move", "moves",
    "moved", "moving", "like", "likes", "liked", "liking", "live", "lives", "lived", "living",
    "believe", "believes", "believed", "believing", "hold", "holds", "held", "holding", "bring", "brings",
    "brought", "bringing", "happen", "happens", "happened", "happening", "write", "writes", "wrote", "written",
    "writing", "provide", "provides", "provided", "providing", "sit", "sits", "sat", "sitting", "stand",
    "stands", "stood", "standing", "lose", "loses", "lost", "losing", "pay", "pays", "paid", "paying",
    "meet", "meets", "met", "meeting", "include", "includes", "included", "including", "continue", "continues",
    "continued", "continuing", "set", "sets", "set", "setting", "learn", "learns", "learned", "learning",
    "change", "changes", "changed", "changing", "lead", "leads", "led", "leading", "understand", "understands",
    "understood", "understanding", "watch", "watches", "watched", "watching", "follow", "follows", "followed", "following",
    "stop", "stops", "stopped", "stopping", "create", "creates", "created", "creating", "speak", "speaks",
    "spoke", "spoken", "speaking", "read", "reads", "read", "reading", "allow", "allows", "allowed", "allowing",
    "add", "adds", "added", "adding", "spend", "spends", "spent", "spending", "grow", "grows",
    "grew", "grown", "growing", "open", "opens", "opened", "opening", "walk", "walks", "walked",
    "walking", "win", "wins", "won", "winning", "offer", "offers", "offered", "offering", "remember",
    "remembers", "remembered", "remembering", "consider", "considers", "considered", "considering", "appear", "appears",
    "appeared", "appearing", "buy", "buys", "bought", "buying", "wait", "waits", "waited", "waiting"
];
// Function to start the game
function startGame() {
    // Hide the "Play" button
    document.getElementById('play-button').style.display = 'none';
    
    // Show the game board
    document.getElementById('game-board').style.display = 'block';
    // Start the first round
    startRound();
}
function startRound() {
    // Select a random word from the commonWords array
    var randomIndex = Math.floor(Math.random() * commonWords.length);
    var randomWord = commonWords[randomIndex];

    // Display the word on the game board
    document.getElementById('word').textContent = randomWord;

    // Start the timer
    startTimer(30);
}
// Function to start the timer
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var timerDisplay = document.getElementById('timer');
    clearInterval(countdown); // Clear any previous timer

    countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerDisplay.textContent = seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            // You can add logic here when the timer reaches 0
        }
    }, 1000);

    // Update the timer display immediately
    timerDisplay.textContent = seconds;
}



// Event listener for the "Play" button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('play-button').addEventListener('click', startGame);
});

// Event listener for the "Submit" button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-word').addEventListener('click', function() {
        var wordInput = document.getElementById('word-input').value;
        submitWord(wordInput);
    });
});

// Function to handle user input and validate word choice
// Function to handle user input and validate word choice
// Function to handle user input and validate word choice
// Function to handle user input and validate word choice
// Function to handle user input and validate word choice
// Function to handle user input and validate word choice
// Function to handle user input and validate word choice
function submitWord(word) {
    var currentWord = document.getElementById('word').innerText.toLowerCase();
    var lastTwoLetters = currentWord.slice(-1);
    var userInput = word.toLowerCase();

    // Stop the timer
    clearInterval(countdown);

    // Check if the user's word starts with the last two letters of the current word
    if (userInput.startsWith(lastTwoLetters)) {
        // Add the remaining time to the score
        var remainingTime = parseInt(document.getElementById('timer').textContent);
        score += remainingTime;

        // Reset the timer
        clearInterval(countdown);
        startTimer(30);
        rounds--;
        if (rounds > 0) {
            startRound();
        } else {
            endGame();
        }
    } else 
    {
        clearInterval(countdown);
        startTimer(30);
        rounds--;
        if (rounds > 0) {
            startRound();
        } else {
            endGame();
        }
    }
    // Update the score display
    displayScore();
}

// Function to end the game
function endGame() {
    // Hide the game board
    document.getElementById('game-board').style.display = 'none';

    // Display "You Won" message
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'You Won!';
    resultElement.style.display = 'block';

    // Display "Play Again" button
    document.getElementById('play-again-button').style.display = 'block';
}

// Event listener for the "Play Again" button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('play-again-button').addEventListener('click', function() {
        // Reset variables and start the game again
        rounds = 3;
        score = 0;
        document.getElementById('result').style.display = 'none';
        document.getElementById('play-again-button').style.display = 'none';
        startGame();
    });
});

// Function to display user's score
function displayScore() {
    // Display user's score on the screen
    document.getElementById('score').textContent = score;
}
