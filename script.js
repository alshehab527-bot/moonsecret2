const button = document.getElementById("startBtn");

if (button) {
    button.addEventListener("click", function () {
        window.location.href = "challenge.html";
    });
}

const nextSpell = document.getElementById("nextSpell");

if (nextSpell) {
    nextSpell.onclick = function () {
        window.location.href = "final.html";
    };
}
const gift1 = document.getElementById("gift1");
const gift2 = document.getElementById("gift2");
const gift3 = document.getElementById("gift3");

if(gift1){
    gift1.onclick = function(){
        window.location.href = "gift.html";
    }
}

if(gift2){
    gift2.onclick = function(){
        window.open("https://youtu.be/tPMFAbhlDbU?si=1n2RJb0uRiaZb-sm");
    }
}

if(gift3){
    gift3.onclick = function(){
        window.location.href = "letter.html";
    }
}