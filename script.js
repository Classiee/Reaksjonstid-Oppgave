var selectedLampIndex = Math.floor(Math.random() * 25);
const e = new Error('Wrong lamp! Try again!');
let i = 0;
let html = '';

var startTime;
var finishTime;
var spentMilliSeconds;
var spentSeconds; 


html = document.getElementById("app").innerHTML;
document.getElementById("app").innerHTML = html + `


<br>
<br>
<br>
<div><h1>Klikk på den sirkelen med lys eller ikke, opp til deg</h1></div>
<div id="circles"></div>`;




function updateView() {
    const circlesContainer = document.getElementById('circles');
    circlesContainer.innerHTML = '';

    for (let i = 0; i < 25; i++) {
        const circle = document.createElement('div');
        circle.classList.add('lamp');
        if (i === selectedLampIndex) {
            circle.classList.add('lightOn');
            startTime = new Date().getTime();
            circle.onclick = function() {
                controller(i);
                }; 
            } else {
            circle.onclick = function() {
                showError();
            };       
        }
        circlesContainer.appendChild(circle);
    }
}

function lightOn() {
    document.getElementByClassName('lamp lightOn').addEventListener('click', controller);
}

function showError() {
    const popupDiv = document.createElement('div')
    popupDiv.classList.add('popupDiv');
    popupDiv.innerHTML = 
    `<div id=h2><h2>Feil sirkel! Prøv igjen!</h2></div>`;
    document.body.appendChild(popupDiv);
    setTimeout(() => {
        document.body.removeChild(popupDiv);
    }, 2000);
}

function showTime() {
    finishTime = new Date().getTime();
    spentMilliseconds = Math.floor(finishTime - startTime);
    spentSeconds = spentMilliseconds / 1000;
    
    const popupDivCorrect = document.createElement('div')
    popupDivCorrect.classList.add('popupDivCorrect');
    popupDivCorrect.innerHTML = 
    `<div id=h3><p>Du brukte ${spentSeconds} sekunder på å klikke på riktig sirkel!</p></div>`;
    document.body.appendChild(popupDivCorrect);
    setTimeout(() => {
        document.body.removeChild(popupDivCorrect);
    }, 2000);
}

function controller() {
    
    showTime();
    
    selectedLampIndex = Math.floor(Math.random() * 25);
    
    updateView();
}

updateView();