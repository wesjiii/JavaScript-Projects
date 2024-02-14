function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough ":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Person(first, last, age, eye) { //adding constructor label with set of data labels
    this.person_firstName = first; //adding variable to data
    this.person_lastName = last; //adding variable to data
    this.person_age = age; //adding variable to data
    this.person_eyeColor = eye; //adding variable to data
}  
var Jack = new Person("Jack", "Harlow", 25, "Brown"); //assinged variable and adding new data into "Person" constructor using "new" and inputting data "Jack, Harlow, 25, Brown"
var Emily = new Person("Emily", "Smith", 28, "Blue"); //assinged variable and adding new data into "Person" constructor using "new" and inputting data "Emily, Smith, 28, Blue"
var Erik = new Person("Erik", "Chamberlin", 45, "Green"); //assinged variable and adding new data into "Person" constructor using "new" and inputting data "Erik, Chamberlin, 45, Green"
function myFunction() { //adding label to function which will be called in HTML file
    document.getElementById("Keywords_and_Constructors").innerHTML = //calling the HTML ID that we want to call in this function and telling it to add the result of this function into the HTML
    "Erik has " + Erik.person_eyeColor + " colored eyes and his last name is " + Erik.person_lastName //using identifiers to pull data
    " and he is " + Erik.person_age + " years old."; //using identifier to pull data
}

function count_Function() { //labeling the function to be called on in HTML file
    document.getElementById("Nested_Function").innerHTML = Count (); //pulling the ID from HTML file to be called in JS file
    function Count () { //creating label for nested function
        var Starting_point = 10; //adding value of 10 to variable
        function Plus_one() {Starting_point += 1;} //adding label to nested funciton and giving it an action to be used in the following function lines
        Plus_one(); //calling for the plus one funciton in the previous line to add 1, if the Starting point is equal to "Starting_point" labeled on line 4
        return Starting_point; // telling function to give sum of "Starting_point"
    }
}