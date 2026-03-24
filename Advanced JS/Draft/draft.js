// const playerGuess = 7
// const correctAnswer = 6

// const message = playerGuess === correctAnswer ? "Correct!" : playerGuess > correctAnswer ? "Too high!" : "Too low!"

// console.log(message)

// import addFunc from "./addFunc.js"
// import {hoursInDay as hours} from "./addFunc.js"

// console.log(addFunc(5, 10))
// console.log(hours)


// Date and Time objects

// current date and time
// const now = new Date()
// console.log(now.toString())

// year only
// const year = new Date().getFullYear()
// console.log(year)



// const persons = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 }
// ]


function displayWelcomeMessage(Msg = "Welcome", ...names) {

    return names.map(name => `${Msg}, ${name}!`).join(" q")
} 

console.log(displayWelcomeMessage("Hello", "Sami", "Abdulsattar", "Sabrin"))

// Why we can't just use fuckin foreach fuckin loop?!!!!

// function displayWelcomeMessage(Msg = "Welcome", ...names) {

//     names.forEach(name => {
//         console.log(`${Msg}, ${name}!`)
//     });
// }

// displayWelcomeMessage("Wuzzup", "Sami", "Abdulsattar", "Sabrin")