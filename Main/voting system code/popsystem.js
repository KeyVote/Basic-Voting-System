function setup() {
	console.log("STARTING POP SCRIPT");
	console.log("TEST! " + "TEST!")
}

let totalPOPs = 0;
let popsArray = [];


let fascistPOPs = 0;
let communistPOPs = 0;
let liberalPOPs = 0;
let conservativePOPs = 0;

function showText(id, text) {
	input = document.getElementById(id);
	input.innerText = text;
}

let reproductiveChance = 1;
let reproductiveThresholdChance = 100;

function createPOP(name, amountOfType, ideology, reproductiveValue, reproductiveThreshold) {
	this.name = name + amountOfType;
	this.ideology = ideology;
	this.reproductiveValue = reproductiveValue;
	if (this.reproductiveThreshold < 75) {
			this.reproductiveThreshold = 75;
	} else {
		this.reproductiveThreshold = reproductiveThreshold;
	}

	this.reproduce = function() {
		let POP = new createPOP(name + amountOfType, amountOfType, ideology, Math.floor(Math.random() * reproductiveChance) + 1, Math.floor(Math.random() * reproductiveThresholdChance) + 1)
		if (POP.reproductiveThreshold < 75) {
			POP.reproductiveThreshold = 75;
		}

		popsArray.push(POP)
		totalPOPs++;
		if (POP.ideology == "Fascism") {
			fascistPOPs++;
		} else if (POP.ideology == "Communism") {
			communistPOPs++;
		} else if (POP.ideology == "Liberalism") {
			liberalPOPs++;
		} else {
			conservativePOPs++;
		}
		totalPOPs = totalPOPs + 1;
		console.log(POP.reproductiveValue)
	};
}

for (let i = 0; i < 5; i++) {
	let POP = new createPOP("fascistPOP", fascistPOPs, "Fascism", Math.floor(Math.random() * reproductiveChance) + 1, Math.floor(Math.random() * reproductiveThresholdChance) + 1);
	popsArray.push(POP)
	fascistPOPs = fascistPOPs + 1;
	totalPOPs++;
}

for (let i = 0; i < 5; i++) {
	let POP = new createPOP("communistPOP", communistPOPs, "Communism", Math.floor(Math.random() * reproductiveChance) + 1, Math.floor(Math.random() * reproductiveThresholdChance) + 1);
	popsArray.push(POP)
	communistPOPs = communistPOPs + 1;
	totalPOPs++;
}

for (let i = 0; i < 11; i++) {
	let POP = new createPOP("liberalPOPs", liberalPOPs, "Liberalism", Math.floor(Math.random() * reproductiveChance) + 1, Math.floor(Math.random() * reproductiveThresholdChance) + 1);
	popsArray.push(POP)
	liberalPOPs = liberalPOPs + 1;
	totalPOPs++;
}

for (let i = 0; i < 10; i++) {
	let POP = new createPOP("conservativePOPs", conservativePOPs, "Conservatism", Math.floor(Math.random() * reproductiveChance) + 1, Math.floor(Math.random() * reproductiveThresholdChance) + 1);
	popsArray.push(POP)
	conservativePOPs = conservativePOPs + 1;
	totalPOPs++;
}

let time = 0;
let yearlyCheck = 1;
const button = document.getElementById("startAndStop");
const timeText = document.getElementById("timeID");
let myInterval = -1;
let updateTime = 125;
const updateEvery5Days = 5;
let every5DayCheck = 1;

showText("totalPopulation", "The total population is: " + popsArray.length + " people!")
button.addEventListener("click", function(event) {
	if (myInterval == -1) {
		button.innerHTML = "Pause";
		myInterval = setInterval(function() {
			time++;
			timeText.innerHTML = "Day: " + time;
			if (time == updateEvery5Days * every5DayCheck) {
				every5DayCheck++;

				for (const POP of popsArray) {
					if (POP.reproductiveValue > POP.reproductiveThreshold) {
						POP.reproductiveValue = 0;
						console.log("reproducing!")
						POP.reproduce()
						showText("totalPopulation", "The total population is: " + popsArray.length + " people!")
						console.log("TOTAL POPS ARE: " + popsArray.length)
					} else {
						POP.reproductiveValue++;
					}
				} 
			}
		}, 125)
	} else {
		button.innerHTML = "Start";
		clearInterval(myInterval);
		myInterval = -1;
	}
	showText("timeID", "Day: " + time);
	console.log("The time is: " + time);
});

console.log();
console.log("Amount of POPs: " + totalPOPs);

console.log("Fascist POPs: " + fascistPOPs);
console.log("Communist POPs: " + communistPOPs);
console.log("Liberal POPs: " + liberalPOPs);
console.log("Conservative POPs: " + conservativePOPs);