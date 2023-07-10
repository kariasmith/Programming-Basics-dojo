/*
Story: IoT device that pops out a piece of candy every time a runner reaches 2 miles on a treadmill
 but stops giving candy out at mile 6.  When to give out candy and when to stop.

    How do we know we need a loop here?  We are repeating a step of giving out a piece of candy every 2 miles.
    What's the starting point of the loop?  The loop will start at 0, but the candy will start at 2.
    When should the loop stop?  The candy stops at mile 6.
    How will the loop know when to stop?  When mile marker is greater than 6.
    What's incrementing for each iteration of the loop?  The mile marker counter is what will be incremented.
    What variables do we need?  mile marker

**** Remember to use ; instead of :
Stop an infinite loop: You can press ctrl-c which sends SIGINT signal that immediately 
interrupts your program and stops it ( Unless you have a custom handler for this signal ;) )
*/

for (mile_marker = 0; mile_marker < 7; mile_marker++){

    if (mile_marker == 2 || mile_marker == 4 || mile_marker == 6) {
        console.log(mile_marker);
        console.log("Here's a piece of candy Great job!");
    }
    else {
        console.log(mile_marker);
        console.log("Not an even mile marker keep going!");
    }
}

/*
Ninja Bonus

Create a new loop where the runner only gets a piece of candy every 2 miles AND if they were going faster than 5.5 miles per hour.
*/
//Hmm I took the initial ask as only giving out every 2 miles.  If you need me to redo the above please let me know!

