const newFlex = document.querySelector(".blocks");
    newFlex.style.display = "flex";
    newFlex.style.flexDirection = "column";



const redBox = document.getElementById("one");
redBox.addEventListener("dblclick", event => {
    event.target.style.order = "2";
});

const blueBox = document.getElementById("two");
blueBox.addEventListener("dblclick", event => {
    event.target.style.order = "2";
});

const greenBox = document.getElementById("three");
greenBox.addEventListener("dblclick", event => {
    event.target.style.order = "2";
});

const pinkBox = document.getElementById("four");
pinkBox.addEventListener("dblclick", event => {
    event.target.style.order = "2";
});

const grayBox = document.getElementById("five");
grayBox.addEventListener("dblclick", event => {
    event.target.style.order = "2";
});

const testBox = document.getElementById("five");
testBox.addEventListener('mousedown', event => {
    gsap.to("#five", {duration: 2, y: 300});
});
    // event.target.style.transform = "translate(500px)";

