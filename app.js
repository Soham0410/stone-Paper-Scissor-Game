let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let comp = document.querySelector("#comp");
let user= document.querySelector("#user");

const CompPick = () =>{
    let option = ["stone","paper","scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return(option[randomIdx]);
};

const gameDraw = () => {
    msg.innerText = "It's a Draw";
    msg.style.backgroundColor = "rgba(17, 33, 128, 0.904)";
};

const whoWon = (userWin, userChoice, compChoice) => {
    console.log(userWin, userChoice, compChoice);
    if(userWin){
        msg.innerText= `Your ${userChoice} beat Computer's ${compChoice}`;
        userScore++;
        user.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `Computer's ${compChoice} beat your ${userChoice}`;
        compScore++;
        comp.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

const game = (userChoice) => {
    const compChoice = CompPick();
    if(compChoice === userChoice){
        gameDraw();
    }
    else{
        let userWin = false ; 
        if(userChoice === "stone"){
            //scissor , paper
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            //stone ,scissor
            userWin = compChoice === "stone" ? true : false ;
        }
        else{
            //paper,stone
            userWin = compChoice === "paper" ? true : false;
        }
        whoWon(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      game(userChoice);
    });
});





