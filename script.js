// =============================
// STORY PAGES
// =============================

const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next");
const restart = document.getElementById("restart");

let currentPage = 0;

// =============================
// SHOW PAGE
// =============================

function showPage(index) {

    pages.forEach(page => page.classList.remove("active"));

    pages[index].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// =============================
// NEXT BUTTON
// =============================

nextBtns.forEach(button => {

    button.addEventListener("click", () => {

        if(currentPage < pages.length - 1){

            currentPage++;

            showPage(currentPage);

        }

    });

});

// =============================
// RESTART
// =============================

restart.addEventListener("click", () => {

    currentPage = 0;

    showPage(currentPage);

});

// =============================
// TYPEWRITER EFFECT
// =============================

function typeWriter(element, speed = 25){

    const originalText = element.innerHTML;

    element.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < originalText.length){

            element.innerHTML += originalText.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

window.addEventListener("load", () => {

    document.querySelectorAll("h1,h2,.highlight").forEach(el => {

        typeWriter(el);

    });

});

// =============================
// FLOATING HEARTS
// =============================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = ["💖","💕","💗","💓","🤍","💝"][Math.floor(Math.random()*6)];

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize = (15 + Math.random()*20) + "px";

    heart.style.opacity = Math.random();

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "-1";

    heart.style.transition = "transform 8s linear, opacity 8s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = `translateY(-120vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity = "0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,700);

// =============================
// SPARKLES
// =============================

function sparkle(){

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(12+Math.random()*16)+"px";

    star.style.opacity=Math.random();

    star.style.pointerEvents="none";

    star.style.animation="twinkle 2s ease";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(sparkle,500);

// =============================
// HEART CONFETTI
// =============================

function celebration(){

    for(let i=0;i<40;i++){

        setTimeout(()=>{

            createHeart();

        },i*100);

    }

}

pages[pages.length-1].addEventListener("click",celebration);

// =============================
// TWINKLE ANIMATION
// =============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%{

opacity:0;

transform:scale(.3);

}

50%{

opacity:1;

transform:scale(1.3);

}

100%{

opacity:0;

transform:scale(.2);

}

}

`;

document.head.appendChild(style);

// =============================
// PAGE FADE
// =============================

showPage(0);
