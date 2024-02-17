function full_Sentence() { //labeling function to be called in HTML
    var part_1 = "I have "; //assigning variable
    var part_2 = "made this "; //assigning variable
    var part_3 = "into a complete "; //assigning variable
    var part_4 = "sentence."; //assigning variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //assigning variable to part1 and utilizing concat method
    document.getElementById("Concatenate").innerHTML = whole_sentence; //inputting and calling the whole_sentence variable to be shown where the concatenate ID is
}

function slice_Method() { //labeling function to be called in HTML
    var Sentence = "All work and no play makes Johnny a dull boy."; //assigning variable
    var Section = Sentence.slice(27,33); //assigning variable to equal the sentence variable and utilize the slice method
    document.getElementById("Slice").innerHTML = Section; //inputting and calling the section variable to be shown where the slice ID is
}

function uppercase_Method() { //labeling function to be called in HTML
    let text = "Hello World!"; //assigning variable
    let result = text.toUpperCase(); //assigning variable to the text variable and utilizing the toUpperCase() Method
    document.getElementById("upper").innerHTML = result; ////inputting and calling the result variable to be shown where the upper ID is
}

function search_Method() { //labeling function to be called in HTML
    let text = "Mr. Blue has a blue house";//"blue" is the 4th position (0,1,2,3,4) - in the string
    let position = text.search("Blue"); //assigning variable to text variable and utilizing the search() method
    document.getElementById("search").innerHTML = position; //inputting and calling the position variable to be shown where the search ID is
}

function string_Method() { //labeling function to be called in HTML
    var X = 182; //assigning variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //inputting and calling the X variable that's using the toString() variable to be shown where the numbers_to_string ID is
}

function precision_Method() { //labeling function to be called in HTML
    var X = 12938.3012987376112; //assigning variable
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //inputting and calling the X variable that's using the toPrecision() variable to be shown where the precision ID is
}

function fixed_Method() { //labeling function to be called in HTML
    let num = 5.56789; //assigning variable
    let n = num.toFixed(); //assigning variable and utilizing toFixed() method
    document.getElementById("to_fixed").innerHTML = n; //inputting and calling the n variable that's to be shown where the to_fixed ID is
}

function value_Method() { //labeling function to be called in HTML
    let text = "Hello World!"; //assigning variable
    let result = text.valueOf(); //assigning variable to the text variable and utilizing the valueOf() method
    document.getElementById("value").innerHTML = result; //inputting and calling the result variable that's to be shown where the value ID is
}