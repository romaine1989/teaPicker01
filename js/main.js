var teamaker = []
teamaker[0] = "James Russell";
teamaker[1] = "Sam Ager";
teamaker[2] = "Ed Earle";
teamaker[3] = "Ela Good";
teamaker[4] = "Ian Roberts";
teamaker[5] = "Romaine Smith";
teamaker[6] = "Melissa Wrensch";
teamaker[7] = "Dave Wonnacott";
teamaker[8] = "Kirsten Gifford";
teamaker[9] = "Ian Bates";
teamaker[10] = "Karl Davey";
teamaker[11] = "Matt Hardy";
teamaker[12] = "Pete Brown";
teamaker[13] = "Oli Larner";
teamaker[14] = "Dan Redgewell";

function teamakerFunction() {
	var randomName = Math.floor(Math.random()*(teamaker.length));
	document.getElementById('teaMaker').innerHTML = teamaker[randomName];
}
