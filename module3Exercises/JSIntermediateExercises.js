// exercise 1

function upperCaseCity(city) {
    words = city.toLowerCase().split(' ')

    for(let i = 0; i < words.length; i++) {
        let letters = words[i].split('')
        letters[0] = letters[0].toUpperCase()
        words[i] = letters.join('')
    }
    console.log(words.join(' '))
}

// upperCaseCity('san diego')

// exercise 2

function truncate(str, max) {
    if(str.length <= max) {
        console.log(str)
    } else
    console.log(str.slice(0, max) + '...')
}

// truncate("and we're the cleveland browns", 18)
// truncate("and we're the cleveland browns", 10)
// truncate("and we're the cleveland browns", 25)
// truncate("and we're the cleveland browns", 35)


// exercise 3
const animals = ['Tiger', 'Giraffe']
animals.push('Zebra')
animals.push('Rhino')
animals.unshift('Panda')
animals.unshift('Lion')
// console.log(animals)
animals.sort()
// console.log(animals)

function replaceMiddleAnimal(replacedAnimal){
    animals.splice(2, 1, replacedAnimal)
    console.log(animals)
}

// replaceMiddleAnimal('Snow Leopard')

function findMatchingAnimals(beginsWith){
    const prefix = beginsWith.toLowerCase()
    console.log(animals.filter(animal =>
        animal.toLowerCase().startsWith(prefix))
    )
}
// findMatchingAnimals('R')

// exercise 4

function camelCase(cssProp) {
   console.log(cssProp.replace(/-(\w)/g, function(match, char){
    return char.toUpperCase()
   }))
}
// camelCase('margin-left')
// camelCase('background-image')
// camelCase('display')

//  exercise 5

let twentyCents = 0.20
let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2)
let fixedTen = tenCents.toFixed(2)

// console.log(fixedTwenty + fixedTen) // its trying to concatenate the two variables

function currencyAddition(float1, float2){
    const result = float1 + float2
    console.log(result.toFixed(2))
}

// currencyAddition(0.20, 0.10)

function currencyOperation(float1, float2, operation){
    switch(operation){
        case '+':
            result = float1 + float2
            break;
        case '-':
            result = float1 - float2
            break;
        case '*':
            result = float1 * float2
            break;
        case '/':
            result = float1 / float2
    }
    console.log(result.toFixed(2))
}

// currencyOperation(0.20, 0.3, '+')
// currencyOperation(0.20, 0.30, '/')
// currencyOperation(0.20, 0.30, '*')
// currencyOperation(0.20, 0.30, '-')

// exercise 6

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const footballTeams = ['browns', 'ravens', 'browns', 'steelers', 'steelers', 'bengals', 'browns']

function unique(duplicatesArray){
    const uniqueSet = new Set(duplicatesArray)  // converting an array to a set will remove duplicates
    const uniqueArray = [...uniqueSet]          // convert the set BACK to an array to print

    console.log(uniqueArray)
}

// unique(colors)
// unique(testScores)
// unique(footballTeams)

// exercise 7

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId){
    const bookFound = books.find(book => book.id == bookId)
    console.log(bookFound)
}
// getBookTitle(2)
// getBookTitle(4)

function getOldBooks(){
    const booksUnder1950 = books.filter(book => book.year < 1950)
    console.log(booksUnder1950)
}
// getOldBooks()

function addGenre(booksArray, bookGenre){
    console.log(booksArray.map(book =>{
        return {
            ...book,
            genre: bookGenre
        }
    }))
}

// addGenre(books, 'Classic')



//  Exercise 8


const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map()
phoneBookDEF.set('Derek', '0455227514')
phoneBookDEF.set('Edward', '0455226219')
phoneBookDEF.set('Frank', '0455229834')

// console.log(phoneBookABC)
// console.log(phoneBookDEF)

phoneBookABC.delete(3)
phoneBookABC.set('Caroline', '0455227254')

// console.log(phoneBookABC)

function printPhoneBooks(contacts){
    console.log(contacts)
}

// printPhoneBooks(phoneBookABC)

const combinedPhoneBooks = new Map([...phoneBookABC, ...phoneBookDEF])

// console.log(combinedPhoneBooks)

//  Exercise 9

let salariesObject = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
}

let salariesMap = new Map( Object.entries(salariesObject) )


highestSalary = (salaryMap) => {
    let highestName = ''
    let highestPay = 0
    for (const [name, salary] of salaryMap){
        if (salary > highestPay) {
            highestPay = salary
            highestName = name
        }
    }
    console.log(highestName)
}

// highestSalary(salariesMap)


//  Exercise 10

// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')
// console.log(today.getMinutes() + ' minutes have passed so far today')
// console.log(today.getSeconds() + ' seconds have passed so far today')


const age = new Date(2001, 7, 21)
// console.log(age)

calculateAge = (dob) => {
    const today = new Date()
    let day = today.getDate() - dob.getDate()
    let month = today.getMonth() - dob.getMonth()
    let year = today.getFullYear() - dob.getFullYear()

    if(day < 0) {
        let daysLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate
        day += daysLastMonth
        month--
    }
    if (month < 0) {
        month += 12
        year --
    }
    console.log(`I am ${year} years, ${month} months, and ${day} days old`)
}

// calculateAge(age)



daysInBetween = (date1, date2) =>{
    let day = date1.getDate() - date2.getDate()
    let month = date1.getMonth() - date2.getMonth()
    let year = date1.getFullYear() - date2.getFullYear()

    if(day < 0){
        let daysLastMonth = new Date(date1.getFullYear(), date1.getMonth(), 0).getDate
        day += daysLastMonth
        month--
    }
    if (month < 0) {
        month +=
        year--
    }
    console.log(`The difference is ${year} years, ${month} months, and ${day} days`)
}

const firstDate = new Date(2025, 6, 20)
const secondDate = new Date(2023, 7, 13)

// daysInBetween(firstDate, secondDate)