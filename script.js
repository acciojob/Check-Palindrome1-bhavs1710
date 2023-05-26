// complete the given function

function palindrome(str){
  // Check if the string is a palindrome
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
const inputString = "race a car";
console.log("Is Palindrome:", isPalindrome(inputString));

}
module.exports = palindrome
