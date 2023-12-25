// JavaScript object representing a car
const car1 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
  };
  
  // Another JavaScript object representing a car
  const car2 = {
    color: 'Blue',
    fuelType: 'Petrol',
  };
  
  // Function to merge two car objects
  function mergeCars(carA, carB) {
    // Create a new object to store the merged properties
    const mergedCar = {};
  
    // Copy properties from the first car (carA)
    for (const keyA in carA) {
      if (carA.hasOwnProperty(keyA)) {
        mergedCar[keyA] = carA[keyA];
      }
    }
  
    // Copy properties from the second car (carB)
    for (const keyB in carB) {
      if (carB.hasOwnProperty(keyB)) {
        mergedCar[keyB] = carB[keyB];
      }
    }
  
    return mergedCar;
  }
  
  // Example usage:
  const mergedCar = mergeCars(car1, car2);
  console.log(mergedCar);
  