let userScr = 0 ;
let compScr = 0 ;
let drawScr = 0 ;
const user = document.querySelector("#user");
const computer = document.querySelector("#computer");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".move");
const declare = document.querySelector(".declareWinner");
const hide = document.querySelector(".toHide");
const resetBtn = document.querySelector(".reset");

const genComChoice = () =>
{ 
    let opt = ["rock","paper","scissors"];
    let comIdx = Math.floor(Math.random()*3);
    return opt[comIdx];
};
const drawGame = () => 
{
    console.log("Game was a draw.");
    msg.innerText = "Game was a draw !";  
    msg.style.color = "#ff00d0";
    msg.style.backgroundColor = "#191913";
    drawScr = drawScr +1;
    console.log(`drawScr = ${drawScr}`);
}

const showWinner = (userWin,userChoice,compChoice) => 
{
    if(userWin){
        console.log (`You Win ! Your ${userChoice} beats ${compChoice}`);
        msg.innerText = `You Win !  Your ${userChoice} beats ${compChoice}`;
        msg.style.color = "#ffee00ff";
        msg.style.backgroundColor = "#52cd00ff";
        msg.style.width = "550px";
        userScr = userScr +1;
        user.innerText = userScr;
        console.log(`userScr = ${userScr}`);
    }
    else
    {
        console.log(`You Loose !  ${compChoice} beats ${userChoice}`);
        msg.innerText = `You Loose !  ${compChoice} beats Your ${userChoice}`;
        msg.style.color = "aqua";
        msg.style.backgroundColor = "#ff2200ff";
        msg.style.width = "550px";
        compScr = compScr + 1;
        computer.innerText = compScr;
        console.log(`compScr = ${compScr}`);
    }
}

const playGame = (userChoice) =>
{
    console.log("User Choice = ",userChoice);
    const compChoice = genComChoice();
    console.log("Computer Choice = ",compChoice);

    if (userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true
        }
        
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true
        }

        else if(userChoice === "scissors")
        {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin,userChoice,compChoice);
        declareWinner(userScr,compScr,drawScr);
    }
};

choices.forEach((choice) =>
{
    choice.addEventListener("click",() =>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const declareWinner = () => 
    {
    if ((userScr + compScr + drawScr) === 5 ) 
        {
        if (userScr > compScr) 
        {
            declare.innerText = `Woo Hoo 🥳🥳!! You Won!`;
        } else if (userScr < compScr) 
        {
            declare.innerText = `Better Luck Next Time , You Lost 😔😞`;
        } else 
        {
            declare.innerText = "It's a Draw !";
        }
        hide.classList.remove("hide");
    }
};
resetBtn.addEventListener("click", () =>
{
    userScr = 0;
    compScr = 0;
    drawScr = 0;  
    user.innerText = "0";
    computer.innerText = "0";

    msg.innerText = "Choose your move!";
    msg.removeAttribute("style");

    declare.innerText = ""; 
    hide.classList.add("hide");
});