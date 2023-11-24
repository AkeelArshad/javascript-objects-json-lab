// I I F E
(function()
{
    console.info("Hello JS");

const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);
myNode.innerHTML = "Welcome";

const myDate = new Date();

})();