const startGame = document.querySelector('.startGame')

let startGameHandler = () => {
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
            var petrolRemainingContainer = document.createElement('div');
            petrolRemainingContainer.style.marginLeft = "1rem"
            petrolRemainingContainer.innerHTML = `Move ${i} - car at ${sum}, petrol remaining ${startPetrol} <br>`;
            document.body.appendChild(petrolRemainingContainer);
            i++;
            if (startPetrol == 0) {
                var gamerOver = document.createElement('div');
                gamerOver.style.marginLeft = "1rem"
                gamerOver.innerHTML = `Move ${i} - car at ${sum}, petrol remaining ${startPetrol}, game over <br>`;
                document.body.appendChild(gamerOver);
            }
        }
    }

    document.querySelector('.game-started').innerHTML = "Game Started"
    document.querySelector(".petrol").innerHTML = `Petrol pumps generated &nbsp; ${petrolBunkGenerator}`;
    onView();
}

startGame.addEventListener('click', startGameHandler)