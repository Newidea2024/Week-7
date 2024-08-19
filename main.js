

   //Create an   <....array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    //Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    //Do not use numbers to reference the last element, find it programmatically.
    //ages[7] - ages[0] is not allowed!
    //Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    //Use a loop to iterate through the array and calculate the average age--->  


   // Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the value of the first element from the value of the last element
let difference = ages[ages.length - 1] - ages[0];
console.log("Difference between last and first age:", difference);

// Add a new age to the array and repeat the subtraction
ages.push(45);
difference = ages[ages.length - 1] - ages[0];
console.log("New difference after adding another age:", difference);

// Calculate the average age
let sum = 0;
for (let age of ages) {
    sum += age;
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);


// Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let name of names) {
    totalLetters += name.length;
}
let averageLetters = totalLetters / names.length;
console.log("Average number of letters per name:", averageLetters);

// Concatenate all the names together, separated by spaces
let concatenatedNames = '';
for (let name of names) {
    concatenatedNames += name + ' ';
}
concatenatedNames = concatenatedNames.trim(); // Remove the trailing space
console.log("Concatenated names:", concatenatedNames);

    // accessing array elements

// Access the last element of any array
let lastElement = names[names.length - 1];
console.log("Last element:", lastElement);

// Access the first element of any array
let firstElement = names[0];
console.log("First element:", firstElement);

// Create a new array called nameLengths
let nameLengths = [];
for (let name of names) {
    nameLengths.push(name.length);
}
console.log("Name lengths array:", nameLengths);

// Calculate the sum of all elements in the nameLengths array
let totalLength = 0;
for (let length of nameLengths) {
    totalLength += length;
}
console.log("Sum of all name lengths:", totalLength);
  // function
  function repeatWord(word, n) {
    return word.repeat(n);
}
console.log(repeatWord('Hello', 3)); // "HelloHelloHello"

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('John', 'Doe')); // "John Doe"

function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum > 100;
}
console.log(isSumGreaterThan100([10, 20, 30, 40])); // false
console.log(isSumGreaterThan100([50, 60, 10])); // true
  // calculate averge 
  function average(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}
console.log(average([10, 20, 30])); // 20
    // compare two arrays
    function compareAverages(array1, array2) {
        return average(array1) > average(array2);
    }
    console.log(compareAverages([10, 20, 30], [5, 15, 25])); // true

    function willBuyDrink(isHotOutside, moneyInPocket) {
        return isHotOutside && moneyInPocket > 10.50;
    }
    console.log(willBuyDrink(true, 15)); // true
    // Function to check if a number is even or odd
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

    

