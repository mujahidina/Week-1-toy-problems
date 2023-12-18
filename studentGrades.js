// The function holds the range of grades specified.

function  studentGradeGenerator (marks){
    if (marks >= 79){
       console.log("Your grade is A");
    } else if ( 60 <= marks && marks<= 79){
        console.log("Your grade is B");
    } else if (49 <= marks && marks <= 59){
        console.log("Your grade is C");
    } else if (40 <= marks && marks <= 49){
        console.log("Your grade is D");
    } else if (0 <= marks && marks <= 40){
        console.log("Your grade is E");
    }
    else
        console.log("Please input 0-100!")

}

// Input your grade here (the number entered is just an example).

      studentGradeGenerator(80);    
    