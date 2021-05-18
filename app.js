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

let petrolBunkGenerator = randomNumberArray.sort().join(', ');

let carSteps = (min, max) => {
    let carStep = Math.random() * (max - min) + min
    return Math.floor(carStep)
}

var sum = 0;
var i = 1;

console.log(petrolBunkGenerator)
while (!(startPetrol <= 0)) {
    if (sum >= 100) {
         console.log("win")
        break;
    } else {
        var carStepsNumber = carSteps(1, 6)
        startPetrol = startPetrol - (carStepsNumber * 2);
        sum = sum + carStepsNumber;
        if (petrolBunkGenerator.includes(sum)) {
            startPetrol = startPetrol + 30;
        }
        console.log(`Move ${i} - car at ${sum}, petrol remaining ${startPetrol}`)
        i++;
    }
}

let startGameHandler = () => {
    document.querySelector('.game-started').innerHTML = "Game Started"
    // document.querySelector(".petrol").innerHTML = `Petrol pumps generated &nbsp; ${petrolBunkGenerator}`;
}

startGame.addEventListener('click', startGameHandler)