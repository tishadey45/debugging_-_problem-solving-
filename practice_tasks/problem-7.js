function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0; i <= numbers.length; i++) { // bug #1 is here
    if (numbers[i] % 2 === 1) {                  // bug #2 is here
      odds.push(numbers[i]);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); 
