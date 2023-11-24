// I I F E
(function()
{
    console.info("Hello JS");

const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);



const updateTime = function()
{
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit"});
};
setInterval(updateTime, 1000);
updateTime();

const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");

})();