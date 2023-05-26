// complete the given function

function palindrome(str){
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Check if the string is empty or has a single character
  if (str.length <= 1) {
    return true;
  }

  // Check if the string is a palindrome
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Example usage
const inputString = "race a car";
console.log("Is Palindrome:", isPalindrome(inputString));

}
module.exports = palindrome
