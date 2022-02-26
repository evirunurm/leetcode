/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
   if (!strs.length) return "";


	for (var p = 1; p < strs[0].length + 1; p++) {
		count = 0;
		for (var i = 0; i < strs.length; i++) {
			if (strs[0].substring(0, p) == strs[i].substring(0, p)) {
				count++
				if (count == strs.length) prefix = strs[0].substring(0, p)

			}
		}
	}
	return prefix;
};