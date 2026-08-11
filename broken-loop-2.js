// ***1***
function sumRange(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    console.log("i->",i);
    total += i;
    // return total;
  }
  return total;
}
// console.log(sumRange(5));





// ***2***
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += Number(numbers[i].toFixed(2));
    }
    return total;
}
// console.log(sumArray([10,20.2244,30.524]));



// ***3***
function countEven(numbers){
    let count =0;
    for(let i = 0; i<numbers.length;i++){
        console.log("i->",i,numbers[i]);
        if(numbers[i]%2===0){
            count++;
        }
    }
    return count;
}
console.log(countEven([2,3,6,5,4,7,8,10]));