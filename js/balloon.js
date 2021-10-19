
// Model:
var gballoons = [
    { id: 1, bottom: 0, speed: 12 },
    { id: 2, bottom: 0, speed: 14 },
    { id: 3, bottom: 0, speed: 13 },
    { id: 4, bottom: 0, speed: 20 },
    { id: 5, bottom: 0, speed: 18 }
];

var gIntervalId;

function init() {
    renderballoons();
}


function startRace() {
    console.log('start!');
    gIntervalId = setInterval(moveballoons, 500);
    // moveballoons();
}


function moveballoons() {

    // Dom:
    var elballoons = document.querySelectorAll('.balloon');
    // console.log('elballoons', elballoons);

    for (var i = 0; i < gballoons.length; i++) {
        // Model:
        var balloon = gballoons[i];

        // Dom:
        var elballoon = elballoons[i];

        balloon.bottom += balloon.speed;

        elballoon.style.bottom = balloon.bottom + 'px';

        if (balloon.bottom > 650) {
            clearInterval(gIntervalId);
        }
    }
}


function balloonClicked(balloonIdx) {
    var audioPop = new Audio('sound/pop.wav');
    audioPop.play();

    var elBalloons = document.querySelectorAll('.balloon');

    // elballoons[balloonIdx].style.display = 'none';
    balloonIdx.style.transition = 'opacity 1.5s';
    balloonIdx.style.opacity = 0;

}


function renderballoons() {
    var strHTML = '';
    for (var i = 0; i < gballoons.length; i++) {
        strHTML += '<div class="balloon balloon' + (i + 1) +
            '"  onclick="balloonClicked(this)"></div>';
    }

    var elSky = document.querySelector('.sky');
    elSky.innerHTML = strHTML;
}
