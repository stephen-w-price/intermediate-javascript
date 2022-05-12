let arrayArray = []
let count = 1

function fizzBuzz() {

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