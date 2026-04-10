let humanscore = 0;
let computerscore = 0;

function gethumanchoice() {
    const options = ["rock", "paper", "scissors"];
    const humanchoice = prompt("Choose your option rock, paper, or scissors").toLowerCase();
    
    if ("options.includes(humanchoice)") {
    console.log(humanchoice);
    return humanchoice;
    }
      else {
        console.log("Invalid choice please choose rock, paper, scissors")
        return gethumanchoice
    }
    
};

function getcomputerchoice() {
    const options = ["rock", "paper", "scissors"];
    const optionchoice = options[Math.floor(Math.random() * 3)]
    console.log(optionchoice);
    return optionchoice;
}

function playround (computerchoice, humanchoice) {
    if (computerchoice === humanchoice) {
        console.log("It's a tie!");
    }
    else if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    ) {
        console.log("You win!");
        humanscore++;
        return "win!";
    }
    else {
        console.log("You lose!");
        computerscore++;
        return "lose!"
    }
        
};

for (let round = 1;round <= 5; round++) {
    console.log(`round ${round} of 5`);

    const humanchoice = gethumanchoice();
    const computerchoice = getcomputerchoice();

    playround(humanchoice, computerchoice);
    console.log(`Score You - ${humanscore}, Computer - ${computerscore}`);
};

console.log("Game over");
if (humanscore > computerscore) {
    console.log(`Player wins :${humanscore} - ${computerscore}`);
}
else if (humanscore < computerscore) {
    console.log(`Computer wins :${humanscore} - ${computerscore}`);
}
else {
    console.log(`Player wins :${humanscore} - ${computerscore}`);
};