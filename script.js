const title = document.getElementById("title");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

let scene = 0;

const scenes = [
{
title:"Hi Love 💗",
text:"Welcome to your tiny stress-free corner. Nini has been waiting for you all day. 🌸"
},
{
title:"System Scan...",
text:"Scanning today's stress levels... Please wait..."
},
{
title:"Scan Complete ✅",
text:"Diagnosis: Too much work. Too little happiness. Immediate cuddle therapy recommended."
}
];

function typeWriter(text, callback){

message.innerHTML="";
nextBtn.style.display="none";

let i=0;

const timer=setInterval(()=>{

message.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

if(callback) callback();

}

},30);

}

function showScene(){

progressBar.style.width=((scene)/(scenes.length+4))*100+"%";

title.innerHTML=scenes[scene].title;

typeWriter(scenes[scene].text,()=>{

nextBtn.style.display="inline-block";

});

}

nextBtn.onclick=nextScene;

function nextScene(){

scene++;

if(scene<scenes.length){

showScene();
return;

}

if(scene===3){

stressGame();
return;

}

if(scene===4){

jokeScene();
return;

}

if(scene===5){

letterScene();
return;

}

if(scene===6){

photoScene();
return;

}

ending();

}

showScene();
function stressGame(){

progressBar.style.width="50%";

title.innerHTML="🎮 Stress Rescue";

message.innerHTML=`
<p>Nini has a question...</p>
<p><strong>What would make today better?</strong></p>

<button class="choice" onclick="answer('🍫 Chocolate')">🍫 Chocolate</button>

<button class="choice" onclick="answer('😴 A Nap')">😴 A Nap</button>

<button class="choice" onclick="answer('🤗 A Hug')">🤗 A Hug</button>
`;

nextBtn.style.display="none";

}

function answer(choice){

message.innerHTML=`
<p>You picked <b>${choice}</b> 💖</p>

<p>Excellent choice! Nini approves. ✨</p>

<p>Stress levels dropping...</p>
`;

nextBtn.style.display="inline-block";

}

const jokes=[

"Why don't programmers like nature? 🌳 It has too many bugs.",

"404: Stress not found. 😎",

"Your smile has been successfully installed. 💗",

"Loading happiness... ███████ 100%",

"Coffee tried its best. Now it's cuddle time. ☕🤍"

];

function jokeScene(){

progressBar.style.width="65%";

title.innerHTML="😂 Emergency Joke";

message.innerHTML=`
<p>${jokes[Math.floor(Math.random()*jokes.length)]}</p>
`;

nextBtn.style.display="inline-block";

}

function letterScene(){

progressBar.style.width="80%";

title.innerHTML="💌 A Letter";

message.innerHTML=`

<p>I know today might have been exhausting.</p>

<p>But I'm really proud of you.</p>

<p>Thank you for working so hard every single day.</p>

<p>Please don't forget to rest, smile, and take care of yourself.</p>

<p>No matter how stressful today was… I'll always be cheering for you. 💖</p>

`;

nextBtn.style.display="inline-block";

}
function photoScene(){

progressBar.style.width="90%";

title.innerHTML="📸 One More Thing...";

message.innerHTML=`

<p>Because this smile deserves to stay forever... 💗</p>

<img src="photo.jpg" class="photo" alt="Us">

`;

nextBtn.style.display="inline-block";

}

function ending(){

progressBar.style.width="100%";

title.innerHTML="❤️ Mission Complete";

message.innerHTML=`

<h2>You survived today.</h2>

<p>I'm so proud of you.</p>

<p>Whenever work gets overwhelming, remember...</p>

<p><strong>You are loved more than you know. 💖</strong></p>

<p>Thank you for being you.</p>

<p>Love,<br>Your girlfriend 🌸</p>

`;

nextBtn.style.display="none";

celebrate();

}

function celebrate(){

const hearts=document.querySelector(".hearts");

let count=0;

const timer=setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-30px";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.pointerEvents="none";
heart.style.animation="fall 5s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),5000);

count++;

if(count>30){
clearInterval(timer);
}

},200);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(-30px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}
`;

document.head.appendChild(style);
