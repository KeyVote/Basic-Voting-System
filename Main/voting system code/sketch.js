function setup() {
	noCanvas();
}

function Party(name, ideology, votes, partyLeader) {
		this.name = name;
		this.ideology = ideology;
		this.votes = votes;
		this.partyLeader = partyLeader;
}

let fascistParty = new Party("The fascist party", "Fascism", 0, "Julius Di Vanci");
let communistParty = new Party("The communist party", "Communism", 0, "Vladimir Trotsky");
let democraticParty = new Party("The democratic party", "Liberalism", 0, "Anna Devago");
let republicanParty = new Party("The republican party", "Consvervatism", 0, "Luis Lint");

function voting() {
	let parties = [fascistParty, communistParty, democraticParty, republicanParty];
	let winningParty;

	for (const party of parties) {
		party.votes = Math.floor((Math.random() * 1000) + 1)
		console.log(party.votes);
	}

	let totalVotes = 0
	for (const party of parties) {
		totalVotes = totalVotes + party.votes
	}

	let onePercent = 100 / totalVotes
	const mostVotes = Math.max(fascistParty.votes, communistParty.votes, democraticParty.votes, republicanParty.votes)

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

	function showText(id, text) {
		input = document.getElementById(id);
		input.innerText = text
	}
	showText("WinningParty", "The party that won: ".concat(winningParty.name, "!"))
	showText("WinningPercentage", "The winning party's percentage of the vote: ".concat((onePercent * winningParty.votes).toFixed(2), "%"))
	showText("WinningIdeology", "The winning party's ideology: ".concat(winningParty.ideology, "!"))
	showText("WinningPartyLeader", "The winning party's leader: ".concat(winningParty.partyLeader, "!"))
}

voting()