const messages=[

{
title:"Hi Kuchu Puchu ❤️",
text:"Nini is here today..."
},

{
title:"I know...",
text:"You've been working so hard lately.\n\nMaybe harder than anyone realizes."
},

{
title:"Sometimes...",
text:"You probably smile even when you're tired.\n\nYou tell everyone you're okay..."
},

{
title:"But...",
text:"It's okay to feel exhausted.\n\nIt's okay to have difficult days."
},

{
title:"I just wanted to remind you...",
text:"You don't always have to be strong.\n\nYou can rest too."
},

{
title:"Close your eyes...",
text:"Imagine I'm sitting beside you.\nHolding your hand.\nPlaying with your fingers.\nListening to every little thing you want to say."
},

{
title:"I'm Proud of You ❤️",
text:"Not because you're successful.\nNot because you work hard.\n\nI'm proud simply because you're YOU."
},

{
title:"You make my world brighter.",
text:"Thank you for existing.\nThank you for choosing me every single day."
},

{
title:"Promise me one thing?",
text:"Whenever life becomes too heavy...\nDon't carry it alone.\nLet me carry it with you."
},

{
title:"One Last Thing...",
text:"I love you.\nToday.\nTomorrow.\nEvery difficult day.\nEvery happy day.\nForever."
}

]

let current=0

const msg=document.getElementById("message")
const sub=document.getElementById("sub")
const next=document.getElementById("next")

function show(){

msg.classList.remove("fade")
sub.classList.remove("fade")

setTimeout(()=>{

msg.innerHTML=messages[current].title
sub.innerHTML=messages[current].text.replace(/\n/g,"<br>")

msg.classList.add("fade")
sub.classList.add("fade")

},150)

}

show()

next.onclick=function(){

current++

if(current<messages.length){

show()

}

else{

document.getElementById("textBox").style.display="none"

document.getElementById("ending").style.display="block"

document.body.style.overflow="auto"

}

}

function createHeart(){

const heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(15+Math.random()*20)+"px"

heart.style.animationDuration=(5+Math.random()*5)+"s"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},10000)

}

setInterval(createHeart,350)
