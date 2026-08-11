function checkScore(score) {
  if (score >= 50) { //score ki 50 ceye boro naki 50 er soman
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"
