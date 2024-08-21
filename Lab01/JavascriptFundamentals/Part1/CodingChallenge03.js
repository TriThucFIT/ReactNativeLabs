/**
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

const TestCases = [
  {
    Dolphins: [96, 108, 89],
    Koalas: [88, 91, 110],
  },
  {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 123],
  },
  {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 106],
  },
];

const CalculateAverage = (scores) => {
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};

const CalculateWinner = (Dolphins, Koalas) => {
  const DolphinsAverage = CalculateAverage(Dolphins);
  const KoalasAverage = CalculateAverage(Koalas);
  if (DolphinsAverage >= 100 && KoalasAverage >= 100) {
    if (DolphinsAverage > KoalasAverage) {
      return `Dolphins win with an average score of ${DolphinsAverage}`;
    } else if (KoalasAverage > DolphinsAverage) {
      return `Koalas win with an average score of ${KoalasAverage}`;
    } else {
      return `It's a draw with an average score of ${DolphinsAverage}`;
    }
  } else {
    return `No team wins the trophy`;
  }
};

const runTestCases = () => {
  TestCases.forEach((testCase, index) => {
    console.log(
      `Test Case ${index + 1} : ${CalculateWinner(
        testCase.Dolphins,
        testCase.Koalas
      )}`
    );
  });
};

if (require.main === module) {
  runTestCases();
}

module.exports = {
  CalculateAverage,
  TestCases,
};
