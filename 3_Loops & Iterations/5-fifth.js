const programming = ["JavaScript", "Python", "C", "C#", "C++", "Rust", "Go lang", "Ruby", "Java", "Swift"];

programming.forEach( (value, index, fullArray) =>{}) // console.log(value) );

// Also we can use it using function

// programming.forEach( function (value) {console.log(value)});


function printMe(item){
    console.log(item);
}

// programming.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach((item)=> {
    // console.log(item.languageName)
    
})

const hold = myCoding.forEach((item)=> {
    return item
})

console.log(hold); // don't return any value

