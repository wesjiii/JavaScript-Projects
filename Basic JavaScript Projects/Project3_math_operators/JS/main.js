function addition_Function() { //created funciton name "addition_Function" to be called on in HTML file
    addition = 7 + 7; //created and addition problem & assinged variable
    document.getElementById("Math").innerHTML = "7 + 7 = " + addition; //assigning to ID "Math" to that it gets displayed when user clicks button
}

function subtraction_Function() { //created funciton name "subtraction_Function" to be called on in HTML file
    subtraction = 20 - 10; //created subtraction problem & assinged variable
    document.getElementById("Math2").innerHTML = "20 - 10 = " + subtraction; //assigning to ID "Math2" to that it gets displayed when user clicks button
}

function multiplication_Function() { //created funciton name "multiplication_Function" to be called on in HTML file
    multiplication = 7 * 3; //created multiplication problem & assigned variable
    document.getElementById("Math3").innerHTML = "7 * 3 = " + multiplication; //assigning to ID "Math3" to that it gets displayed when user clicks button
}

function remainder_Function() { //created funciton name "remainder_Function" to be called on in HTML file
    remainder = 10 % 3; //created remainder problem & assigned variable
    document.getElementById("Math4").innerHTML = "the remainder of 10/3 = " + remainder; //assigning to ID "Math4" to that it gets displayed when user clicks button
}


function increment_Function() { //created funciton name "increment_Function" to be called on in HTML file
    var X = 23; //assigned the variable X to the number 23
    X++; //created increment & assigned variable
    document.getElementById("Math5").innerHTML = "the next increment is " + X; //assigning to ID "Math5" to that it gets displayed when user clicks button
}

function decrement_Function() { //created funciton name "decrement_Function" to be called on in HTML file
    var X = 23; //assigned the variable X to the number 23
    X--; //created decrement & assigned variable
    document.getElementById("Math6").innerHTML = "the next decrement of 23 is " + X; //assigning to ID "Math6" to that it gets displayed when user clicks button
}

window.alert(Math.random() * 100); //causes window to pop up on screen with a random number mulitplied by 100