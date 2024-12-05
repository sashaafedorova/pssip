const mouseButton = document.getElementById('mouseButton');
mouseButton.addEventListener('click', () => {
    mouseButton.textContent = 'Кнопка нажата!';
});


const keyboardInput = document.getElementById('keyboardInput');
const keyCodeDisplay = document.getElementById('keyCodeDisplay');

keyboardInput.addEventListener('keydown', (event) => {
    keyCodeDisplay.textContent = `Код клавиши: ${event.key}`;
});


const draggableImage = document.getElementById('draggableImage');
const dropZone = document.getElementById('dropZone');

draggableImage.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'draggedImage');
});

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});


dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.textContent = 'Добавлено!';
});


const pointerBox = document.getElementById('pointerBox');

pointerBox.addEventListener('pointerenter', () => {
    pointerBox.style.backgroundColor = 'lightgreen';
});

pointerBox.addEventListener('pointerleave', () => {
    pointerBox.style.backgroundColor = 'lightblue';
});



const scrollDisplay = document.getElementById('scrollDisplay');

window.addEventListener('scroll', () => {
    scrollDisplay.textContent = `Позиция прокрутки: ${window.scrollY}`;
});



const timeDisplay = document.getElementById('timeDisplay');

function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000); 