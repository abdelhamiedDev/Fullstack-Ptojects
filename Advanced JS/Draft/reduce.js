const nums = [1, 2, 3, 4, 5]

const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sum)

// rest parameters

function sumAll(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

console.log(sumAll(1, 2, 3, 4, 5))

// if there is a param and rest parameters the single param must be before the rest parameters

function sumWithInitial(initial, ...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initial)
}