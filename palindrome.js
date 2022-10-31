// PALINDROME
// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

function palindrome(str){
    let reverseStr = str.split('').reverse().join('')
    return reverseStr === str
  }
  
    console.log(palindrome("racecar"))  //true
    console.log(palindrome("kajsia"))  //false
  
  
    // this way works too:
  function isPalindrome(str){
      for (let i = 0; i < str.length/2; i++){
        let frontLetter = str[i]
        let backLetter = str[str.length - 1 - i]
        if (frontLetter !== backLetter){
         return false
      }
    }
      return true
  }
  
  console.log(isPalindrome("racecar"))  //true
  console.log(isPalindrome("snakes"))  //false