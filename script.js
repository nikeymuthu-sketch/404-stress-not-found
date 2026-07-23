*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(-45deg,#ffd6e8,#ffe8f4,#fff6fb,#dff5ff);
    background-size:400% 400%;
    animation:bgMove 12s ease infinite;
}

@keyframes bgMove{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

.background{
    position:fixed;
    inset:0;
    overflow:hidden;
    z-index:-1;
}

.hearts::before,
.hearts::after{
    content:"💖";
    position:absolute;
    font-size:34px;
    opacity:.35;
    animation:floatHeart 10s linear infinite;
}

.hearts::before{
    left:18%;
}

.hearts::after{
    left:78%;
    animation-delay:5s;
}

@keyframes floatHeart{
    from{
        transform:translateY(110vh) rotate(0deg);
    }
    to{
        transform:translateY(-20vh) rotate(360deg);
    }
}

.container{
    width:92%;
    max-width:1150px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:50px;
}

.left{
    flex:1;
    display:flex;
    justify-content:center;
}

#nini{
    width:320px;
    animation:float 3s ease-in-out infinite;
}

@keyframes float{
    0%{transform:translateY(0);}
    50%{transform:translateY(-15px);}
    100%{transform:translateY(0);}
}

.right{
    flex:1;
}

.bubble{
    background:rgba(255,255,255,.45);
    backdrop-filter:blur(18px);
    border-radius:30px;
    padding:40px;
    box-shadow:0 12px 35px rgba(0,0,0,.12);
}

.name{
    display:inline-block;
    background:#ff5c93;
    color:white;
    padding:8px 18px;
    border-radius:25px;
    font-weight:600;
    margin-bottom:20px;
}

h1{
    font-family:'Fredoka',sans-serif;
    color:#ff4f88;
    font-size:44px;
    margin-bottom:18px;
}

#message{
    min-height:180px;
    font-size:20px;
    color:#444;
    line-height:1.8;
}

.progress{
    width:100%;
    height:10px;
    background:#ffe4ef;
    border-radius:20px;
    overflow:hidden;
    margin-top:25px;
}

#progressBar{
    width:0%;
    height:100%;
    background:#ff5c93;
    transition:.4s;
}

button{
    margin-top:18px;
    padding:14px 30px;
    border:none;
    border-radius:30px;
    background:#ff5c93;
    color:white;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    transform:translateY(-3px);
    box-shadow:0 10px 20px rgba(255,92,147,.3);
}

#nextBtn{
    display:none;
}

.fade{
    animation:fade .5s;
}

@keyframes fade{
    from{
        opacity:0;
        transform:translateY(20px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

.choice{
    display:block;
    width:100%;
    margin-top:15px;
}

.photo{
    width:100%;
    max-width:320px;
    border-radius:20px;
    margin-top:20px;
    box-shadow:0 10px 25px rgba(0,0,0,.2);
}

@media(max-width:900px){

.container{
    flex-direction:column;
    text-align:center;
    padding:20px;
}

#nini{
    width:220px;
}

.bubble{
    padding:30px;
}

h1{
    font-size:34px;
}

#message{
    font-size:18px;
}

button{
    width:100%;
}

}
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
