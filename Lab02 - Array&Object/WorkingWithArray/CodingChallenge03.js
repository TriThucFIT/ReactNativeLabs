/**
 Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
 */

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age) => acc + age, 0) / ages.length;

const testCases = {
  data1: [5, 2, 4, 1, 15, 8, 3],
  data2: [16, 6, 10, 5, 6, 1, 4],
};

const runTestCase = () => {
  Object.keys(testCases).forEach((key) => {
    console.log(`Test Case ${key}`);
    console.log(calcAverageHumanAge(testCases[key]));
  });
};

if (require.main === module) {
  runTestCase();
}

module.exports = {
  calcAverageHumanAge,
  testCases,
};
