document.addEventListener('DOMContentLoaded', () => {
  const monster = document.getElementById('monster');
  const scoreDisplay = document.getElementById('score');
  const timerDisplay = document.getElementById('timer');
  const startButton = document.getElementById('startButton');
  let score = 0;
  let timeLeft = 30;
  let timerInterval;

  function moveMonster() {
    const x = Math.random() * (window.innerWidth - monster.offsetWidth);
    const y = Math.random() * (window.innerHeight - monster.offsetHeight);

    monster.style.left = `${x}px`;
    monster.style.top = `${y}px`;
  }

  function updateTimer() {
    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
    } else {
      alert('ゲームオーバー！ スコア: ' + score);
      clearInterval(timerInterval);
      monster.removeEventListener('click', handleMonsterClick);
      startButton.disabled = false; // ゲーム終了後にスタートボタンを有効にする
    }
  }

  function handleMonsterClick() {
    score++;
    scoreDisplay.textContent = score;
    moveMonster();
  }

  function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    moveMonster();
    monster.addEventListener('click', handleMonsterClick);
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true; // ゲーム中はスタートボタンを無効にする
  }

  startButton.addEventListener('click', startGame);
});
