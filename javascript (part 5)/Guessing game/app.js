const max = prompt("enter the max number");

const random= math.floor(math.random() * max) +1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit");
    break;
}

if(guess == random){
    console.log("you are right! congrats!! random number was",random);
    break;
}else if(guess < random){
   guess = prompt("your guess was too small,please try again");
}else{
    guess = prompt("your guess was too large,please try again");
}

