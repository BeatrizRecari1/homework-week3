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


Remove the first element

let myDreamCars = [“Charger”, “Cayenne”, “Cyber Truck”, “G Wagon”, “Civic"]

let removeFirst = myDreamCars.slice(1)

console.log(removeFirst)


// Add your dream car as the new first element

const AddDreamCar = myDreamCars.unshift("Audi R8");
console.log(AddDreamCar);


// Remove the last element

const removeLast = myDreamCars.shift()
console.log(removeLast);


// Add your first car as the new last element

const addFirstCarLast = myDreamCars.push("Mazda 3")
console.log(addFirstCarLast)

// Complete the function sumGrades such that it returns the sum of all the grades it receives as a parameter. We haven't seen reduce yet, so try to solve it using what you have learned so far.

function sumGrades(grades) {
    let sum = 0
grades.forEach(function(grade){
    sum = sum + grade

})
return sum
}

// Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers from the numbers parameter it receives.

function sumPositiveNumbers(numbers) {
    let sum = 0
numbers.forEach(function(number){
    if(number > 0){
    sum += number
    }
})
return sum
}

// Complete the function sumOddNumbers such that it returns the sum of all the odd numbers from the numbers parameter it receives.

function sumOddNumbers(numbers) {
    let sum = 0
    numbers.forEach(function(number){
        if(number % 2 === 1 || number % 2 === -1){
            sum += number
        }
    })
return sum
}

// Complete the function getDropdown such that it returns the following HTML that will fill the existing <select></select> element. The HTML that's returned should look like the following:

// It should start with: <option value="">Please select</option>
// Then, for every country you should have the <option> for that. For example, for the country "Netherlands", you should have the following <option value="netherlands">Netherlands</option>
// Notice how the value contains the country name in lower case. The remaining countries will need to show up as well following the same criteria.

// Don't forget to look at the end result in the browser tab!

export function getDropdown(countries) {
    let result = `<option value="">Please select</option>`
    countries.forEach(function(country){
        result += `<option value="${country.toLowerCase()}">${country}</option>`
    })
return result
}

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
    return wins * 3 + draws
    }