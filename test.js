
function summationOfArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length ; i++) {
        sum += Number(arr[i].toFixed(2));
        console.log("i->",i);
    }
    return sum;
}

// [10, 20, 30] = 60 

console.log(summationOfArray([10.234567, 20, 30]));
