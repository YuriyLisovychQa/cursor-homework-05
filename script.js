//(1 function) get array
const getArray = (length, min, max) => {
  let newArray =[]
  for (let i = 0; i < length; i++) {
    newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
  }   return newArray;
}
// (2 function) get Moda
const getModa = (...numbers) => {
  let mostFrequentlyDigit;
  let max = 0;

  numbers.forEach((number) => {
    let frequencyOfCurrentDigit = getDigitFrequencyInNumbers(numbers, number);

    if (frequencyOfCurrentDigit > max) {
      max = frequencyOfCurrentDigit;
      mostFrequentlyDigit = number;
    }
  });

  return mostFrequentlyDigit;
}

const getDigitFrequencyInNumbers = (numbers, numberToFind) => {
  return numbers.filter(number => number === numberToFind).length;
}

console.log("Moda ", getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
