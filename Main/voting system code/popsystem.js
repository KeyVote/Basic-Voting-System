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

let day = 1;
let yearlyCheck = 1;
let electionYear = 2019;
let electionYearMultiplier = 1;

const button = document.getElementById("startAndStop");
const dayText = document.getElementById("timeID");

let myInterval = -1;

let updateTime = 125;
const updateEvery5Days = 5;
let every5DayCheck = 1;

const monthsArray = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];
let month = 1;
let monthShower = 0;
let monthDays = 31;
let year = 2019;
let leapYearCounter = 3;
let leapYearCheck = 4;

showText("totalPopulation", "The total population is: " + popsArray.length + " people!")
button.addEventListener("click", function(event) {
	if (myInterval == -1) {
		button.innerHTML = "Pause";
		myInterval = setInterval(function() {
			day++;
			dayText.innerHTML = "Date: " + day + " " + monthsArray[monthShower] + ", " + year;

			if (day == monthDays) {
				day = 1;
				month++;
				monthShower++;

				if (month == 13) {
					month = 1;
					monthShower = 0;
					year++;
					leapYearCounter++;
				}

				if (month == 2) {
					if (leapYearCounter == 4) {
					monthDays = monthDays - 2;
					} else {
						monthDays = monthDays - 3;
					}
				} else if (month == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
					monthDays = 31;
				} else {
					monthDays = 30;
				}
				for (const POP of popsArray) {
					if (POP.reproductiveValue > POP.reproductiveThreshold) {
						POP.reproductiveValue = 0;
						POP.reproduce()
						showText("totalPopulation", "The total population is: " + popsArray.length + " people!")
					} else {
						POP.reproductiveValue++;
					}
				} 

				if (year == electionYear + (1 * electionYearMultiplier) && month == 1 && day == 1) {
					electionYearMultiplier++;
					voting()
				}
			}
		}, 125)
	} else {
		button.innerHTML = "Start";
		clearInterval(myInterval);
		myInterval = -1;
	}
	showText("dayID", "Date: " + day + " " + monthsArray[monthShower] + ", " + year);
});

console.log();
console.log("Amount of POPs: " + totalPOPs);

console.log("Fascist POPs: " + fascistPOPs);
console.log("Communist POPs: " + communistPOPs);
console.log("Liberal POPs: " + liberalPOPs);
console.log("Conservative POPs: " + conservativePOPs);