/*
MVP

As a user, I need to know how many pieces of cake I will have left if I divide out my cake (which has 12 pieces) for 5 people to eat.

Feature 1

As the designated cake slicer and distributor at our office birthday parties, I want a function called howMuchLeftOverCake 
that passes two variables numberOfPieces and numberOfPeople into it and figures out the remaining pieces of cake.

Feature 2

Building off Feature 1, I want a console.log() to display...

    "No leftovers for you!" if there aren't any leftovers
    "You have some leftovers" if there are 2 pieces of cake or less
    "You have leftovers to share" if there are 3 - 5 pieces of cake left over
    "Hold another party!" if there are more than 5 pieces of cake left over.
*/

function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    if (numberOfPieces%numberOfPeople == 0){
        console.log("No leftovers for you!");
    }
    else if (numberOfPieces%numberOfPeople <= 2) {
        console.log("You have some leftovers");
    }
    else if (numberOfPieces%numberOfPeople >= 3 && numberOfPieces%numberOfPeople <= 5) {
        console.log("You have leftovers to share");
    }
    else {
        console.log("Hold another party!");
    }
}

howMuchLeftOverCake(12,12);
howMuchLeftOverCake(12,10);
howMuchLeftOverCake(12,8);
howMuchLeftOverCake(12,0);