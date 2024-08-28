/**
 * Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")

4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
 */

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCorrected = dogsJulia.slice(1, -1);
  console.log(dogsJuliaCorrected);

  const dogs = [...dogsJuliaCorrected, ...dogsKate];
  dogs.forEach(function (dog, i) {
    const type = dog >= 3 ? "adult" : "puppy";
    console.log(`Dog number ${i + 1} is an ${type}, and is ${dog} years old`);
  });
};

const testCases = {
  data1: {
    dogsJulia: [3, 5, 2, 12, 7],
    dogsKate: [4, 1, 15, 8, 3],
  },
  data2: {
    dogsJulia: [9, 16, 6, 8, 3],
    dogsKate: [10, 5, 6, 1, 4],
  },
};

const runTestCase = () => {
  Object.keys(testCases).forEach((key) => {
    console.log(`Test Case ${key}`);
    checkDogs(testCases[key].dogsJulia, testCases[key].dogsKate);
  });
};

if (require.main === module) {
  runTestCase();
}

module.exports = {
  checkDogs,
  testCases,
};
