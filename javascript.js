let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserScorPara = document.querySelector("#user-score");
const compScorPara = document.querySelector("#computer-score");
//
const genComputerChoice = () =>{
    const option = ["rock", "paper", "scissor"];
    //rock paper scissor
    const randIDx = Math.floor(Math.random() * 3)
    return option[randIDx];

};
const drawGame = () =>{
    msg.innerText = "Game was Draw. Play Again."
    msg.style.backgroundColor = "#081D31";
}

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userScore ++;
        UserScorPara.innerText = userScore;
        msg.innerText =`you win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        

    }
    else {
        compScore++;
        compScorPara.innerText = compScore;
        msg.innerText = `you lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
}


const playGame = (userChoice) =>{
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , papper
            userWin = computerChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //scissor , rock
            userWin = computerChoice === "rock" ? true : false;    
        } else { 
            //  rock paper
            userWin = computerChoice === "rock" ? false : true;
        }   
        showWinner(userWin, userChoice, computerChoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});