
// Valid parentheses (20 mins)

// CHALLENGE

// Write a function called validParens that determines if 
// the order of the parentheses in a string is valid. The function 
// should return true if the string is valid, and `false` if it's invalid.

// Your input 'parens' is guaranteed to be a string that contains only
// a series of '(' or ')'. No other characters will be passed.

// EXAMPLES

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.
// Alternatively send an email with your solution to felix.weinberger@gmail.com

function validParens (parens) {
  parens = parens.split('');
  let balance = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') balance++;
    else if (parens[i] = ')') balance--;
  }
  if (balance === 0) return true;
  return false;
 }

module.exports = validParens;
