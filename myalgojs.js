//reverser un string 
function reverseString(str) {
    return str.split("").reverse().join("");

  }
  console.log(reverseString("hello")); 

  //trouver le max nombre
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
// trouver s'il y a des mot palindrome 
function isPalindrome(word) {
    return word === word.split("").reverse().join("");
  }
  
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
//
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      let output = "";
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      console.log(output || i);
    }
  }
  
  fizzBuzz();
  // trouver la duplication 
  function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    
    for (let num of arr) {
      if (seen.has(num)) duplicates.add(num);
      seen.add(num);
    }
  
    return [...duplicates];
  }
  
  console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));
  // fonction recursive 
  function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
  
  console.log(factorial(5));

  // changer un coin 
  function coinChange(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  
  console.log(coinChange([1, 2, 5], 11)); // Output: 3 (5+5+1)
  