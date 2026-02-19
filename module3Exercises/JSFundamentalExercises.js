//  Exercise 1

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
!true // false
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
" -9 " + 5 // -9 5
" -9 " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
undefined == null // true
undefined === null // false
" \t \n" - 2 // -2
// console.log(" \t \n" - 2)

//  Exercise 2

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // answer = 34 - the addition symbol cant process the equation because three and four are strings, they need to be numerical values
let multiplication = three * four // answer = 12 - operates normally
let division = three / four // answer = 0.75 - operates normally
let subtraction = three - four // answer = -1 - operates normally
let lessThan1 = three < four // true - 3 is less than 4, operates normally
let lessThan2 = thirty < four // should be false, prints true. because thirty and four are strings, the comparison happens with the first character in each string.


// console.log(lessThan2)

// Exercise 3

// if (0) console.log('#1 zero is true') // does not print - 0 acts as false in the binary so the statement wont print to screen
// if ("0") console.log('#2 zero is true') // does print - "0" can be read as an numerical value
// if (null) console.log('null is true') // does not print - null refers to an empty point, which the console.log statement cant read and print
// if (-1) console.log('negative is true') // does print - reads a non-zero number, returns true, prints msg
// if (1) console.log('positive is true') // does print - reads a non-zero number, returns true, prints msg

// Exercise 4

let a = 2, b = 11;
let result = `${a} + ${b} is `;

// console.log(result +=(a + b < 10 ? 'less than 10' : 'greater than 10'))


// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }


// Exercise 5
function getGreeting(name) {
console.log('Hello ' + name + '!');
}


let name2 = 'Sean'

const getGreetingExpression = function(){
    console.log('Hello ' + name2 + '!');
}

const getGreetingArrow = () => console.log('Hello ' + name2 + '!')

// getGreeting('Sean')
// getGreetingExpression()
// getGreetingArrow()

// Exercise 6

const westley = {
    name: 'Westley',   
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoyo',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase : (person) => { 
        return (person.numFingers != 6 ? 'Nice to meet you.' : 'You killed my father, prepare to die')
    }
    
}


// inigo.greeting(westley)
// inigo.greeting(rugen)

//  Exercise 7

const basketballGame = {
    score: 0,
    foul: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    playerFoul(){
        this.foul++;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
        console.log(`There have been ${this.foul} fouls`);
        return this
    },
    fullTime() {
        console.log(`${this.score} is the final score`);
        console.log(`There were ${this.foul} foul(s)`)
    }
}

// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().playerFoul().halfTime();
// basketballGame.basket().threePointer().playerFoul().threePointer().freeThrow().halfTime().threePointer().playerFoul().freeThrow().freeThrow().fullTime()

// Exercise 8

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const sydneyClone = {}

for(let key in sydney){
    sydneyClone[key] = sydney[key]
}

// console.log(sydneyClone)

const japan = {
    name: 'tokyo',
    population: 36_953_600,
    state: 'Japan',
    founded: '1603',
    timezone: 'Japan Standard'
}

const japanClone = {}

for(let key in japan){
    japanClone[key] = japan[key]
}

// console.log(japanClone)


//  Exercise 9

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports]
moreSports.push('lacrosse')
moreSports.unshift('football')
let dog1 = { name: 'Bingo'};
let dog2 = dog1
dog2.name = 'frankie';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = {...cat1, name: 'Bingus'}

// console.log(teamSports)
// console.log(moreSports)
// console.log(dog1)
// console.log(dog2)
// console.log(cat1)
// console.log(cat2)


//  Exercise 10

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function(){
            return this.age >= 16;
        }
}


let sean = new Person('Sean', 24)
let sarah = new Person('Sarah', 22)

console.log(sean)
console.log(sean.canDrive())
console.log(sarah)
console.log(sarah.canDrive())

class personClass {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.human = true
        }
        canDrive(){
            return this.age >= 16;
    }
}

let Ilia = new personClass('Ilia', 20)

console.log(Ilia)
console.log(Ilia.canDrive())