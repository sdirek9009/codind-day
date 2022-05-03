
let dayOfWeek = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];

function getLastValue(myArray) {
    myArray.sort();
    let lastElement = myArray[myArray.length-1];
    console.log(lastElement);
}
getLastValue(dayOfWeek);