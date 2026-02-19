//      Exercise 1

function makeCounter(startFrom, incrementBy) {
let currentCount = startFrom;
return function() {
currentCount+= incrementBy;
console.log(currentCount)
return currentCount;
};
}
let counter1 = makeCounter(4, 2);
// counter1(); 
// counter1();

let counter2 = makeCounter(8, 3)
// counter2()
// counter2()

// Exercise 2 
// answer for question a). #4,#3,#2,#1, then #5. #4 prints first because it has no timeout value set to it, where #3 has 0ms assigned to it


delayMsg = (msg) => {
console.log(`This message will be printed after a delay: ${msg}`)
}
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
// let timerCancel = setTimeout(delayMsg, 20000, '#5: Delayed by 20000ms')
// clearTimeout(timerCancel)


//  Exercise 3

function printMe(msg) {
console.log(`${msg}`)
}

debounce = (func, delay) =>{
    let Timeout
    return function(msg){
        clearTimeout(Timeout)
        Timeout = setTimeout(func, delay, msg)
    }
}

printMe = debounce(printMe, 2000);

// setTimeout( printMe, 100, '100ms delay');
// setTimeout( printMe, 200, '200ms delay');
// setTimeout( printMe, 300, '300ms delay');


//  Exercise 4

// A with limits)
function printFibonacci(limit){
    let first = 1
    let second = 1

    console.log(first)
    console.log(second)

    let counter = 2

    let intervalRef = setInterval(function printNext() {
        let next = first + second
        console.log(next)

        first = second
        second = next

        counter++

        if(counter == limit) clearInterval(intervalRef)
    }, 1000)
}

// B)
function printFibonacciTimeouts(){
    let [first, second] = [1,1]
        console.log(first)
        console.log(second)

        setTimeout(function printNext(first, second){
            let next = first + second
            console.log(next)

            setTimeout(printNext, 1000, second, next)

        }, 1000, first, second)
}

// printFibonacci(10)


//  Exercise 5


// let car = {
// make: "Porsche",
// model: '911',
// year: 1964,

// description() {
// console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
// }
// };
// car.description(); //works
// setTimeout(car.description, 200); //fails

// setTimeout(() => car.description(), 200)

// car = {...car, year: 2018}

// // C) yes, because the delay from the setTimeout delays the function from running until after the year is changed on the object

// let describeCar = car.description.bind(car)

// setTimeout(describeCar, 500)

// car = {...car, model: 'GTS'}


//  Exercise 6

function multiply(a, b){
    console.log( a * b)
}

Function.prototype.delay = function(ms) {
    let originalFunction = this
    return function(arg1, arg2) {
        setTimeout(originalFunction, ms, arg1, arg2)
    }
}

// multiply.delay(500)(5,5)

Function.prototype.delayB = function(ms){
    let originalFunction = this
    return function(){
        setTimeout(() => originalFunction.apply(this,arguments), ms)
    }
}

multiplyFour = (a,b,c,d) => {
    console.log(a * b * c * d)
}

// multiplyFour.delayB(1000)(5,5,5,5)


//  Exercise 7

class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}

class precisionClock extends DigitalClock {
    constructor(prefix, precision) {
        super(prefix)
        this.precision = precision ? precision : 1000
    }
    start() {
        this.display()
        this.timer = setInterval(() => this.display(), this.precision)

    }
}

class alarmClock extends DigitalClock{
    constructor(prefix, wakeupTime) {
        super(prefix)
        this.wakeupTime = wakeupTime ? wakeupTime : '07:00'
    }
    checkDisplay(){
        const now = new Date()
        const wakeupHours = this.wakeupTime.substring(0,2)
        const wakeupMins = this.wakeupTime.substring(3)
    
        if(now.getHours() == wakeupHours && now.getMinutes() == wakeupMins){
            console.log('Wake up')
            this.stop()
        } else {
            this.display()
        }
    }
        start(){
            this.checkDisplay();
            this.timer = setInterval(() => this.checkDisplay(), 1000)
        
    }
}

// const myAlarmClock = new alarmClock('My Alarm Clock', '17:00')
// myAlarmClock.start()

// const myPreciseClock = new precisionClock('my precise clock:', 1000)
// myPreciseClock.start()

// const myClock = new DigitalClock('my clock:')
// myClock.start()


//  Exercise 8

// function orderItems(itemName) {
// return `Order placed for: ${itemName}`;
// }

// // const validatedOrderItem = validateStringArg(orderItems);
// // console.log(validatedOrderItem("Apple Watch")); 


// function validateStringArg(fn) {
//     return function(arg) {
//         if(typeof arg !== 'string'){
//             throw new Error('Arguement must be a string')
//         }
//         return fn(arg)
//     }
// }


// function orderItems(...itemNames) {
//     return `Order placed for: ${itemNames.join(', ')}`
// }

// function validateStringArgs(fn){
//     return function(){
//         for(let arg of arguments) {
//             if(typeof arg !== 'string'){
//             throw new Error('Arguement must be a string')
//         }
//         }
//         return fn.apply(this, arguments) 
//     }
// }


// const validatedOrderItems = validateStringArgs(orderItems);
// const validatedOrderItem = validateStringArg(orderItems);

// try {
//     console.log(validatedOrderItems('Apple watch'))
// } catch (err) {
//     (err)
// }

// console.log(validatedOrderItems('Apple Watch', 'Iphone'))


//  Exercise 9

function randomDelay() {

let delay = Math.ceil(Math.random() * 20);
return new Promise(resolve => setTimeout(resolve, delay*1000));
}
randomDelay()
.then((delay) => console.log('There appears to have been a delay.'));
function randomDelayB() {
let delay = Math.ceil(Math.random() * 20);
return new Promise((resolve, reject) =>
setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000));
}
randomDelayB()
.then(() => console.log('Successful delay'))
.catch(() => console.log('Failed delay'));
function randomDelayD() {
let delay = Math.ceil(Math.random() * 20);
return new Promise((resolve, reject) =>

setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000, delay));
}
randomDelayD()
.then((delay) => console.log('Successful delay of '+delay+' seconds'))
.catch((delay) => console.log('Failed delay of '+delay+' seconds'));



// Exercise 10


import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}
});
return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));
Answer:
fetchURLData('https://jsonplaceholder.typicode.com/todos/1') //works, prints result
.then(data => console.log(data))
.catch(error => console.error(error.message));
fetchURLData('https://jsonplaceholder.typicode.com/fake') //doesn't exist, prints catch
.then(data => console.log(data))
.catch(error => console.error(error.message));
async function asyncFetchURLData(url) { //a)
let fetchResponse = await fetch(url);
if (fetchResponse.status === 200) {
let responseJson = await fetchResponse.json();
return responseJson;
} else {
throw new Error(`Request failed with status ${fetchResponse.status}`);
}
}
async function asyncFetchMultipleURLData(urls) { //c)
return Promise.all(urls.map(async (url) => {
let response = await fetch(url);
return response.json();
}));
}
try {
let responseData1 = await
asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/1');
console.log(responseData1) //works
let responseData2 = await
asyncFetchMultipleURLData(['https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2']);
console.log(responseData2) //works
let responseData3 = await
asyncFetchURLData('https://jsonplaceholder.typicode.com/fake');
console.log(responseData3) //fails
} catch (error) {
console.log(error.message);}