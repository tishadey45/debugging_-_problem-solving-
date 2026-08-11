function isEmpty(str) {
  if (str.length == 0) { // find the bug
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  // Expected: true
console.log(isEmpty("hi"))
