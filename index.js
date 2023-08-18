// 1
console.log("PROBLEM ONE \n");
const fruits = ["apple", "banana", "orange", "grape"];
fruits[2] = "kiwi";

console.log(fruits);
// 2
console.log("\n PROBLEM TWO \n");
// declare numbers here with let because we're reassigning the variable in #7
let numbers = [2, 4, 6, 8, 10];
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
const ages = [25, 30, 18, 42, 15];

// .reduce() runs a callback function on every element, passing in the return val from the calculation on the preceding element
const totalAges = ages.reduce((accumulator, currentVal) => accumulator + currentVal);

console.log(totalAges);

// REMEMBER: .forEach doesn't return anything (returns undefined)
let sum = 0;
ages.forEach((x) => {
    sum += x;
});

console.log(sum);

// 5
console.log("\n PROBLEM FIVE \n");
// greater than equal to 90
const scores = [85, 92, 78, 95, 88];

// .filter() returns a shallow copy (i.e. has the same reference as the original) of elements that pass & does not alter the original array
// if no elements pass test, returns an empty array

const filteredScores = scores.filter((x) => (x => 90));
console.log(filteredScores);


// 6
console.log("\n PROBLEM SIX \n");
const countries = ["USA", "Canada", "Mexico", "France", "Germany"];

// don't use .includes(), it returns booleans

// don't use .find(); it returns the first element that satisfies condition, if nothing satisfies condition, returns undefined. but it uses a call function... so not necessary

// .indexOf returns first index of given element, o/w returns -1 if not element not found

const includesCountry = (array, countryToFind) => {
    return array.indexOf(countryToFind);
}

console.log(includesCountry(countries, "Mexico"));

// 7
console.log("\n PROBLEM SEVEN \n");

numbers = [3, 7, 1, 9, 4];

const squaresNumbers = (array) => array.map((x) => x ** 2);

console.log(squaresNumbers(numbers));

// 8
console.log("\n PROBLEM EIGHT \n");

const grades = [87, 95, 76, 88, 92];

// .sort() does sorting pairwise. not sure why it's a - b for smallest to largest though? i thought it'd be b - a?
const sortsArray = (array) => {
    return array.sort((a, b) => a - b);
}

console.log(sortsArray(grades));

// 9
console.log("\n PROBLEM NINE \n");

const data = [10, 20, 30, 40, 50];

const doublesData = (array) => array.map((x) => x * 2);

console.log(doublesData(data));

// 10
console.log("\n PROBLEM TEN \n");

const values = [34, 12, 78, 53, 90];

const returnsMax = (array) => {
    // can't use the Math.max without using the spreader operator
    // it seems you can't use a list as a parameter, each number has to be individually given as a parameter

    // Q: does the spreader operator only spread out one layer?

    // observation can't do: let foo = ...var;
    // it's because you would be assigning foo to multiple things inside of the var (var is [1,2, 1000])
    return Math.max(...array);
}

console.log(returnsMax(values));

// ~ OBJECTS ~

console.log("\n OBJECTS \n");

let movie = {

    name: "Titanic",

    releaseYear: 1997,

    director: "James Cameron",

    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],

    starActor: {

        name: "Leonardo Dicaprio",

        age: 5,

        born: 1889,

        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",

        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"

    },

    budgetInMillions: 200

};

// object function 1

const changeActorAge = (movie, newAge) => {
    movie.starActor.age = newAge;
}

changeActorAge(movie, 48);

console.log(`Star actor's age property is ${movie.starActor.age}`);

// object function 2

const changeActorBorn = (movie, newYear) => {
    movie.starActor.born = newYear;
}

changeActorBorn(movie, 1989);
console.log(`Star actor's born property is ${movie.starActor.born}`);

// object function 3

const addIsPopular = (movie, isPopular) => {
    movie.starActor.isPopular = isPopular;
}

addIsPopular(movie, true);
console.log(`star actor's (inside movie) isPopular is ${movie.starActor.isPopular}`);

// object function 4

const addIsGoodMovie = (movie, isGoodMovie) => {
    movie.isGoodMovie = isGoodMovie;
}

addIsGoodMovie(movie, undefined);
console.log(`Movie's isGoodMovie is ${movie.isGoodMovie}`);

// object function 5

const checkForActor = (movie, actorToCheck) => {
    movie.isGoodMovie = movie.actors.includes(actorToCheck);
}

checkForActor(movie, "Tom Cruise")
console.log(`movie's isGoodMovie is ${movie.isGoodMovie}`);



console.log("\n OBJECTS PART 2 \n");

let cohortFour = {

    classSize: 5,

    instructor: {

        name: "Fred",

        age: 40,

        completedCohortIds: [3, 77, 45, 23],

        email: "fred@fred.com",

        assistant: {

            name: "Brad",

            age: 38,

            email: "Brad@brad.com"

        }

    },

    classGrades: [99, 100, 89, 88, 95]

}

// function 1

const classGreaterThanTen = (object) => object.classSize > 10;
console.log(`Cohort four size is greater than 10: ${classGreaterThanTen(cohortFour)}`);

// function 2 

const instructorMoreThanTwoCohorts = (object) => {
    return object.instructor.completedCohortIds.length > 2;
}

console.log(`The instructor has had more than 2 cohorts: ${instructorMoreThanTwoCohorts(cohortFour)}`);

// function 3 

const changeAssistant = (object, newName, newAge, newEmail) => {
    object.instructor.assistant.name = newName;
    object.instructor.assistant.age = newAge;
    object.instructor.assistant.email = newEmail;
}

changeAssistant(cohortFour, "Freddie Mercury", 8, "freddie@coolest-dude.com");
console.log("The changed assistant is:" , cohortFour.instructor.assistant);

// function 4 

const checkIfCompletedCohort = (object, cohortNumberToCheck) => {
    return object.instructor.completedCohortIds.includes(cohortNumberToCheck);
}

console.log("Instructor passed cohort 55", checkIfCompletedCohort(cohortFour, 55));

// function 5

// the avg score of cohortFour is 94.2

const isAvgGradeMoreThan = (object, scoreToCompare) => {
    let avgGrade = object.classGrades.reduce((a,b) => a + b, 0)/object.classGrades.length;

    return avgGrade > scoreToCompare ? true : false;
}

console.log("The average grade is greater than 90:", isAvgGradeMoreThan(cohortFour, 90));