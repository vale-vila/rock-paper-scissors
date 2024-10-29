// Get choice from computer 
    //use a random number generator with its total range divided by threee
    //assign each portion of the range to rock, paper, or scissors




 let humanScore = 0
    let computerScore = 0
    let round = 1


function playGame(humanChoice){
    const winnerDisplay = document.querySelector(`#Winner`);

    if (round <=5 || computerScore == humanScore){

   
    



        function getComputerChoice(){
            let range = Math.random()
            if (range > 0.66){
                return "scissors";
            }
            else if (range > 0.33){
                return "paper";
            }
            else {
                return "rock";
            }
        }
        
   
        
            const computerChoice = getComputerChoice();
            

            const roundDisplay = document.querySelector("#round");
                roundDisplay.textContent = `Round: ${round}`;
                console.log("Round:" + round);

            const pointsDisplay = document.querySelector("#Score");
                pointsDisplay.textContent = `Points.  You: ${humanScore}.  Computer: ${computerScore}.`;
                console.log("You:" + " " + humanChoice + " " + "Points:" + humanScore);

            const choiceDisplay = document.querySelector('#Choice');
                choiceDisplay.textContent = `You: ${humanChoice}     Computer: ${computerChoice}`;
                console.log("Computer:" + " " + computerChoice + " " + "Points:" + computerScore);
           
        


        function playRound(humanChoice,computerChoice){

            if (computerChoice == "scissors" && humanChoice =="paper"){
                computerScore++;
                return "now is not the time to fold!";
            }
            else if(computerChoice =="scissors" && humanChoice == "rock"){
                humanScore++;
                return "you rock, diva!";
            }
            else if(computerChoice == "rock" && humanChoice == "scissors"){
                computerScore++;
                return "damn u got ur shit rocked :/";
        
            }
            else if (computerChoice == "rock" && humanChoice == "paper"){
                humanScore++;
                return "That paper better be blue, hunny. Congrats.";
        
            }
            else if(computerChoice == "paper" && humanChoice == "rock"){
                computerScore++;
                return "lay off the rock, Whitney.";
        
            }
            else if (computerChoice == "paper" && humanChoice == "scissors"){
                humanScore++;
                return "cut her up, bitch!";
            }
            else{
                return "stop copying me!";
            }
        }
        console.log(playRound(humanChoice,computerChoice));

        round++
    }
        
        else if (humanScore > computerScore){
           

            winnerDisplay.textContent = "You're a winner!";

        }
        
        else {
            
            winnerDisplay.textContent = "you're a loser!";
        }
        
        
        
    
            }
   




const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener("click" , () => {
    console.log(playGame("rock"));
});

const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

paperBtn.addEventListener("click", () => {
    console.log(playGame("paper"));
});

scissorsBtn.addEventListener("click", () => {
    console.log(playGame("scissors"));
});