// ==========================
// Horizontal Slider
// ==========================

function scrollLeft(id){

    const container = document.getElementById(id);

    container.scrollBy({

        left:-300,

        behavior:"smooth"

    });

}

function scrollRight(id){

    const container = document.getElementById(id);

    container.scrollBy({

        left:300,

        behavior:"smooth"

    });

}


// ==========================
// Search Notes
// ==========================

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});


// ==========================
// Search on Enter
// ==========================

search.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        e.preventDefault();

    }

});


// ==========================
// Card Hover Effect
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transition=".3s";

    });

});


// ==========================
// Scroll to Top
// ==========================

window.addEventListener("load",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});