// =======================================
// HORIZONTAL SLIDER
// =======================================

function scrollLeft(id){

const slider = document.getElementById(id);

slider.scrollBy({

left:-320,

behavior:"smooth"

});

}

function scrollRight(id){

const slider = document.getElementById(id);

slider.scrollBy({

left:320,

behavior:"smooth"

});

}



// =======================================
// HERO SEARCH
// =======================================

const heroSearch = document.querySelector(".hero-search input");
const heroButton = document.querySelector(".hero-search button");

if(heroButton){

heroButton.addEventListener("click",searchNotes);

}

if(heroSearch){

heroSearch.addEventListener("keypress",function(e){

if(e.key==="Enter"){

searchNotes();

}

});

}

function searchNotes(){

let value = heroSearch.value.toLowerCase().trim();

if(value===""){

alert("Please enter a chapter or subject.");

return;

}

const cards=document.querySelectorAll(".note-card");

let found=false;

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

card.style.border="3px solid #0d6efd";

card.scrollIntoView({

behavior:"smooth",

block:"center"

});

found=true;

}

else{

card.style.display="none";

}

});

if(!found){

alert("No notes found.");

cards.forEach(card=>{

card.style.display="block";

});

}

}



// =======================================
// RESET SEARCH
// =======================================

if(heroSearch){

heroSearch.addEventListener("input",function(){

if(heroSearch.value===""){

const cards=document.querySelectorAll(".note-card");

cards.forEach(card=>{

card.style.display="block";

card.style.border="none";

});

}

});

}



// =======================================
// SCROLL NAVBAR EFFECT
// =======================================

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>80){

navbar.style.background="rgba(5,20,45,.92)";

navbar.style.padding="15px 8%";

}

else{

navbar.style.background="rgba(10,20,40,.55)";

navbar.style.padding="18px 8%";

}

});



// =======================================
// CARD ANIMATION
// =======================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".note-card,.subject-card,.popular-card,.stat-card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".6s";

observer.observe(card);

});



// =======================================
// VIEW BUTTON EFFECT
// =======================================

document.querySelectorAll(".note-card a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.innerHTML="Open →";

});

btn.addEventListener("mouseleave",()=>{

btn.innerHTML="View";

});

});

function toggleMenu() {
    let menu = document.getElementById("sideMenu");

    if(menu.style.right === "0px"){
        menu.style.right = "-260px";
    } else {
        menu.style.right = "0px";
    }
}

function logout() {
    alert("Logout clicked");
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "index.html";
}