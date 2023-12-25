// write a function that takes two array of integers and returns a new array containing the common elements between the two arrays without 
// using any built-in functions for this purpose
function findCommonElements(array1, array2) {
    const commonElements = {};
    const result = [];
  
    // Add elements from array1 to the commonElements object
    for (let i = 0; i < array1.length; i++) {
      const currentElement = array1[i];
      commonElements[currentElement] = true;
    }
  
    // Check elements from array2 against the commonElements object
    for (let j = 0; j < array2.length; j++) {
      const currentElement = array2[j];
  
      // If the element is present in commonElements, add it to the result array
      if (commonElements[currentElement]) {
        result.push(currentElement);
  
        // Remove the element from commonElements to avoid duplicates in the result
        delete commonElements[currentElement];
      }
    }
  
    return result;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const result = findCommonElements(array1, array2);
  
  console.log(result); 