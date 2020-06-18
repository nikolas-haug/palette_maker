const paletteSquares = document.querySelectorAll('.palette');
const paletteButton = document.querySelector('.paletteBtn');
const colorSliders = document.querySelectorAll('.color-slider');
const sliderPalette = document.querySelector('.slider-palette');

const hueValue = document.querySelector('#hue-value');
const saturationValue = document.querySelector('#saturation-value');
const lightnessValue = document.querySelector('#lightness-value');

let hue = '240';
let saturation = '50%';
let lightness = '50%';

sliderPalette.style.backgroundColor = `hsl(${hue}, ${saturation}, ${lightness})`;
document.querySelector('#hue').setAttribute('value', hue);
document.querySelector('#saturation').setAttribute('value', saturation);
document.querySelector('#lightness').setAttribute('value', lightness);

hueValue.textContent = hue;
saturationValue.textContent = saturation;
lightnessValue.textContent = lightness;

paletteSquares.forEach(item => item.addEventListener('click', lockColor));
paletteButton.addEventListener('click', updateColors);

colorSliders.forEach(slider => slider.addEventListener('input', (e) => {
    console.log(e.target.value);
    if(e.target.id === 'hue') {
        hue = e.target.value;
        hueValue.textContent = hue;
    } else if(e.target.id === 'saturation') {
        saturation = e.target.value + '%';
        saturationValue.textContent = saturation;
    } else if(e.target.id === 'lightness') {
        lightness = e.target.value + '%';
        lightnessValue.textContent = lightness;
    }
    sliderPalette.style.backgroundColor = `hsl(${hue}, ${saturation}, ${lightness})`;
}));

function randomNum(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

function randomHexColor() {
    return '#' + Math.random().toString(16).substr(-6);
}

function randomHSLColor() {
    let h = randomNum(360);
    let s = randomNum(100);
    let l = randomNum(100);

    return `hsl(${h}, ${s}%, ${l}%)`;
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
            // let color = randomHexColor();
            let color = randomHSLColor();
            square.style.backgroundColor = color;
            square.textContent = color;
        }
    });
}

updateColors();