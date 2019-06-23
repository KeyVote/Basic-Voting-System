//Make a object for every party so they have votes

function Party(name, ideology, votes) {
		this.name = name;
		this.ideology = ideology;
		this.votes = votes;
	}

let fascistParty = new Party("The fascist party", "Fascism", 0)
let communistParty = new Party("The communist party", "Communism", 0)
let democraticParty = new Party("The democratic party", "Center-left", 0)
let republicanParty = new Party("The republican party", "Center-right", 0)

function voting() {
	let parties = [fascistParty, communistParty, democraticParty, republicanParty]
	let winningParty

	for (const party of parties) {
		party.votes = Math.floor((Math.random() * 1000) + 1)
		console.log(party.votes)
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

	console.log("There were a total of ".concat(totalVotes, " votes!"))

	for (const party of parties) {
		let partyPercentage = onePercent * party.votes
		console.log(party.name.concat(" won ", partyPercentage.toFixed(2), " percent of the vote!"))
	}

	console.log(winningParty.name.concat(" got ", winningParty.votes, " votes and has won the election!"))
}

voting()