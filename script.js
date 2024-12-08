// Initialize variables
let score = 0;
let timeLeft = 30;
let gameInterval;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const clickButton = document.getElementById('clickButton');
const restartButton = document.getElementById('restartButton');
const instructions = document.getElementById('instructions');

// Update the score when the button is clicked
clickButton.addEventListener('click', () => {
  if (timeLeft > 0) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }
});

// Start the game timer
function startGame() {
  instructions.style.display = 'none'; // Hide instructions
  clickButton.style.display = 'block'; // Show click button
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;

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
  clickButton.style.display = 'none'; // Hide click button
  restartButton.style.display = 'block'; // Show restart button
  timerDisplay.textContent = 'Time’s up!';
  alert(`Game over! Your final score is ${score}`);
}

// Restart the game
restartButton.addEventListener('click', () => {
  restartButton.style.display = 'none'; // Hide restart button
  startGame();
});

// Initial setup
function setupGame() {
  instructions.style.display = 'block'; // Show instructions
  clickButton.style.display = 'none'; // Hide click button initially
  restartButton.style.display = 'block'; // Show restart button to start the game
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
}

// Run setup on page load
setupGame();
