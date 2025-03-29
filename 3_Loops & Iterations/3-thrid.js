let newFun = () => (38 + 87)

// console.log(newFun()) 


let myNumbers = [2, 3, 4, 5, 6, 7, 8]

for (const num of myNumbers) {
    // console.log(num)
}

let myName = "S h a d o w";

for (const letter of myName) {
    // console.log(letter)
    if (letter === " ") {
        continue;
    }
    // console.log(`Each letter of userName with ${letter}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);


for (const [keys, values] of map) {
    // console.log(keys, " = ", values)
}

const newObj = {
    game1: "God Of War",
    game2: "Spider-Man", 
    game3: "Batman", 
    game4: "Need For Speed", 
}

for (const [keys, values] of newObj) {
   // console.log(`Some of my liked games are ${keys} is ${values}`)
}