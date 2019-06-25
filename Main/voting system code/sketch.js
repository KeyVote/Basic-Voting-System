function setup() {
	noCanvas()
}

console.log(totalPOPs);
console.log(popsArray);

function showText(id, text) {
	input = document.getElementById(id);
	input.innerText = text
}

function Party(name, ideology, votes, pFirstName, pLastName) {
	this.name = name;
	this.ideology = ideology;
	this.votes = votes;
	this.pFirstName = pFirstName;
	this.pLastName = pLastName;
}

let firstNames = ["Antonio", "James", "Harald", "Luis", "Nicholas", "Marlyn", "Jessica", "Jonas", "Mary",
"Vladimir", "Joseph", "Gregor", "George", "Martin", "Maria", "Catherine", "Julia", "Tony",
"Marcus", "Hillary", "Carl", "Karl", "José", "Jacob", "Harry", "John", "Robert",
"Linoln", "Adolf", "Gustaf", "Isabella", "Emily", "Joe", "Thomas", "William", "Villiam"];

let lastNames = [" Van Holland", " O'Brien", " Andersson", " Di Clara", " Smith", " Roadsend", " Steelneck", " Johnsson", " Websky",
" Brown", " Putin", " Sköberg", " Berghøg", " Nowak", " Silva", " Matei", " Ivanov", " Baláž",
" Kolar", " García", " González", " Keller", " Kaya", " White", " Ozols", " Hoti", " De Luca",
" Murphy", " Schmidt", " Kapanadze", " Dubois", " Nyman", " Mäkelä", " Petersen", " Saar", " Kloö"];


let fascistParty = new Party("The fascist party", "Fascism", 0, firstNames[Math.floor((Math.random() * 32) + 1)], lastNames[Math.floor((Math.random() * 32) + 1)]);
let communistParty = new Party("The communist party", "Communism", 0, firstNames[Math.floor((Math.random() * 32) + 1)], lastNames[Math.floor((Math.random() * 32) + 1)]);
let liberalParty = new Party("The liberal party", "Liberalism", 0, firstNames[Math.floor((Math.random() * 32) + 1)], lastNames[Math.floor((Math.random() * 32) + 1)]);
let conservativeParty = new Party("The conservative party", "Consvervatism", 0, firstNames[Math.floor((Math.random() * 32) + 1)], lastNames[Math.floor((Math.random() * 32) + 1)]);
let parties = [fascistParty, communistParty, liberalParty, conservativeParty];

function voting() {
	let winningParty;
	let totalVotes = 0;

	//for (const party of parties) {
		//party.votes = Math.floor((Math.random() * 1000) + 1)
	//}
	fascistParty.votes = fascistPOPs;
	communistParty.votes = communistPOPs;
	liberalParty.votes = liberalPOPs;
	conservativeParty.votes = conservativePOPs;

	for (const party of parties) {
		totalVotes = totalVotes + party.votes
	}

	let onePercent = 100 / totalVotes
	const mostVotes = Math.max(fascistParty.votes, communistParty.votes, liberalParty.votes, conservativeParty.votes)

	for (const party of parties) {
		if (party.votes == mostVotes) {
			winningParty = party
		}
	}

	console.log("There were a total of ".concat(totalVotes, " votes!"));

	for (const party of parties) {
		let partyPercentage = onePercent * party.votes
		console.log(party.name.concat(" won ", partyPercentage.toFixed(2), " percent of the vote!"));
	}

	console.log(winningParty.name.concat(" got ", winningParty.votes, " votes and has won the election!"));

	showText("WinningParty", "The party that won: ".concat(winningParty.name, "!"));
	showText("WinningPercentage", "The winning party's percentage of the vote: ".concat((onePercent * winningParty.votes).toFixed(2), "%"));
	showText("WinningIdeology", "The winning party's ideology: ".concat(winningParty.ideology, "!"));
	showText("WinningPartyLeader", "The winning party's leader: ".concat(winningParty.pFirstName,  winningParty.pLastName, "!"));
	showText("totalPopulation", "The total population is: ".concat(totalPOPs, " people!"));
}

voting()