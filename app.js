const startGame = document.querySelector('.startGame')
var carMileage = 0.5;
var startPetrol = 50;

let petrolBunkNumber = (min, max) => {
    let petrolBunk = Math.random() * (max - min) + min
    return Math.floor(petrolBunk)
}

let randomNumberArray = [];

for (let i = 1; i <= 6; i++) {
    let num = petrolBunkNumber(1, 100)
    randomNumberArray.push(num)
}

var petrolBunkGenerator = randomNumberArray.sort();

let carSteps = (min, max) => {
    let carStep = Math.random() * (max - min) + min
    return Math.floor(carStep)
}

var sum = 0;
var i = 1;
var carStepsNumber;

function onView() {
    while (!(startPetrol <= 0)) {

        if (startPetrol <= 12) {
            carStepsNumber = carSteps(1, (startPetrol / 2))
        } else {
            carStepsNumber = carSteps(1, 6)
        }
        sum = sum + carStepsNumber;
        startPetrol = startPetrol - (carStepsNumber * 2);
        if (petrolBunkGenerator.includes(sum)) {
            startPetrol = startPetrol + 30;
        }
        document.body.innerHTML += `Move ${i} - car at ${sum}, petrol remaining ${startPetrol} <br>`;
        i++;
        if (startPetrol == 0) {
            document.body.innerHTML += `Move ${i} - car at ${sum}, petrol remaining ${startPetrol}, game over <br>`;
        }
    }
}

let startGameHandler = () => {
    document.querySelector('.game-started').innerHTML = "Game Started"
    document.querySelector(".petrol").innerHTML = `Petrol pumps generated &nbsp; ${petrolBunkGenerator}`;
    onView();
}

startGame.addEventListener('click', startGameHandler)