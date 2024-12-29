window.onload = function () {
    startMenu();
};

function startMenu() {
    let startButton = document.getElementById("startButton");

    startButton.addEventListener("click", () => {
        startGame();
    });
}

function startGame() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("game-container").style.display = "flex";
    gameLogic();
}

function gameLogic() {
    let randomNumber = Math.ceil(1 + Math.random() * 99); // Generate random number
    let attempts = 0;

    console.log("Random Number (for testing):", randomNumber); // Remove in production

    document.getElementById("submitGuess").onclick = function () {
        let guessInput = document.getElementById("guessInput");
        let feedback = document.getElementById("feedback");
        let guessNumber = parseInt(guessInput.value, 10);

        if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
            feedback.textContent = "Please enter a valid number between 1 and 100.";
            feedback.style.color = "red";
            guessInput.value = ""; // Clear the input field
            return;
        }

        attempts++; // Increment attempts
        document.getElementById("attempts").textContent = attempts; // Update attempts on screen

        let difference = Math.abs(randomNumber - guessNumber);

        if (guessNumber === randomNumber) {
            feedback.textContent = "🎉 Congratulations! You guessed the correct number!";
            feedback.style.color = "green";
            document.getElementById("restartGame").style.display = "block";
        } else if (difference <= 3) {
            feedback.textContent = "🔥 Very close! You're just off by a few numbers.";
            feedback.style.color = "orange";
        } else if (difference <= 10) {
            feedback.textContent = "😊 Getting warmer! But you're still off.";
            feedback.style.color = "blue";
        } else if (guessNumber < randomNumber) {
            feedback.textContent = "❄️ Too low! Try guessing higher.";
            feedback.style.color = "purple";
        } else {
            feedback.textContent = "❄️ Too high! Try guessing lower.";
            feedback.style.color = "purple";
        }

        guessInput.value = ""; // Clear the input field for the next guess
    };

    document.getElementById("restartGame").onclick = function () {
        location.reload(); // Reload the page to restart the game
    };
}
