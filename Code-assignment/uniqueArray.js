// write a Javascript function that takes an array of integers as input and 
// returns a new array containing only the unique elements in the original array,
// without using any built-in function 
function getUniqueElements(inputArray) {
    const uniqueObject = {};
    const uniqueArray = [];
  
    for (let i = 0; i < inputArray.length; i++) {
      const currentElement = inputArray[i];
  
      // Check if the element is not already in the uniqueObject
      if (!uniqueObject[currentElement]) {
        // Mark the element as seen in the uniqueObject
        uniqueObject[currentElement] = true;
  
        // Add the element to the uniqueArray
        uniqueArray.push(currentElement);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 2, 3, 5];
  const result = getUniqueElements(inputArray);
  
  console.log(result); 
  
