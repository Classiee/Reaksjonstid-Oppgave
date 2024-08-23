var selectedLampIndex = Math.floor(Math.random() * 25);
const e = new Error('Wrong lamp! Try again!');
let i = 0;

function updateView() {
    const circlesContainer = document.getElementById('circles');
    circlesContainer.innerHTML = '';

    for (let i = 0; i < 25; i++) {
        const circle = document.createElement('div');
        circle.classList.add('lamp');
        if (i === selectedLampIndex) {
            circle.classList.add('lightOn'); 
        }
        
        circle.onclick = function() {
            controller(i);
        };
        
        circlesContainer.appendChild(circle);
         }
    }

function lightOn() {
    document.getElementByClassName('lamp lightOn').addEventListener('click', controller);
}

function controller() {
    selectedLampIndex = Math.floor(Math.random() * 25);
    updateView();
}

updateView();