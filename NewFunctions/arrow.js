const one = {
    userName: "Shodow",
    wellComeM: function () {
        console.log(`Hello, Mr ${this.userName}`)
    }
};


// one.wellComeM()
// one.userName = "New"
// one.wellComeM()

const addTwo = (num1, num2) => ({username: "shadow"});

// console.log(addTwo(3, 5).username);


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')