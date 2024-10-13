// Get choice from computer 
    //use a random number generator with its total range divided by threee
    //assign each portion of the range to rock, paper, or scissors




 let humanScore = 0
    let computerScore = 0
    let round = 1


function playGame(){

   
    

    if (round <= 5){

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
        
        
        function getHumanChoice(){
            let choice = prompt("Rock me, fold me like Paper, or Scissor me?");
            let chosen = choice.toLowerCase();
            return chosen;
        }
        
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();
            console.log("Round:" + round);
            console.log("You:" + humanChoice + " " + "Points:" + humanScore);
            console.log("Computer:" + computerChoice + " " + "Points:" + computerScore);
           
        


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


    }

    else{
        if(humanScore > computerScore){
            return "youre a winner, baby!";
        }
        else{
            return "Better Luck Next Time";
        }
    }

    
}

console.log(playGame());
round++;
console.log(playGame());
round++;
console.log(playGame());
round++;
console.log(playGame());
round++;
console.log(playGame());
round++;
console.log(playGame());


