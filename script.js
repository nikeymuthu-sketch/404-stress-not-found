const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

}

function nextSlide(){

slides[current].classList.remove("active");

current++;

if(current>=slides.length){
current=slides.length-1;
}

setTimeout(()=>{
showSlide(current);
},400);

}

function restart(){

slides[current].classList.remove("active");

current=0;

setTimeout(()=>{
showSlide(current);
},500);

}

document.addEventListener("click",(e)=>{

if(e.target.tagName==="BUTTON") return;

if(current<slides.length-1){
nextSlide();
}

});

showSlide(0);
