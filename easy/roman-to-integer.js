/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
let number = 0;
	const symbols = [{
		letter: "M",
		number: 1000
	}, {
		letter: "D",
		number: 500
	}, {
		letter: "C",
		number: 100
	}, {
		letter: "L",
		number: 50
	}, {
		letter: "X",
		number: 10
	}, {
		letter: "V",
		number: 5
	}, {
		letter: "I",
		number: 1
	}];
	for (var i = 0; i < s.length; i++) {
		if (symbols.find(symbol => symbol.letter == s[i]).number >= symbols.find(symbol => symbol.letter == s[i + 1])?.number || !s[i + 1]) {
			number += symbols.find(symbol => symbol.letter == s[i]).number;
		} else {
			number -= symbols.find(symbol => symbol.letter == s[i]).number;
		}
	}
	return number;
};