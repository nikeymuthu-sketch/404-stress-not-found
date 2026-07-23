const messages = [
    "🌸 Hi!!",
    "I'm Nini. 💕",
    "I heard my favorite human has been working really hard lately...",
    "So I secretly made this tiny little place just for you. 🥹",
    "For the next few minutes...",
    "No deadlines.",
    "No pressure.",
    "No stress.",
    "Just you... and me. 💖"
];

let current = 0;

const text = document.getElementById("message");
const button = document.getElementById("nextBtn");

function showNextMessage(){

    if(current < messages.length){

        text.innerHTML = messages[current];

        current++;

        setTimeout(showNextMessage,1800);

    }

    else{

        button.style.display="inline-block";

    }

}

window.onload = showNextMessage;

function nextScene(){

    alert("Scene 2 coming next! 🌸");

}
