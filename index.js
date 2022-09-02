function isPalindrome(word) {
    const arrayOfLetters = word.split('');
    const reverseLetters = arrayOfLetters.reverse()
    const reverseString = reverseLetters.join('')

    if (word == reverseString) {

        return true

    } else {
        return false
    }

}


if (require.main === module) {
    // add your own custom tests in here
    console.log('Expecting: false')
    console.log('=>', isPalindrome('ladder'));

    //✓ returns false for 'ab'

    console.log('Expecting: true')
    console.log('=>', isPalindrome('abba'));

    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


