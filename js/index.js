// 125. Random Number Generator in JS

// Love calculator using if statements

let n = Math.random() * 1
console.log(n)
n = Math.round(n)
console.log(n)


if (n === 1) {
    console.log("I love you")
} else {
    console.log("I love you not anymore")
}

// Love calculator using percentages

let firstName = "Steve"

let secondName = "Topanga"

let randomGenerator = (Math.floor(Math.random() * 100)) + 1

console.log(`Hey ${firstName}, ${secondName} loves you ${randomGenerator}% `)

// Control Statements
// Control Flow -kw

// if (conditions go here){
//   execute();
// } else {
// if above conditions aren't true execute these
// }


// 127. 

// === is equal to 
// !== is not equal to 
// >   is greater than 
// <   is less than
// >=  is greator or equal to
// <=  is lesser or equal to

// 128. Combining Comparators

// && and 
// || or
// ! not or the opposite


// Weather Conditions

// if the temperature is above bmi72 t-shirt
// if the temperature is below 72 and light longsleeve
// if the temperature is below 60 jacket/sweater

// let temperature = prompt("What is the temperature?")

// if (temperature > 72) {
//     console.log("T-shirt weather is here!")
// } 
// if (temperature < 72 && temperature > 60 || temperature == 60)  {
//     console.log("Put on that light longsleeve t-shirt; but make sure it's light!")
// } else {
//     console.log("Put on that jacket or sweater!")
// }


// 129. Leap Year 

// A leap year is 
// on every year that is evenly divisible by 4
// except every year that is evenely divisible by 100 
// unless the year is also evenly divisible by 400 

console.log("-----leap year challenge----")


// If the year is divisible by 4 that is the first check.

// If the year is evenely divisible by 100 it is not 
// but it is if the number is evenely divisible by 400. 

function leapYear(number) {
    console.log(number)
    if (number % 4 === 0) {
        if (number % 100 === 0) {
            if (number % 400 === 0) {
                return "Leap year"
            } else {
                return "Not a leap year"
            }
        } else {
            return "Not a leap year"
        }
    
    } else {
        return "Not a leap year"
    }
}

let isItLeapYear = leapYear(5)
console.log(isItLeapYear)

// Collections: Working with Javascript Arrays
console.log("--------Arrays--------")

function checkList(name){
    let checkName = name
    checkName = checkName.slice(0,1).toUpperCase() + checkName.slice(1, checkName.length + 1)
    console.log(checkName)
    return checkName
}

let letMeCheck = checkList("Steve")
let array = ["Steve", "Khalifah", "Josh", "Mahi"]

if (array.includes(letMeCheck)) {
    console.log("Yes")
} else {
    console.log("No")
}






// console.log(array.includes())

// Push and Pop 

// let output = [];

// output.push(1)
// output.push(2)

// console.log(output)

// output.pop()
// console.log(output)

// Function with Push and Pop
// let output = [];
// let count = 1;
// First is it divisible by 3? if yes I need to ask if it's divisible by 5 if so then it's fizz buzz

// solution 1
// function fizzBuzz() {   
    
//     if (count % 3 === 0) {
//         if (count % 15 === 0) {
//             output.push("fizzbuzz")
//         } else {
//             output.push("fizz")
//         }
//     } 
//     else if (count % 5 === 0) {
//         if (count % 15 === 0 ){
//             output.push("fizzbuzz")
//         } else {
//             output.push("buzz")
//         }
//     } else {
//         output.push(count)
//     }
//     console.log(output)
//     count ++;


// }

// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()

// solution with while loop
console.log("-----FizzBuzz with Loop------")
let arrayArray = []
let count = 1

function fizzBuzzWithWhileLoop() {

    while (count < 100) {
    if (count % 3 === 0 && count % 5 === 0) {
            arrayArray.push("fizzbuzz")
        } else if (count % 3 === 0) {
            arrayArray.push("fizz")
        } else if (count % 5 === 0) {
            arrayArray.push("buzz")
        } else {
            arrayArray.push(count)
        }
    console.log(arrayArray)
    count ++;
    }
}

fizzBuzzWithWhileLoop()

// solution with for loop
let fizzBuzzArray = []

function fizzBuzzWithForLoop() {
    for(let number=0; number<101; number++) {
        if (number % 3 === 0 && count % 5 === 0){
            fizzBuzzArray.push("fizzbuzz")
        } else if (number % 3 === 0) {
            fizzBuzzArray.push("fizz")
        } else if (number % 5 === 0) {
            fizzBuzzArray.push("buzz")
        } else {
            fizzBuzzArray.push(number)
        }

    }
    console.log(fizzBuzzArray)
}

// 
function whosPaying() {
    
        let list = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
        console.log(list.length)
        
        let random = Math.floor(list.length * Math.random())
        console.log(random)
        console.log(list[random])
        list = list[random]
        console.log(list)
        return list+ " is going to buy lunch today!"
          
    }

    let lunch = whosPaying()
    console.log(lunch)


    // While Loops

    // while (something is true) {
    //     // do something 
    // }

    let i = 1;

    while (i < 10) {
        console.log(i)
        i++;
    } 

    // 99 Bottles of beer on the wall function

let beerCount = 99;
function beer(){   
    while (beerCount >= 0) {
        if (beerCount > 0) {
            console.log(beerCount + " bottles of beer on the wall." + beerCount + " bottles of beer. Take 1 down pass it around, " + (beerCount -1) + " bottles of beer on the wall.")

            beerCount --;    
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall. 99 bottles of beer on the wall")   
            
            beerCount --;  
        }   
    }
}

beer()

// For Loops

// The difference between for loops and while loops is that While loops have in mind an end goal while for loops have a definitive amount of iterations. 
   
// i=0 is the start.
// i<2 is the end. 
// i++ is the change. 
for (i=0; i<2; i++) {
    console.log(i)
}

// While loops is searching for a state. I.e run a program based a state of something.

// But for the for loop you are iterating many times.

// Fibonacci 

// The idea is that the function will take an input and whatever the input is - will be the amount of items in the array. 
// The logic is that the first two numbers are added together to get the third. 
// [0, 1, 1, 2, 3, 5, 8, 13, 21]
// Essentially minus the first 2 items. You will be adding number 1 + number 2 to get number 3. 

console.log("-----Fibonacci------")

function fibonacci(number) {
// With this one we want it to add the previous two numbers in array to get the next entry. 
let fibArray = []
for (i=0; i<number; i++) {  
    if (i === 0 || i === 1) {
        fibArray.push(i)      
    } else {
        let lastPosition = fibArray[fibArray.length - 1]
        let nextToLastPosition = fibArray[fibArray.length - 2] 
        fibArray.push(lastPosition + nextToLastPosition)  
    }
}
return fibArray
}


let answer = fibonacci(10)
console.log(answer)