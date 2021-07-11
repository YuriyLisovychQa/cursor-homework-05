const filterIntegerNumber = (array) => {
  return array.filter(number => Number.isInteger(number));
}

//(1 function) get array

const getArray = (length, min, max) => {
  return Array.from({length})
      .map(el => getRandomNumber(min, max));
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

// (2 function) get Moda
const getModa = (numbers) => {
  let filteredArray = filterIntegerNumber(numbers);
  let mostFrequentlyDigit;
  let max = 0;

  filteredArray.forEach((number) => {
    let frequencyOfCurrentDigit = getDigitFrequencyInNumbers(filteredArray, number);

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

//(3 function) get average
const getAverage = (numbers) => {
  let filteredArray = filterIntegerNumber(numbers);
  let sum = 0;

  filteredArray.forEach((number) => sum += number);

  return Number((sum / filteredArray.length).toFixed(2));
}

//(4 function) get Median
const getMedian = (numbers) => {
  const filteredArray = filterIntegerNumber(numbers);
  const sortedArray = filteredArray.sort((a, b) => a - b);
  const indexOfMiddleElement = sortedArray.length / 2;

  return Number.isInteger(indexOfMiddleElement)
      ? (sortedArray[indexOfMiddleElement] +
          sortedArray[indexOfMiddleElement - 1]) / 2
      : sortedArray[Math.floor(indexOfMiddleElement)];
};

//(5 function) get odd numbers
const filterEvenNumbers = (numbers) => {
  return numbers.filter(number => number % 2);
}

//(6 function) Positive numbers
const countPositiveNumbers = (...numbers) => {
  return numbers.filter(number => number > 0).length;
}

//(7 function) Divided by 5
const getDividedByFive = (numbers) => {
  return numbers.filter(number => Number.isInteger(number / 5)).length;
}

const arr = getArray(15, 1, 15);

console.log("Random numbers: ", arr);
console.log("Moda: ", getModa(arr));

console.log("Average value: ", getAverage(arr));

console.log("Median of array: ", getMedian(arr));

console.log("Odd numbers: ", filterEvenNumbers(arr));

console.log("Count positive numbers: ", countPositiveNumbers(1, -2, 3, -4, -5, 6));

console.log("Count divided numbers by five: ", getDividedByFive(arr));