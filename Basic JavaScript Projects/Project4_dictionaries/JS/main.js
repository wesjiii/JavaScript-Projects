function my_Animals() {
    var Animal = {
        cats: 12,
        dogs: 10,
        fish: 2,
        rabbits: 15
    };
    delete dogs.fish;
    document.getElementById("one").innerHTML = dogs.fish;
}