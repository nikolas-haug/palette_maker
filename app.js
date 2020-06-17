const paletteSquares = document.querySelectorAll('.palette');
const paletteButton = document.querySelector('.paletteBtn');

paletteSquares.forEach(item => item.addEventListener('click', lockColor));
paletteButton.addEventListener('click', updateColors);

function randomHexColor() {
    return '#' + Math.random().toString(16).substr(-6);
}

function lockColor() {
    this.setAttribute('data-locked', 'true');
    let newItem = document.createElement('div');
    newItem.classList.add('test__item');
    newItem.style.backgroundColor = this.style.backgroundColor;
    document.querySelector('.selected').appendChild(newItem);
}

function updateColors() {
    paletteSquares.forEach(square => {
        if(!square.hasAttribute('data-locked')) {
            let color = randomHexColor();
            square.style.backgroundColor = color;
            square.textContent = color;
        }
    });
}

updateColors();