/*
The Story: A local theme park has a ride where the rider must be at least 42 inches tall to ride 
and is over the age of 10.
*/

//The video in the lesson used var which we were told in lecture is deprecated.
//The program states must be at least 42 inches in height so I'm starting it at 42 for the future IF condition.
//The program says the age must be over the age of 10 (Really we should be checking if 11 and up, but I'm going with what the site says.)
var minimum_height = 42;
var minimum_age = 10;

/*
Step 2: Create a conditional in which:

    If the rider's height is greater than 42, the console.log should say "Get on that ride, kiddo!". 
    Otherwise, console.log should say "Sorry kiddo. Maybe next year."
*/

if (minimum_height >= 42) {
    console.log("Get on that ride, kiddo!");
} 
else {
    console.log("Sorry kiddo. Maybe next year");
}

/*
Stretch Feature 1

Adjust the conditional statement to require both height (>=42 inches) and age (>=10 years old). 
*/

if (minimum_height >= 42 && minimum_age >= 10) {
    console.log("Get on that ride, kiddo!");
} 
else {
    console.log("Sorry kiddo. Maybe next year");
}

/*
Stretch Feature 2

Adjust the conditional statement to require that either the height requirement (>=42 inches) or the age 
requirement (>=10 years old) must be met in order for the console.log to say "Get on that ride, kiddo!". 
*/

if (minimum_height >= 42 || minimum_age < 10) {
    console.log("Get on that ride, kiddo!");
} 
else if (minimum_height < 42 || minimum_age >= 10) {
    console.log("Get on that ride, kiddo!");
} 
else {
    console.log("Sorry kiddo. Maybe next year");
}