/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let array = Array.from(s);
	let stack = [];
	let info = [{
		open: "(",
		close: ")"
	}, {
		open: "[",
		close: "]"
	}, {
		open: "{",
		close: "}"
	}];
	let valid = true;
	let couple;

	for (var i = 0; i < array.length; i++) {
		couple = info.find(o => o?.open == array[i] || o?.close == array[i]);
		if (array[i] == couple?.open && array.findIndex((item) => item == couple.close) > -1) {
			stack.unshift(array[i]);
		} else if (stack[0] == couple?.open) {
			stack.shift();
		} else {
				return false;
		}
	}
	if (stack.length > 0) {
		valid = false;
	}
	return valid;
};