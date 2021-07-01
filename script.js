const filterIntegerNumber = (array) => {
  return array.filter(number => Number.isInteger(number));
}

//(1 function) get array
const getArray = (length, min, max) => {
  let newArray =[]
  for (let i = 0; i < length; i++) {
    newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
  }   return newArray;
}

console.log("Get random array ", getArray(15, 1, 15));

// (2 function) get Moda
const getModa = (...numbers) => {
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

console.log("Moda ", getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//(3 function) get average
const getAverage = (...numbers) => {
  let filteredArray = filterIntegerNumber(numbers);
  let sum = 0;

  filteredArray.forEach((number) => sum += number);

  return sum / filteredArray.length;
}

console.log("Average value", getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//(4 function) get Median
const getMedian = (...numbers) => {
  const filteredArray = filterIntegerNumber(numbers);
  const sortedArray = filteredArray.sort((a, b) => a - b);
  const indexOfMiddleElement = sortedArray.length / 2;

  return Number.isInteger(indexOfMiddleElement)
      ? sortedArray[
          (sortedArray[indexOfMiddleElement] +
          sortedArray[indexOfMiddleElement - 1]) / 2
        ]
      : sortedArray[Math.floor(indexOfMiddleElement)];
};

console.log("Median of array", getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//(5 function) get odd numbers
const filterEvenNumbers = (...numbers) => {
  return numbers.filter(number => number % 2);
}

console.log("Odd numbers", filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//(6 function) Positive numbers
const countPositiveNumbers = (...numbers) => {
  return numbers.filter(number => number > 0).length;
}

console.log("Count positive numbers", countPositiveNumbers(1, -2, 3, -4, -5, 6));

//(7 function) Divided by 5
const getDividedByFive = (...numbers) => {
  return numbers.filter(number => Number.isInteger(number / 5)).length;
}

console.log("Count divided numbers by five", getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));