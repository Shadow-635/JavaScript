const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    //console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)


// console.log(myTotal)

const newArr = [3, 4, 5, 6, 4, 5, 6, 1]

const newArrTotal = newArr.reduce( (accValue, currentValue) => accValue + currentValue , 0);


console.log(newArrTotal)
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);