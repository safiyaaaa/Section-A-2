// Grader

// This program takes a parameter score that is of datatype number and is between 0 and 100 and returns the appropriate grade. Scores between (and including) 0 and 39 are a fail, scores between (and including) 40 and 59 are a pass, scores between (and including) 60 and 69 are a merit, scores above (and including) 70 is a distinction.

// The valid range for this function is 0 to 100 inclusive.

// Make sure you are testing all branches of the code. This includes all possible condtions met in the if statements and all the return values made possible by them.

// Reflect on whether you need to test every number from 0 to 100 but do make sure you are testing all the values possible grades you can get. Check the center and boundries for these grades. Also think about what inputs the function should take and what will happen if you give it an input that isn't a number. The function should always return a value and valid returns from the function are Fail, Merit, Pass, Distinction. Undefined considered to be and unvalid return value. For the purpose of testing invalid inputs you can choose what you think they should return.

// Write extensive tests for this code, you are not required to fix any bugs but add a comment in the tests that fail explaining why they have failed.


function grader(score) {
  
  if (score >= 70) {
    return 'Distinction'
  }
  else if (score >= 60) {
    return 'Merit'
  }
  else if (score >= 40) {
    return 'Pass'
  }
  else {
    return 'Fail'
  }
};//Once I had constructed my tests in the grader.test.js file I debugged this function and changed all the greater than signs (>) to greater then or equal to (>=) so the bounds of each test are inclusive eg. If the score is now 60, 60 will also return string 'Merit' as the requirements state

module.exports = grader