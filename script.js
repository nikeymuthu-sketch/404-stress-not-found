const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("nextBtn");
const progress = document.getElementById("progressBar");

let scene = 0;
let line = 0;

const intro = [
  "Hi!! 🌸",
  "I'm Nini! 💖",
  "I heard someone has been working really hard lately...",
  "So I made this tiny place just for you.",
  "No meetings.",
  "No deadlines.",
  "Only smiles. ❤️"
];

button.style.display = "none";

window.onload = () => {
  message.innerHTML = "";
  showIntro();
};

function showIntro() {
  if (line >= intro.length) {
    button.style.display = "inline-block";
    button.innerHTML = "Let's Go 💖";
    return;
  }

  typeWriter(intro[line], () => {
    message.innerHTML += "<br><br>";
    line++;
    setTimeout(showIntro, 500);
  });
}

function typeWriter(text, done) {
  let i = 0;

  function type() {
    if (i < text.length) {
      message.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 35);
    } else {
      done();
    }
  }

  type();
}

button.onclick = nextScene;


function startScanner() {
  title.innerHTML = "🩺 Stress Scanner";

  let percent = 0;
  progress.style.width = "0%";

  const scan = setInterval(() => {
    percent++;
    progress.style.width = percent + "%";

    if (percent >= 100) {
      clearInterval(scan);
      scannerResults();
    }
  }, 25);
}

function scannerResults() {
  const results = [
    "❤️ Heart detected...",
    "🧠 Brain detected...",
    "☕ Coffee level: VERY HIGH...",
    "😵 Stress level: TOO HIGH...",
    "🐰 Diagnosis: This human needs hugs immediately."
  ];

  let i = 0;

  function show() {
    if (i >= results.length) {
      button.style.display = "inline-block";
      button.innerHTML = "Continue ❤️";
      return;
    }

    message.innerHTML += results[i] + "<br><br>";
    i++;
    setTimeout(show, 900);
  }

  show();
}
function nextScene() {
  scene++;

  message.innerHTML = "";
  title.innerHTML = "";
  button.style.display = "none";
  progress.style.width = "0%";

  if (scene === 1) {
    startScanner();
  } else if (scene === 2) {
    miniGame();
  } else if (scene === 3) {
    jokesScene();
  }
}

function miniGame() {

  title.innerHTML = "🎮 Stress Rescue";

  message.innerHTML = `
  Nini has a question...<br><br>
  What would make today better?<br><br>

  <button onclick="gameChoice('🍫 Chocolate')">🍫 Chocolate</button><br><br>

  <button onclick="gameChoice('😴 Nap')">😴 Nap</button><br><br>

  <button onclick="gameChoice('🤗 Hug')">🤗 Hug</button>
  `;

}

function gameChoice(choice) {

  title.innerHTML = "🐰 Nini";

  message.innerHTML = `
  You chose:<br><br>

  <h2>${choice}</h2>

  Excellent choice! 💖<br><br>

  But honestly...<br><br>

  I think you deserve ALL THREE. 🥹❤️
  `;

  button.style.display = "inline-block";
  button.innerHTML = "Next 💖";

}

function jokesScene() {

  title.innerHTML = "😂 Office Investigation";

  const jokes = [

    "I secretly visited your workplace... 👀",

    "The printer looked stressed too.",

    "Your coffee mug deserves overtime pay. ☕",

    "Your boss has been borrowing my favorite human for too long. 😤",

    "Verdict: Immediate cuddles required. ❤️"

  ];

  let i = 0;

  function show() {

    if (i >= jokes.length) {

      button.style.display = "inline-block";
      button.innerHTML = "One More Thing ❤️";
      return;

    }

    message.innerHTML += jokes[i] + "<br><br>";

    i++;

    setTimeout(show, 1200);

  }

  show();

}
function nextScene() {

  scene++;

  message.innerHTML = "";
  title.innerHTML = "";
  button.style.display = "none";
  progress.style.width = "0%";

  if (scene === 1) {

    startScanner();

  } else if (scene === 2) {

    miniGame();

  } else if (scene === 3) {

    jokesScene();

  } else if (scene === 4) {

    letterScene();

  } else if (scene === 5) {

    photoScene();

  }

}

function letterScene() {

  title.innerHTML = "💌 A Little Message";

  const lines = [

    "I know work has been exhausting lately.",

    "You've been giving your best every single day.",

    "Even when nobody notices... I do.",

    "I'm so proud of you.",

    "Thank you for working so hard for our future.",

    "Whenever you feel tired... remember I'm always cheering for you. ❤️"

  ];

  let i = 0;

  function show() {

    if (i >= lines.length) {

      button.style.display = "inline-block";
      button.innerHTML = "One Last Surprise 🎁";
      return;

    }

    message.innerHTML += lines[i] + "<br><br>";

    i++;

    setTimeout(show, 1500);

  }

  show();

}

function photoScene() {

  title.innerHTML = "📸 My Favorite Picture";

  message.innerHTML = `
  <img src="photo.jpg"
  style="width:260px;border-radius:20px;box-shadow:0 10px 25px rgba(0,0,0,.2);margin-bottom:20px;"><br><br>

  Every time I see this picture,<br>
  I smile. 🥹❤️<br><br>

  Thank you for being you.<br><br>

  I love you so much.
  `;

  button.style.display = "inline-block";
  button.innerHTML = "❤️ I Love You ❤️";

  button.onclick = ending;

}

function ending() {

  button.style.display = "none";

  title.innerHTML = "💖";

  message.innerHTML = `
  <h2>You survived today's stress!</h2>

  <br>

  Achievement Unlocked 🏆

  <br><br>

  ❤️ World's Best Boyfriend ❤️

  <br><br>

  Come collect your reward...

  <br><br>

  Unlimited hugs from me. 🤗💕
  `;

  for (let i = 0; i < 80; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 5s linear, top 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.top = "110vh";
      heart.style.transform = `translateX(${Math.random() * 200 - 100}px)`;
    }, 50);

    setTimeout(() => {
      heart.remove();
    }, 5500);

  }

}
