for (let i = 0; i <= 200; i++) {
    const element = i;
    // console.log(element)
}
for (let i = 0; i <= 200; i++) {
    for (let a = 0; a < 11; a++) {
        // console.log(i, a)
    }
}

for (let i = 2; i <= 20; i++) {
    for (let a = 1; a <= 10; a++) {
        // console.log(i, "*", a, " =", i*a)
    }
}


let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break // continue;
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
  // console.log(`Value of i is ${index}`);
    
}
