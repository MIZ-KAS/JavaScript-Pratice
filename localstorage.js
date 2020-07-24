// using local storage API which is part of the browser, you can save arrays and string using a method called JSON.stringify

// Local storage will stay will Session storage will leave or go away once the browser is close or once the session ends

/*
// How to set local storage item
localStorage.setItem('name', 'Yinka');
localStorage.setItem('age', '30');

// How to set Session storage item
sessionStorage.setItem('name', 'Yinka')

// remove item from local storage
// localStorage.removeItem('name');

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

*/

/*

var firstName ='John';
var age = 30;

//Type coerction
console.log(firstName + ' is ' + age + ' years old ');
console.log(age);

var job, isMarried;
job = ' teacher. ';
isMarried = false;

console.log( firstName + ' is a ' + age + ' year old'   +  job  + ' is he married? ' + isMarried);

// Variable mutation - it simple means to change the valuse of a variable

age = 'twenty eight';
job = ' driver';

alert( firstName + ' is a ' + age + ' year old'   +  job  + ' is he married? ' + isMarried);

var lastName = prompt('what is his lastName? ')
console.log(firstName + ' ' + lastName);

*/

/* Basic operator 
var year, yearJohn, yearMark;
year = 2020;
yearJohn = year - 40;
yearMark = year - 33;
console.log(yearJohn);
console.log(yearMark);

*/

//First coding challenge

// var markMass, johnMass, maskHeight, johnHeight;
// markMass = 78;
// markHeight = 1.69;
// johnMass = 92;
// johnHeight = 1.95;

// BMI = mass / height^2
/*
var markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

var bool = johnBMI < markBMI;
console.log(bool);

console.log("Is marks's BMI height than jon's BMI?", bool);

ifelse statement
var firstName = 'Joh';
var civiStatus = 'single';

if (civiStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log( firstName + ' wll hopefully marry soon :)');
}

*/

/* Boolean Logis 

AND (&&) -- true if all are true
OR (||) -- true if one is true
NOT (!) -- inverts true/false value
*/
/*
var firstName = 'John';
var age = '4';

if (age < 13) {
    console.log(firstName + ' is a boy')
}else if ( age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
}else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}else{
    console.log(firstName + ' is a man.');
}
*/
// The Ternary Operator -- allow to write if else statement in one line.

// the ternary operator has three operand 
// 1. the condition statement e.g age >= 18
// 2. the if statement e.g ?
// 3. the else statement e.g :

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' is drinking beer.') : console.log( firstName + ' is drinking Juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'driver';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives kids to school');
        break;
    case 'designer':
        console.log(firstName + ' designs website for kids');
        break;

    default:
        console.log(firstName + ' does something else');
}
    
/*Truthy and Falsy values and equality operators

falsy values: undefined, null, 0, '', NaN
Truthy values: Not falsy values

*/




var jtScoreOne = 89;
var jtScoreTwo = 120;
var jtScoreThree = 103;

var mkScoreOne = 116;
var mkScoreTwo = 94;
var mkScoreThree = 123;

var mrScore = (97 + 134 + 105) / 3;
console.log(mrScore);

var jtAverage, mkAvarage;

jtAverage = (jtScoreOne + jtScoreTwo + jtScoreThree) / 3;
console.log(jtAverage);

mkAvarage = (mkScoreOne + mkScoreTwo + mkScoreThree ) / 3;
console.log(mkAvarage);

/*
if (mkAvarage > jtAverage) {
    console.log("mark's team wins" + ' ' + mkAvarage + ' points')
} else if ( jtAverage > mkAvarage) {
    console.log("john's team wins" + ' ' + jtAvarage + ' points');
} else {
    console.log('no answer');
}
*/

if ( mkAvarage > jtAverage && mkAvarage > mrScore) {
    console.log("mark's team wins" + ' ' + mkAvarage + ' points')
} else if (jtAverage > mkAvarage && jtAverage > mrScore) {
    console.log("John's team wins" + ' ' + jtAvarage + ' points')
} else if (mrScore > jtAverage && mrScore > mkAvarage) {
    console.log("Mary's team wins" + ' ' + mrScore + ' points')
} {
    console.log('There is a draw')
}


// function

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMark = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMark, ageJane);

function yearsUnitlRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has already retired');
    }
    
}

yearsUnitlRetirement(1990, 'John');
yearsUnitlRetirement(1948, 'Mark');
yearsUnitlRetirement(1969, 'Jane');




// Functions statement and expresstion

/* function decleration
function whatDoYouDo(job, firstname) {}*/

/*function expresstion */
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default: 
            return firstName + ' does something else';
    }

}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('driver', 'Mary'));
console.log(whatDoYouDo('web developer', 'Yinka'));

// Array

var Data = ['John', 'Smith'];

 Data.push(' is a Man.'); //it push to the end of the array
 Data.unshift('Mr.'); //it add valuse to the beginning of the array

 Data.pop(); //remove the last element 
 Data.shift(); //revome the first element
console.log(Data);

console.log(Data.indexOf('Smith'));


function calculateBill(amount){
    return amount;
}

var billOne = calculateBill(124);
var billTwo = calculateBill(48);
var billThree = calculateBill(268);

console.log(billOne,billTwo,billThree);

var tips = [];

function tipCalculator(amount) {
    // var tips = calculateBill(amount);
    var payee;

    if (tips < 50) {
        payee = .2;
    } else if ( tips >= 50 && tips < 200 ) {
        payee = .15;
    } else if (tips < 200) {
        payee = .1;
    }
    return payee * amount;
}

var amount = [124, 48, 268];
var tips = [tipCalculator(amount[0]),tipCalculator(amount[1]),tipCalculator(amount[2])];

var result = [amount[0] + tips[0], amount[1] + tips[1], amount[2] + tips[2]];

console.log(tips, result);

// object using the object literials {}

var John = {
    firstName: 'John',
    lastName: 'smith',
    birthYear: 1990,
    family: ['Janee', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(John.lastName);
console.log(John['lastName']);
var x = 'birthYear';
console.log(John[x]);

John.job = 'designer';
John['isMarried'] = true;
console.log(John);


var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

// methods are functions attached to other array


var John = {
    firstName: 'John',
    lastName: 'smith',
    birthYear: 1990,
    family: ['Janee', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
        // return 2018 - this.birthYear;
    }
};

John.calcAge();
console.log(John);