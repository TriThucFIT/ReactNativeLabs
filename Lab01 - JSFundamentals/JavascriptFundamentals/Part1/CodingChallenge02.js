/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
 */

const CodingChallenge01 = require("./CodingChallenge01");

CodingChallenge01.TestCases.forEach((testCase, index) => {
  const MarkBMI = CodingChallenge01.CalculateBMI(
    testCase.MarkInfo.mass,
    testCase.MarkInfo.height
  );
  const JohnBMI = CodingChallenge01.CalculateBMI(
    testCase.JohnInfo.mass,
    testCase.JohnInfo.height
  );
  const markHigherBMI = MarkBMI > JohnBMI;
  console.log(
    `Test Case ${
      index + 1
    } : Mark's BMI : ${Math.floor(MarkBMI)}, John's BMI : ${Math.floor(JohnBMI)}, ${
      markHigherBMI
        ? "Mark's BMI is higher than John's!"
        : "John's BMI is higher than Mark's!"
    }`
  );
});