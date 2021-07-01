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


//(5 function) get odd numbers
const filterEvenNumbers = (...numbers) => {
  return numbers.filter(n => n % 2);
}

console.log(filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))