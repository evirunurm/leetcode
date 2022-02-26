/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    	backwards = (x + "")
            .split("")
            .reverse()
            .join("");
	return backwards == x ? true : false; 
};