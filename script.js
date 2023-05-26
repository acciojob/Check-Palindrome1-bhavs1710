// complete the given function

function palindrome(str){
const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = "race a car";

// call the function
const value = palindrome(string);

console.log(value);
}
module.exports = palindrome
