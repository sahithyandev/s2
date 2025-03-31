const specialWords = ["of", "and"];
/**
    @param {string} text
*/
export function hyphenCaseToTitleCase(text) {
	if (typeof text === "undefined") return "undefined";
	if (text.length === 0) return text;
	const words = text.split("-");
	const newText = new Array(words.length);

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (specialWords.includes(word)) {
			newText[i] = word;
			continue;
		}
		newText[i] = word[0].toUpperCase().concat(word.slice(1));
	}

	return newText.join(" ");
}

/**
 * @param {string} text
 * @param {string} character
 */
export function countCharacters(text, character) {
	if (typeof text === "undefined") return 0;
	if (text.length === 0) return 0;
	if (typeof character === "undefined") return 0;
	if (character.length === 0) return 0;

	let count = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === character) count++;
	}
	return count;
}
