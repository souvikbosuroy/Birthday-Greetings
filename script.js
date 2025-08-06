const blowBtn = document.querySelector("#blow");
const candle = document.querySelector("#candle");
const cakeSection = document.querySelector("#cakeSection");
const birthdayScreen = document.querySelector("#birthdayScreen");
const lifespan = document.querySelector("#lifespan");
const greetingPopup = document.querySelector("#greetingPopup");
const confettiContainer = document.querySelector("#confetti-container");

// Update lifespan timer
function startLifespanCounter(birthDateStr) {
  const birthDate = new Date(birthDateStr);

  setInterval(() => {
    const now = new Date();
    const diff = now - birthDate;
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    lifespan.innerText = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  }, 1000);
}

// Show confetti
function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.opacity = Math.random();
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// Blow candle action
blowBtn.addEventListener("click", () => {
  candle.play();

  // Simulate blowing out
  setTimeout(() => {
    candle.style.display = "none";
    cakeSection.style.display = "none";
    birthdayScreen.style.display = "flex";
    greetingPopup.style.display = "flex";
    startLifespanCounter("2001-05-25T00:00:00"); // Replace with actual birth date
    launchConfetti();
  }, 5000);
});

// Close greeting popup
function closePopup() {
  greetingPopup.style.display = "none";
}

// Create confetti class styles
const style = document.createElement('style');
style.innerHTML = `
  .confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    top: 0;
    animation: fall linear forwards;
  }
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);
