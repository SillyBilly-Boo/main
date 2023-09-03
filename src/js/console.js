// Silly Thing

let credit = {
	description: [
        "✨Trans Rights are human rights!✨",
        "♡ Black lives will always matter! ♡",
		"Have a lovely day.",
		"Treat yourself well. Drink some water.",
        "🤡💖🤡💖🤡💖🤡"
    ]
}

if (credit != null){
	console.group("Lookin' under the hood, silly billy??")
    for (let z = 0; z < credit.description.length; z++) {
		console.log(credit.description[z])
    }
	console.groupEnd()
}
