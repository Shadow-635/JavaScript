const userName = "Shadow";

if (!userName) {
    // console.log("Please Enter A User Name")
}else{ //  console.log(`Your User Name is ${userName}`)
};

// console.log(userName.length)

if (userName.length === 0) {
    console.log("UserName is Empty")
}else { // console.log(`Your User Name is ${userName}`)
};

// <, >, <=, >=, ==, !=, ===, !==

const score = 393;

if (score > 100) {
    let power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

const penPrice = 70;

if (penPrice <= 5) {
    console.log(`It is a ball pen & The pen price is ${penPrice}`)
} else if (penPrice <= 50) {
    console.log(`It is a Gel pen & The pen price is ${penPrice}`)
} else if (penPrice <= 100) {
    console.log(`It is a RoloarBall pen & The pen price is ${penPrice}`)
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}