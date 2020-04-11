// Your code goes here
const newTitle = document.querySelector("h1");
newTitle.textContent = "Fun Bus";

// mouseenter event
newTitle.addEventListener("mouseenter", function (event) {
    event.target.style.color = "red";
});

// mouseleave event
newTitle.addEventListener("mouseleave", function (event) {
    event.target.style.color = "black";
});


// keydownevent
const newBody = document.querySelector("body");
document.addEventListener("keydown", event => {
    newBody.style.color = "red";
    });

// wheel event
const newH2 = document.querySelector("h2");
newH2.addEventListener("wheel", event => {
    newH2.style.fontSize = "60px";
});


// rotation!
let intro = document.querySelector('.intro img');
intro.addEventListener('mouseover', function() {
    intro.style.transform = "rotateY(360deg)";
    intro.style.transition = "transform 1.5s ";
})