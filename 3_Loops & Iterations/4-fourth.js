const newObj = {
    game1: "God Of War",
    game2: "Spider-Man", 
    game3: "Batman", 
    game4: "Need For Speed", 
}

for (const key in newObj) {
    // console.log(newObj.key)
    // console.log(newObj[key])
    // console.log(`My liked games are ${key} ${newObj[key]}`)
}

const programing = ["JavaScript", "Python", "C", "C#", "C++", "Rust", "Go lang", "Ruby", "Java", "Swift"];

// console.log(programing.length)

// length count start with 1

for (const key in programing) {
    console.log(key)
    // console.log(programing[key])
}








// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }