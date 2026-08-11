// ***1***
function checkAdult(age) {
    // if(age = 18)
    if((age>=18)){
        return "Adult";
    }
    return "Minor";
}
// console.log(checkAdult(19));



// ***2***
function canApply(age,hasNID){
    // if(age ==18 hasNID)
    if(age >= 18 && hasNID){
        return "Eligible";
    }
    return "Not Eligible";
}
// console.log(canApply(35,true));
// console.log(canApply(17,true));
// console.log(canApply(35,false));



// ***3***
function canAttendFinalExam(attendance, assignmentMarks){
    if(attendance >= 90 && assignmentMarks >= 80){
        return "Eligible with scholarship";
    }else if(attendance >= 80 && assignmentMarks >= 50){
        return "Eligible for final exam";
    }else{
        return "Not Eligible";
    }

}
console.log(canAttendFinalExam(90, 80))
console.log(canAttendFinalExam(80, 50))
console.log(canAttendFinalExam(70, 40))