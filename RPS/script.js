let playerscore=0;
            let computerscore=0;
        function getComputerChoice()
        {
            
            let a =  Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            if(a==1)
            return "rock";
            else if(a==2)
            return "paper";
            else if(a==3)
            return "scissors";
        }
        function playRound(playerSelection,computerSelection){
            if(playerSelection=="rock" && computerSelection=="rock")
            {   playerscore++,computerscore++;
                console.log("Tie, Try again");
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }
            else if(playerSelection=="paper" && computerSelection=="paper")
            {   playerscore++,computerscore++;
                console.log("Tie, Try again");
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }
            else if(playerSelection=="scissors" && computerSelection=="scissors")
            {   playerscore++,computerscore++;
                console.log("Tie, Try again");
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }
            else if(playerSelection=="rock" && computerSelection=="paper")
            {   computerscore++;
                console.log("You Lose! Paper beats Rock") ;
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }
            else if(playerSelection=="rock" && computerSelection=="scissors")
            {   playerscore++;
                console.log("You Win! Rock beats Scissors") ;
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }
            else if(playerSelection=="scissors" && computerSelection=="rock")
            {   computerscore++;
                console.log("You Lose! Rock beats Scissors") ;
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }
            else if(playerSelection=="scissors" && computerSelection=="paper")
            {   playerscore++;
                console.log("You Win! Scissors beats Paper") ;
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }
            else if(playerSelection=="paper" && computerSelection=="rock")
            {   playerscore++;
                console.log("You Win! Paper beats Rock") ;
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }
            else if(playerSelection=="paper" && computerSelection=="scissors")
            {   computerscore++;
                console.log("You Lose! Scissors beats Paper")  ;
                return `Player - ${playerscore} and Computer - ${computerscore}`;
            }   
        }
        function game()
        {
            for(let i =1;i<=5;i++)
            {
            let playerSelection=prompt();
            const computerSelection= getComputerChoice();
        
             console.log(playRound(playerSelection,computerSelection));
             
            }
            if(playerscore>computerscore)
            return "Player has Won!";
            else if(computerscore>playerscore)
            return "Computer has Won!";
            else
            return "It is a Draw!";
            
                
            
        }
         
        console.log(game());