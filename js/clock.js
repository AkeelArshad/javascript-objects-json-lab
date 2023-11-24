// I I F E
(function()
{
    console.info("Hello JS");

const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);

const myDate = new Date();
console.dir(myDate);

// show only hours, minutes and seconds
myNode.innerHTML = myDate.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit"});

setInterval(function()
{    
}, 1000);

const updateTime = function()
{
    console.info('tick tock');
}

setInterval(updateTime, 1000);

})();