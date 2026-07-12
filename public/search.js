const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

    let value = searchBox.value.toLowerCase();

    let cards = document.querySelectorAll(".video-card");

    cards.forEach(function(card){

        let title = card.querySelector("h2").textContent.toLowerCase();
        let subject = card.querySelector("p").textContent.toLowerCase();

        if(title.includes(value) || subject.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});