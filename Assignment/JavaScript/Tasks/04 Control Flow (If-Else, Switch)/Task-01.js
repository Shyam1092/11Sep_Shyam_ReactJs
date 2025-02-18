// Write a JavaScript program to check if a number is positive, negative, or zero using an if-else statement.

function checkNumber(num){

    if(num>0){
        console.log("The number is positive");
    }
    else if(num<0){
       console.log("The number is nagative");
    }
    else{
        console.log("The number is zero")
    }
}

checkNumber(-5);   
checkNumber(8);   
checkNumber(0); 