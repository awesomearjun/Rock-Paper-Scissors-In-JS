// @ts-nocheck
const game = () => {
	let pScore = 0;
	let cScore = 0;

	const startGame = () => {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeout");
			match.classList.add("fadein");
		});
	};

	const playMatch = () => {
		const options = document.querySelectorAll(".buttons button");
		const playerHand = document.querySelector("img#user");
		const computerHand = document.querySelector("img#computer");
		const computerOptions = ["rock", "paper", "scissors"];
		const hands = document.querySelectorAll(".game-m-images img");

		hands.forEach((hand) => {
			hand.addEventListener("animationend", function () {
				this.style.animation = "";
			});
		});

		options.forEach((option) => {
			option.addEventListener("click", function () {
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];

				setTimeout(() => {
					compareHands(this.textContent, computerChoice);

					playerHand.src = `/images/${this.textContent}.png`;
					computerHand.src = `/images/${computerChoice}.png`;
				}, 2000);

				playerHand.style.animation = "shakePlayer 2s ease";
				computerHand.style.animation = "shakeComputer 2s ease";
			});
		});
	};

	const updateScore = () => {
		const playerScore = document.querySelector("#player-score");
		const computerScore = document.querySelector("#computer-score");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		const winner = document.querySelector(".winner");
		if (playerChoice === computerChoice) {
			winner.textContent = "Tie!";
			return;
		}
		if (playerChoice === "rock") {
			if (computerChoice === "paper") {
				winner.textContent = "Computer wins!";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player Wins!";
				pScore++;
				updateScore();
				return;
			}
		}

		if (playerChoice === "paper") {
			if (computerChoice === "scissors") {
				winner.textContent = "Computer wins!";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player Wins!";
				pScore++;
				return;
			}
		}

		if (playerChoice === "scissors") {
			if (computerChoice === "rock") {
				winner.textContent = "Computer wins!";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player Wins!";
				pScore++;
				updateScore();
				return;
			}
		}
	};

	startGame();
	playMatch();
};

game();
