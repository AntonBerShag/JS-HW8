const bug = document.getElementById('bug');
const gameContainer = document.getElementById('game-container');
const startButton = document.getElementById('start-button');
const gameDuration = 10000; // Длительность игры в миллисекундах (например, 10 секунд)
let score = 0;
startGame();

function moveBug() {
    // Генерируем случайные координаты для перемещения жука
    const maxX = gameContainer.clientWidth - bug.clientWidth;
    const maxY = gameContainer.clientHeight - bug.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Устанавливаем новые координаты для жука
    bug.style.left = randomX + 'px';
    bug.style.top = randomY + 'px';
}

function startGame() {
    score = 0;
    moveBug();
    bug.style.display = 'block';

    // Запускаем таймер для перемещения жука каждые секунду
    const bugMoveInterval = setInterval(moveBug, 1000);

    // Завершаем игру после указанной длительности
    setTimeout(() => {
        clearInterval(bugMoveInterval);
        bug.style.display = 'none';
        alert(`Поздравляем! Вы поймали ${score} жуков.`);
    }, gameDuration);
}

bug.addEventListener('click', () => {
    score++;
    moveBug();
});

startButton.addEventListener('click', startGame);
