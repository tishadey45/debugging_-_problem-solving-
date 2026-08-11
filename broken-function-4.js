// ***1***
function calculateTotal(price,tax){
let total = price +tax;
console.log(total);
return total;
}

// let finalAmount = calculateTotal(100,20);
// console.log(finalAmount+20);






// ***2***
function introduce(name,year,city){
    let currentYear = new Date().getFullYear();
    let age = currentYear - year;
    return "Hi, my name is "+name+" and I am "+age+" years old. I live in "+city+".";
}
// console.log(introduce("Alex", 2006, "Dhaka"));








// ***3***
function applyDiscount(price,percent){
   return price - (price * percent) / 100;  
}

function describeOrder(name,total){
    let discounted = applyDiscount(total,5);
    console.log("discounted",discounted);
    return name+"s order total is $"+discounted+"after discount.";
}
console.log(describeOrder("sum", 100));