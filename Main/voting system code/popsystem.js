function setup() {
	console.log("STARTING POP SCRIPT");
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

function POP(name, ideology) {
	this.name = name;
	this.ideology = ideology;
	totalPOPs = totalPOPs + 1;
	popsArray.push(name);
}

for (let i = 0; i < 5; i++) {
	POP("fascistPOP".concat(fascistPOPs), "Fascism")
	fascistPOPs = fascistPOPs + 1;
}

for (let i = 0; i < 5; i++) {
	POP("communistPOP".concat(communistPOPs), "Communism")
	communistPOPs = communistPOPs + 1;
}

for (let i = 0; i < 11; i++) {
	POP("liberalPOPs".concat(liberalPOPs), "Liberalism")
	liberalPOPs = liberalPOPs + 1;
}

for (let i = 0; i < 10; i++) {
	POP("conservativePOPs".concat(conservativePOPs), "Conservatism")
	conservativePOPs = conservativePOPs + 1;
}

let time = 0;
let yearlyCheck = 1;
const button = document.getElementById("startAndStop");
const timeText = document.getElementById("timeID");
let myInterval = -1;
let updateTime = 125;
button.addEventListener("click", function(event) {
	if (myInterval == -1) {
		button.innerHTML = "Pause";
		myInterval = setInterval(function() {
			time++;
			timeText.innerHTML = "Day: ".concat(time);
		}, 125)
	} else {
		button.innerHTML = "Start";
		clearInterval(myInterval);
		myInterval = -1;
	}
	showText("timeID", "Day: ".concat(time));
	console.log("The time is: ".concat(time));
});

console.log(popsArray[0]);
console.log("Amount of POPs: ".concat(totalPOPs));

console.log("Fascist POPs: ".concat(fascistPOPs));
console.log("Communist POPs: ".concat(communistPOPs));
console.log("Liberal POPs: ".concat(liberalPOPs));
console.log("Conservative POPs: ".concat(conservativePOPs));