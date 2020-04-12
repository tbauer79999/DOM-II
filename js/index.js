// Your code goes here
document.querySelector("a").addEventListener("click", function(event){
    event.preventDefault()
  });


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


// rotation! on main image
let intro = document.querySelector('.intro img');
intro.addEventListener('mouseover', function() {
    intro.style.transform = "rotateY(180deg)";
    intro.style.transition = "transform 1.5s ";
})

// rotation! on second image
let secondIMG = document.querySelector('.img-content img');
secondIMG.addEventListener('mouseover', function() {
    secondIMG.style.transform = "rotateX(180deg)";
    secondIMG.style.transition = "transform 1.5s ";
})

// first paragraph
let newPara = document.querySelector('.intro p');
newPara.addEventListener('mouseover', function() {
    newPara.style.transform = "rotateX(360deg)";
    newPara.style.transition = "transform 1.5s ";
})

// GSAP
gsap.from("body", {duration: 2, opacity: 0, scale: 0.3, ease: "back"});

// bottom Content
let bottomContent = document.querySelector('.content-pick');
bottomContent.addEventListener('mouseover', function() {
    bottomContent.style.transform = "rotateY(360deg)";
    bottomContent.style.transition = "transform 1.5s ";
})