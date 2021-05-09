/* 
var variables can be reassingned
*/
/*
var name = "carlos";
console.log(name);
name = "andres";
console.log(name);
------------------
log:
carlos
andres

function printName() {
    var name = "carlos"; // when the variable is declare here this variable can be access just inside the function 
    console.log(name); // is good javascript practice to have vaiables wrapped inside functions avoid global variables
}

console.log(name); // will throw ReferenceError: name is not defined, due is not in the global scope belong the printName function scope

printName();

var name = "carlos";
if(name == "carlos") {
    var fullName = "Carlos De La Rosa"; //var variables are function scope not code block scope
}
console.log(fullName);

var name = "carlos";
if(name == "carlos") {
    let fullName = "Carlos De La Rosa";
    console.log(fullName);
}

//console.log(fullName); // will throw ReferenceError: name is not defined, due to let variables are code block scope

let name = "Carlos";
let name = "Carlos";
console.log(name); // will throw SyntaxError: Identifier 'name' has already been declared
*/
/****************************************************************************************/

/* let and const variables

var name = "Carlos";
if (name == "Carlos") {
    let fullName = "Carlos De La Rosa";
    const age = 39; // const is also block code scope and cannot be reassigned
    age = 1; //will throw TypeError: Assignment to constant variable.
}

// console.log(age); // will throw ReferenceError: age is not defined

const person = {
    name: ' bill',
    gender: 'male'
};

person = { // this will throw TypeError: Assignment to constant variable. due is a constant cannot be reassigned
    name: ' jane',
    gender: 'female'
}

console.log(person.name);
console.log(person.gender);

let person = {
    name: ' bill',
    gender: 'male'
};

person = { // this will work let allows change the value of a variable
    name: ' jane',
    gender: 'female'
}

console.log(person.name);
console.log(person.gender);

const person = {
    name: ' bill',
    gender: 'male'
};

person.name = ' jane',
person.gender = 'female' // we cannot change the variable reference to the object but his properties yes


console.log(person.name);
console.log(person.gender);*/
/********************************************************************************************************/
/* Arrows Functions 
const integersArray = [1,2,3]; //map allows transform each element of the array

//without arrow function
const updatedIntegersArrayFunc = integersArray.map(function (number) {
    return number *= 2;
});
console.log(updatedIntegersArrayFunc);

//with arrow function
let updatedIntegersArrayArrow = integersArray.map(number => number *= 2);
console.log(updatedIntegersArrayArrow);
*/

/*const ages = [23, 42, 6, 18]; //filter function allows to get specific data from an array
const adultsFunc = ages.filter(function (age) {
    return age > 20;
});

const adultsArrow = ages.filter(age => age > 20);
console.log(adultsFunc);
console.log(adultsArrow);
*/
/****************************************************************************/
/** template strings
const name = "bill";
const age = 35;

const sentence = `My name is ${name}, and I am ${age} years old`;
console.log(sentence);
*/

/****************************************************************************/
/* function constructors prototypes
//const person = {
  //  name: 'Bill',
   // age: 50
//};

function Person(name, age) { //constructor function
    this.name = name;
    this.age = age;
};

Person.prototype.speak = function () {
    console.log(`Hi my name is ${this.name}`);
};

const bill = new Person('Bill', 40); // use new to instantiate a new function or object
bill.speak();
*/

/****************************************************************************/
/* classes

class Person {

    constructor(name, age, children) {
        this.name = name;
        this.age = age;
        this.children = children;
    }
    speak() {
        console.log(`Hi my name is ${this.name}`);
    }

    birth(child) {
        this.children.push(child);

    }
};

const bill = new Person('Bill', 50, ['sean', 'steph']);
bill.speak();
bill.birth('jess');
console.log(bill.children);
*/

/****************************************************************************/
/* spread operator */
const names = ['John', 'Bill', 'Sam'];
const moreNames = ['William', 'Paul', 'Mike'];
console.log(...names) //remove brackets and commas from the output

// concatenate arrays and adding a value between them ['John', 'Bill', 'Sam', 'Middle Value', 'William', 'Paul', 'Mike']
// ES5 implementation
//let allNames = [];
//allNames = allNames.concat(names);
//allNames.push('Middle Value');
//allNames = allNames.concat(moreNames);
//console.log(allNames);

//ES6 implementation spread operator
const allNames = [...names, 'Middle Value', ...moreNames];
console.log(allNames);