function setup() {
  let fasPartyVotes = 0;
  let comPartyVotes = 0;
  let totalVotes = 0;
  let winningParty = "";
  let winningPartyVotes = 0;
}

function voting() {
	fasPartyVotes = Math.floor((Math.random() * 1000) + 1)
	comPartyVotes = Math.floor((Math.random() * 1000) + 1)
	totalVotes = fasPartyVotes + comPartyVotes
	onePercent = 100 / totalVotes

	if (fasPartyVotes > comPartyVotes) {
		console.log("The fascist party has won! With a total of ".concat(fasPartyVotes, " votes!"))
	} else {
		console.log("The communist party has won! With a total of ".concat(comPartyVotes, " votes!"))
	}
	fasPartyVotesPercent = (onePercent * fasPartyVotes).toFixed(2)
	comPartyVotesPercent = (onePercent * comPartyVotes).toFixed(2)

	console.log("There were a total of ".concat(totalVotes, " votes!"))
	console.log("The fascist party won ".concat(fasPartyVotesPercent, " percent of the vote"))
	console.log("The communist party won ".concat(comPartyVotesPercent, " percent of the vote"))
}

voting()