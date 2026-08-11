function findAverage(numbers){
    let total = 0;
    for(let i = 0; i< numbers.length;i++){
        total += numbers[i];
    }
    let average = total/numbers.length;
    return average;
}
// console.log(findAverage([1,2,3,4,5]));





// ***2***
function sumEvenNumbers(prices){
    let total = 0;
    for (let i=0; i<prices.length;i++){
        if(prices[i]%2===0){
            console.log("i->",i,prices[i]);
            total += prices[i];
        }
    }    
    return total;
}
console.log(sumEvenNumbers([20,61,15,80]));