const favMovie="avtar";

let guess = prompt("guess my favorite movie");

while( (guess != favMovie) && (guess != "quit")){
    guess= prompt("Wrong guess.please try again");
}

if(guess == favMovie){
    console.log("congrats!!");
}