let humanscore = 0;
let computerscore = 0;
let gameactive = true;

const result = document.querySelector("#results");
const score = document.querySelector("#score");

function updatescore () {
    score.textContent = `Score: Player - ${humanscore}, Computer - ${computerscore}`;
}

function addresult (message) {
    const resultmessage = document.createElement("p");
    resultmessage.textContent = message;
    result.appendChild(resultmessage);
}

function getcomputerchoice() {
    const options = ["rock", "paper", "scissors"];
    const optionchoice = options[Math.floor(Math.random() * 3)]
    addresult(optionchoice);
    return optionchoice;
}

function playround (humanchoice, computerchoice) {
    if (!gameactive) {
    addresult("Game is over!")
    return;
    }

    addresult(humanchoice);

    if (humanchoice === computerchoice) {
        addresult("It's a tie!");
    }
    else if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    ) {
        addresult("You win!");
        humanscore++;
    }
    else {
        addresult("You lose!");
        computerscore++;
    }

    updatescore();
    addresult();

    if (humanscore >= 5) {
        addresult("You won the game");
        addresult(`Score : Player - ${humanscore} , Computer - ${computerscore}`);
        gameactive = false;
    }

else if (computerscore >= 5) {
    addresult("You lost the game");
    addresult(`Score : Player - ${humanscore} , Computer - ${computerscore}`);
    gameactive = false;
}
        
};



const btnrock = document.querySelector("#btnrock");
const btnpaper = document.querySelector("#btnpaper");
const btnscissors = document.querySelector("#btnscissors");

btnrock.addEventListener("click", ()=> {
    if (gameactive) {
        addresult("New Round");
        playround("rock", getcomputerchoice())
    }
});

btnpaper.addEventListener("click", ()=> {
    if (gameactive) {
        addresult("New Round");
        playround("paper", getcomputerchoice())
    }
});

btnscissors.addEventListener("click", ()=> {
    if (gameactive) {
        addresult("New Round");
        playround("scissors", getcomputerchoice())
    }
});

console.log(`Score: Player - ${humanscore}, Computer - ${computerscore}`);

updatescore();
addresult("Game Result");