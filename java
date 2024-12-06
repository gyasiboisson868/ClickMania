let score = 0;
let timeLeft = 30;
let gameInterval;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const clickButton = document.getElementById('clickButton');
const restartButton = document.getElementById('restartButton');

// Update the score when the button is clicked
clickButton.addEventListener('click', () => {
  if (timeLeft > 0) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }
});

// Start the game timer
function startGame() {
  gameInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      endGame();
    }
  }, 1000);
}

// End the game
function endGame() {
  clickButton.style.display = 'none';
  restartButton.style.display = 'block';
  timerDisplay.textContent = 'Time’s up!';
  alert(`Game over! Your final score is ${score}`);
}

// Restart the game
restartButton.addEventListener('click', () => {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Score: 0`;
  timerDisplay.textContent = `Time Left: 30s`;
  clickButton.style.display = 'block';
  restartButton.style.display = 'none';
  startGame();
});

// Start the game on page load
startGame();
