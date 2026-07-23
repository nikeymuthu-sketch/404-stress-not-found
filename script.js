document.getElementById("startBtn").addEventListener("click", () => {

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

});

const hidden=document.querySelectorAll(".hidden");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.25
});

hidden.forEach(el=>observer.observe(el));
