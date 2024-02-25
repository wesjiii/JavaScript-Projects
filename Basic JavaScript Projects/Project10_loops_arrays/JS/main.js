//start while loop
function Call_Loop() { //assigning label
    var Digit = ""; //assigning variable
    var X = 1; //assigning variable
    while (X < 11) { //using while loop so that the following function will be called whole X is less than 11
        Digit += "<br>" + X; //adding digit to X which will also be the sum of digit (Digit = Digit + X)
        X++; //adding 1 to X
    }
    document.getElementById("Loop").innerHTML = Digit;
} //end while loop

//start for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //assigning variable and creating array
var Content = ""; //assigning variable
var Y; //assigning variable
function for_Loop() { //assigning label
    for (Y = 0; Y < Instruments.length; Y++) 
        Content += Instruments[Y] + "<br>"; { //using for loop and telling the function to add (Y++) each instrument in the length of the array
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //calling function to be drawn in HTML
}
//end start loop

//start array
function array_Function() { //assigning label to function
    var Cat_Picture = []; //assigning label to variable 
    Cat_Picture[0] = "sleeping"; //assigning strings to array positions
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + "."; //calling function to be drawn in html and array position 2
}
//end array loop

//start let
var X = 23 //assigning 23 to X
document.write(X); //printing X on screen
{
    let X = 45; //assigning 45 to x
    document.write("<br>" + X); //printing X on the screen along with a <br> to provide a break
}
document.write("<br>" + X); //printing X on the screen along with a <br> to provide a break
//end let