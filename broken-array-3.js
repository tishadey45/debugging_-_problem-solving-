// ***1***
function getLastTwoElements(array) {
    return array.slice(array.length-2,array.length);
}
// console.log(getLastTwoElements([10.20,30,40,300,25]))




// ***2*** 
function findIndexOfValue(arr,target){
    for(let i =0;i<arr.length;i++){
        console.log("i->",i,arr[i]);
        if(arr[i].toString()===target.toString()){
            return i;
        }
    }
    return -1;
}
// console.log(findIndexOfValue([10,20,30],30));






// ***3***
function averageArray(arr){
    let total = 0;
    let count = arr.length;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>0){
            total+=Number(arr[i].toFixed(2));
        }
    }
    return total/count;
}
console.log(averageArray([40,10,22,15]));