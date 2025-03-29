const numbers = [3, 4, 6, 2, 2, 5, 1, 5, 6, 7, 8]

const newNum = numbers.map( (value) => value * 10);

// Chining

const newNumber = numbers
                .map( (value) => value * 10)
                .map( (value) => value + 4)
                .filter( (value) => value <= 50);
                
console.log(newNumber)
// .forEach( (value) => {console.log(value)})    not working