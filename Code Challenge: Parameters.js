function goodDay(name) {
    var today = new Date();
    var time = today. getHours()
    console.log(today);
    console.log(time);
    if (name == "Count Dooku") {
        console.log("I'm coming for you, Dooku!");
    } else {
            if (time < 12) {
                console.log("Good Morning, " + name + "!")
            }
            else if (time > 12 && time < 17) {
                console.log("Good Afternoon, " + name + "!")
            }
            else {
                console.log("Good Evening, " + name + "!")
            }
        }
}

goodDay("Kari");
goodDay("Count Dooku");