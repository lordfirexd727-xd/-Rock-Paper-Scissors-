let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const usercorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const computerChoice = () => {
    const option = ['rock', 'paper', 'scissors'];
    const randomidx = Math.floor(Math.random() * 3);
    return option[randomidx];
};

const gamedrawn = () => {
    msg.innerText = "game was drawn! play again!";
    msg.style.background = "yellow"
}

const showwinner = (userwins) => {
    if (userwins) {
        msg.innerText = `You win!`
        userscore++
        usercorepara.innerText = userscore
        msg.style.background = "green";
    } else {
        msg.innerText = "Computer wins!";
        compscore++
        compscorepara.innerText = compscore
        msg.style.background = "red";
    }
};


const playgame = (userChoice) => {
    console.log("User choice:", userChoice);

    const compChoice = computerChoice();
    console.log("Computer choice:", compChoice);

    if (userChoice === compChoice) {
        gamedrawn();
    } else {
        let userwins = true;

        if (userChoice === 'rock') {
            userwins = compChoice === 'paper' ? false : true;
        } 
        else if (userChoice === 'paper') {
            userwins = compChoice === 'scissors' ? false : true;
        } 
        else {
            userwins = compChoice === 'rock' ? false : true;
        }

        showwinner(userwins);
    }
};
 
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playgame(userChoice);
    });
});