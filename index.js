// 1
console.log("PROBLEM ONE \n");
const fruits = ["apple", "banana", "orange", "grape"];
fruits[2] = "kiwi";

console.log(fruits);
// 2
console.log("\n PROBLEM TWO \n");
const numbers = [2, 4, 6, 8, 10];
numbers.push(12);
console.log(numbers);
numbers.shift();
console.log(numbers);
// 3
console.log("\n PROBLEM THREE \n");
const firstNames = ["John", "Emma", "Michael"];
const lastNames = ["Doe", "Smith", "Johnson"];

const fullNames = [];
for(index in firstNames){
    fullNames[index] = `${firstNames[index]} ${lastNames[index]}`;
}
console.log(fullNames);
// 4
console.log("\n PROBLEM FOUR \n");
const scores = [85, 92, 78, 95, 88];

// .reduce() runs a callback function on every element, passing in the return val from the calculation on the preceding element
const total = scores.reduce((accumulator, currentVal) => accumulator + currentVal);

console.log(total);

// 5
console.log("\n PROBLEM FIVE \n");

// 6
console.log("\n PROBLEM SIX \n");

// 7
console.log("\n PROBLEM SEVEN \n");

// 8
console.log("\n PROBLEM EIGHT \n");

// 9
console.log("\n PROBLEM NINE \n");

// 10
console.log("\n PROBLEM TEN \n");
