const grader = require('./grader');

//grader testing, test plan located in the G Test Plan.pdf file attached within the replit

//Correctness test suit
describe('1. Testing scores returns appropriate string', () => {

  test('1.1 Failing grade', () => {
    expect(grader(15)).toBe('Fail');
  });

  test('1.2 Passing grade', () => {
    expect(grader(42)).toBe('Pass');
  });

  test('1.3 Merit grade', () => {
    expect(grader(68)).toBe('Merit');
  });

  test('1.4 Distinction grade', () => {
    expect(grader(86)).toBe('Distinction');
  });//This test suit checks the validity of the grader for each possible outcome 'Fail', 'Pass', 'Merit' and 'Distinction', I refreme from testing all numbers within valid range 0-100 as there are not unique outduts for each individual integer (eg. both 61 and 62 will retun 'Merit' not unique/differnt outputs such as 'Merit' and 'Fail') therefore by testing each case of each four possible outcome passes I improve testing efficiency
});


//Reliability test suit
describe('2. Range testing', () => {

  //Commented assertion below fails test case, uncomment to test
  test('2.1 Lowest boundary of range', () => {
   //expect(() => numbersToWords(-1)).toThrow(TypeError('Invalid range'));//For test to pass code needs to be added as an if statement to return throw new TypeError('Invalid range') within the grader function in the grader.js file if condition invalid integers are input. I separated this from the other test case 2.1 to avoid stacked assertions as in this case an error is a more appropriate output, the test holds the same name title as its still testing Lower Boundary of range
	});

  test.each([
      [0, 'Fail'],
      [1, 'Fail'],
      
    ])('2.1.1 Boundary testing for fail/Lowest boundary of range', (a, expected) => {
      expect(grader(a)).toBe(expected);
  });//The test.each syntax is based of the Jest framework, enabling all tests to be ran individually. Initally I had stacked three expect statements(assertions .toBe). In doing so only one test title would show in my shell, signifying only one test has been ran instead of passing all three individual tests of all unique string outputs

  test.each([
      [39, 'Fail'],
      [40, 'Pass'],//This test initially failed as the code in grader.js retured 'Pass' only if the score was greater then 40 not including 40 so to fix this I changed the code so when score is greater than or equal to 40 (score >= 40) return 'Pass'
      [41, 'Pass'],
      
    ])('2.2 Boundary testing for pass', (a, expected) => {
      expect(grader(a)).toBe(expected);
  });

  test.each([
      [59, 'Pass'],
      [60, 'Merit'],//This test initially failed as the code in grader.js retured 'Merit' only if the score was greater then 60, not including 60 so to fix this I changed the code so when score is greater than or equal to 60 (score >= 60) return 'Merit' 
      [61, 'Merit'],
      
    ])('2.3 Boundary testing for merit', (a, expected) => {
      expect(grader(a)).toBe(expected);
  });

  test.each([
      [69, 'Merit'],
      [70, 'Distinction'],//This test initially failed as the code in grader.js retured 'Distinction' only if the score was greater then 70, not including 70 so to fix this I changed the code so when score is greater than or equal to 70 (score >= 70) return 'Distinction'  
      [71, 'Distinction'],
      
    ])('2.4 Boundary testing for distinction', (a, expected) => {
      expect(grader(a)).toBe(expected);
  });//By maintaining consistenct with boundary tests avoids confuction and betters efficiency later for measuring the processess completness of testing later in review

  test.each([
      [99, 'Distinction'],
      [100, 'Distinction'],//This test initially failed as the code in grader.js retured 'Distinction' only if the score was greater then 70, not including 70 so to fix this I changed the code so when score is greater than or equal to 70 (score >= 70) return 'Distinction'  
    ])('2.5 Upper Boundary testing of range', (a, expected) => {
      expect(grader(a)).toBe(expected);
  });
  
  //Commented assertion fails test case, uncomment to test
  test('2.5.1 Upper Boundary testing of range', () => {
   //expect(() => numbersToWords(101)).toThrow(TypeError('Invalid range'));//For test to pass code needs to be added as an if statement to return throw new TypeError('Invalid range') within the grader function in the grader.js file if condition invalid integers are input. I separated this from test case 2.5 to avoid stacked assertions as in this case an error is a more appropriate output, the test holds the same name title as its still testing Upper Boundary of range
	});

  test.each([
      //[0, 'Fail'],//Not needed to reduce duplication as test case 2.1.1 covers this
      [5, 'Fail'],
      [10, 'Fail' ],
      [20, 'Fail'],
      [35, 'Fail'],
      [45, 'Pass'],
      [55, 'Pass'],
      [65, 'Merit'],
      [75, 'Distinction'],
      [85, 'Distinction'],
      [95, 'Distinction'],
      [100, 'Distinction'],
      
    ])('2.1 Equivalence partitioning', (a, expected) => {
      expect(grader(a)).toBe(expected);
  });//The valid range for this function is 0 to 100 inclusive, therefore equivalence testing method in this context divids the input domain into equivalent classes of data range bounds of 5. An advantage of this testing uncovers class errors thereby reducing time required to test multiple test cases
});


//Robustness test suit
describe('3. Negative testing through error guessing', () => {

  //Commented fails test case, uncomment to test
//  test.each([
//       [{ value: 30 }, TypeError('Invalid')],
//       [true, TypeError('Invalid')],
//       ['aaa', TypeError('Invalid')],
//       [[5,5,1], TypeError('Invalid')],
      
//     ])(' 3.1 Invalid data types give error ', (a, expected) => {
//       expect(() => grader(a)).toThrow(expected);
//   });

  //Commented assertion fails test case, uncomment to test
  test('3.3 When no argument is passed', () => {
    //expect(grader()).toThrow(TypeError);
	});//Both test case 3.1 and 3.2 to be fuffil requirements for the gerader function, for them to pass code should be added to the grader function in the grader.js file as an if statement with an appropriate consition( data type is not an integer or if no argument is passed) that throws new TypeError. For example, if (score == undefined || typeof score !== 'number') { throw new TypeError('Invalid')};

  //Commented assertion fails test case, uncomment to test
  test('3.4 Large score input returns error', () => {
    //expect(grader(1000334)).not.toBe('Distinction');//This test should pass as 1000334 is a large unexpected number input that is invalid as it is out of range 0-100, for them to pass code can be added to the grader function in the grader.js file to restrict integer score inputs that are out of range and possibly return a string statement 'score is out of valid range'
  });
});

//Please check the G Test Plan .pdf file that I attached to this replit to give an in depth insight to my testing approach

//To furthur confirm completeness I used https://htmlpreview.github.io/ and added the github URL of this replit generated in Version control