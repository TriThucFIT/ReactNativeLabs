/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
 */

const CalculateBMI = (mass, height) => mass / height ** 2;

const TestCases = [
  {
    MarkInfo: {
      mass: 78,
      height: 1.69,
    },
    JohnInfo: {
      mass: 92,
      height: 1.95,
    },
  },
  {
    MarkInfo: {
      mass: 95,
      height: 1.88,
    },
    JohnInfo: {
      mass: 85,
      height: 1.76,
    },
  },
];

const runTestCase = () => {
    TestCases.forEach((testCase, index) => {
        const MarkBMI = CalculateBMI(
          testCase.MarkInfo.mass,
          testCase.MarkInfo.height
        );
        const JohnBMI = CalculateBMI(
          testCase.JohnInfo.mass,
          testCase.JohnInfo.height
        );
        const markHigherBMI = MarkBMI > JohnBMI;
        console.log(
          `Test Case ${
            index + 1
          } : Mark's BMI : ${Math.floor(MarkBMI)}, John's BMI : ${Math.floor(JohnBMI)}, Mark has higher BMI : ${markHigherBMI}`
        );
      });
}

if (require.main === module) {
    runTestCase();
}

module.exports = {
  CalculateBMI,
  TestCases,
};
