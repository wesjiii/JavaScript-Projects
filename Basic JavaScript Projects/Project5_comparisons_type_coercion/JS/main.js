document.write(typeof "Word"); //writing and displaying "typeof" operator

document.write("five" + 5); //writing an expression combining a string and a number

console.log(5==5); //writing "==" operator to show if 5 is equal to 5, but within the console instead on printing on screen

console.log(5>10); //writing ">" operator which will display false in console

console.log(5<10); //writing "<" operator which will display true in console

document.write(5 === 20);//writing "===" operator to show if the data on the left is equal to the right. Also if it's the same data type - should read false

document.write(5>2 && 5>3);//writing "&&" operator which should display true since both ">" operators are true

document.write(5>2 || 5>20);//writing the "||" operator which should display true since only one value has to be true

function not_Function() {//writing the label for the funtion to be called in the HTML
    document.getElementById("Not").innerHTML = !(5>10); //calling the id from the HTML ("Not"), and also checking the statement "5 is not greater than 10", which should run true
}