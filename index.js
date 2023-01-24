// Write a function  that takes in an array of numbers as a parameter and uses the .forEach() method to double the value of all even numbers in the array. The function should not use any other loops or array methods.

const numArray = [12, 45, 34, 79, 82, 37];
let evenNumbers = []

const newArray = numArray.forEach( (element) => {
   if (element % 2 === 0) {
    evenNumbers.push(element * 2)
}
return evenNumbers
})
console.log(evenNumbers)




/* Write a function that takes the array below and modifies its order as follows:
let myDreamCars = [“Charger”, “Cayenne”, “Cyber Truck”, “G Wagon”, “Civic)]
•Remove the first element
•Add your dream car as the new first element
•Remove the last element
•Add your first car as the new last element */


// Remove the first element

// let myDreamCars = [“Charger”, “Cayenne”, “Cyber Truck”, “G Wagon”, “Civic"]

// let removeFirst = myDreamCars.slice(1)

// console.log(removeFirst)


// // Add your dream car as the new first element

// const AddDreamCar = myDreamCars.unshift("Audi R8");
// console.log(AddDreamCar);


// // Remove the last element

// const removeLast = myDreamCars.shift()
// console.log(removeLast);


// // Add your first car as the new last element

// const addFirstCarLast = myDreamCars.push("Mazda 3")
// console.log(addFirstCarLast)

