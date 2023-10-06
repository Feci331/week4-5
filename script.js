/* let x = "asd"
let y = 12
let z = false

let arr =["egy", "kettő", "három"]
let arr2 =[12, 2, 3]
let arr3 =[ture, false]
let arr4 =["alma", 1, true]

let obj1 = {
    key: 
    key2: 
    key3: 
    key4: 
    key5: {
        nestkey
    }



}

 */
/* function myFunc() {
    console.log("this is my func")
}

myFunc()

function greetMe(param) {
    console.log(`Szia ${param}!`)
}


greetMe("argument")
 */

/* function addTwoNumbers(number1, number2) {
    let sum = number1 + number2
    console.log(`the sum of two niumbers (${number1}, ${number2}) is: ${sum}`)
    return sum
}

let resultOfAddTwoNumbers = addTwoNumbers(10, 2)
console.log(`the result of resultOfAddTwoNumbers is: ${resultOfAddTwoNumbers}`)

 */



function cbExample () {
    console.log("i am calback function")
}

function funcExample(name, callback) {
    console.log(`hello ${name}`)
    callback()
}

funcExample("Feri", cbExample)


