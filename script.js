//(1 function) get array
const getArray = (length, min, max) => {
  let newArray =[]
  for (let i = 0; i < length; i++) {
    newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
  }   return newArray;
}

