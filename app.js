
// grab the main container 
const grid__container = document.querySelector('.grid__container');
const mole = document.querySelector(".mole");

const timeLeft = document.querySelector("#time__left");
const score = document.querySelector("#score");


let result = 0;
let hitPosition;
let timerId = null;
score.textContent = result;
timeLeft.textContnet = 10;
let currentTime = 10;

function createVertexes() {
    for (let i = 0; i < 9; i++) {
        const grid = document.createElement("div");
        grid.setAttribute('class', "vertex");
        grid.setAttribute('id', i+1);
        grid__container.appendChild(grid);

    }
}

createVertexes();
// const vertexes = grid__container.childNodes;

const vertexes = document.querySelectorAll('.vertex');

function randomSquare() {
    vertexes.forEach(vertex => {
        vertex.classList.remove('mole')
        console.log(vertex);
    })

    let randomVertex = vertexes[Math.floor(Math.random() * 9)]
    randomVertex.classList.add('mole');
    hitPosition = randomVertex.id;

}

vertexes.forEach(vertex => {
    vertex.addEventListener('click', ()=> {
        if (vertex.id === hitPosition) {
            result += 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    
    timerId = setInterval(randomSquare, 1000);
}


randomSquare();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over! Your final score is ' + result)
    } 
}

let countDownTimerId = setInterval(countDown, 1000);
moveMole();