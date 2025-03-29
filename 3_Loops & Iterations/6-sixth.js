const nums = [2, 3, 4, 5, 6, 2, 5, 6, 3, 8];


const hold = nums.filter( (num) => num > 4)

const hold2 = nums.filter( (num) => {
    return num > 4
})

// console.log(hold)

const forNum = [];

nums.forEach( (value) => {
    if (value > 4) {
        forNum.push(value)
    }
})

console.log(forNum)