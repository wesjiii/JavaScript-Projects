function my_Animals() { //assigning name or label to the function
    var Animal = { //assigning variable name
        cats: 12, // assigning a value of 12 to the label cats
        dogs: 10, // assigning a value of 10 to the label dogs
        fish: 2, // assigning a value of 2 to the label fish
        rabbits: 15 // assigning a value of 15 to the label rabbits
    };
    delete Animal.fish; //deleting the varable fish
    document.getElementById("one").innerHTML = Animal.fish; //telling the function to provide the value for cats once the user interacts with all lines affected by the "one" ID
}
