# Algorithm challenge // Valid Parentheses
- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
`github.com/felixweinberger/valid-parens`

Fork this repo and then `git clone` your forked repo to your computer.
Once happy with your solution, `git push` and submit a pull request at 
`github.com/felixweinberger/valid-parens` or send an email to `felix.weinberger@gmail.com`

## 2. Challenge
Write a function called `validParens` that determines if 
the order of the parentheses in a string is valid. The function 
should return true if the string is valid, and `false` if it's invalid.

Your input `parens` is guaranteed to be a string that contains only
a series of `(` or `)`. No other characters will be passed.

### 2.1. Examples
```js
Input             =>  output
----------------------------
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

### 2.2. Testing your solution
To test your solution, run `npm install` in the root directory 
and then run `npm test` to run the automated tests.

### 2.3. Submitting your solution
You have 2 options to submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo
2. Send an email with your solution to `felix.weinberger@gmail.com` and I will confirm
