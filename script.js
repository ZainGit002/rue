/**/
function fadeInElement(element, delay) {
  setTimeout(() => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  fadeInElement(document.querySelector("#header"), 500);
  fadeInElement(document.getElementById("letter"), 2000);
  fadeInElement(document.querySelector(".timeline-section"), 2500);
  fadeInElement(document.querySelector(".reasons-section"), 3500);
  fadeInElement(document.querySelector(".gallery-section"), 4500);
  fadeInElement(document.querySelector(".surprise-button"), 5500);

  const audio = document.getElementById("background-music");
  const playBtn = document.querySelector(".play-button");

  audio.volume = 0.06;
  audio.play().catch(() => {
    playBtn.textContent = "▶︎‖";
  });
});

function toggleMusic() {
  const audio = document.getElementById("background-music");
  const btn = document.querySelector(".play-button");
  if (audio.paused) {
    audio.play();
    btn.textContent = "❚❚";
  } else {
    audio.pause();
    btn.textContent = "▶︎‖";
  }
}

function showPopup() {
  document.getElementById("valentine-popup").style.display = "block";
  document.getElementById("popup-overlay").style.display = "block";
}

function showConfetti() {
  document.getElementById("valentine-popup").style.display = "none";
  document.getElementById("popup-overlay").style.display = "none";

  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

function showSadEmoji() {
  document.getElementById("valentine-popup").style.display = "none";
  document.getElementById("popup-overlay").style.display = "none";
  let sadEmoji = document.getElementById("sad-emoji");
  sadEmoji.style.display = "block";
  setTimeout(() => (sadEmoji.style.display = "none"), 3000);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-float");
  heart.innerHTML = Math.random() > 0.5 ? "🌸" : "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 4 + 5 + "s";
  document.querySelector(".floating-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Image popup logic
const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImage");

images.forEach((img) => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
  popupImg.src = "";
});

// Handle Yes and No with sound and image
document.querySelector(".yes-button").addEventListener("click", () => {
  const yesAudio = document.getElementById("yesAudio");
  yesAudio.volume = 0.1;

  yesAudio.currentTime = 0;
  yesAudio.play();
  showConfetti();
  showResponseImage("https://i.imgur.com/rIDcyVv.gif");
});

document.querySelector(".no-button").addEventListener("click", () => {
  const noAudio = document.getElementById("noAudio");
  noAudio.volume = 0.1;
  noAudio.currentTime = 0;
  noAudio.play();
  showSadEmoji();
  showResponseImage("https://i.imgur.com/DnBSsNS.gif");
});

function showResponseImage(src) {
  const popup = document.getElementById("responseImagePopup");
  const img = document.getElementById("responseImage");
  img.src = src;
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
    img.src = "";
  }, 3000);
}
