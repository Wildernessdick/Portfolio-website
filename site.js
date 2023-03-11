// Make window divs spawn to locations, and hide them
window.addEventListener('load', function ()
{
    hideGame();
    hideApp();
    const windowDiv = document.getElementById("window");
    windowDiv.style.top = "120px";
    windowDiv.style.left = "800px";

    const windowDiv2 = document.getElementById("window2");
    windowDiv2.style.top = "250px";
    windowDiv2.style.left = "600px";

});

// Make the DIV element draggable:
dragElement(document.getElementById("window"));
dragElement(document.getElementById("window2"));

function dragElement(elmnt)
{
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Check if the element has a header element to drag from, otherwise drag from anywhere
    if (document.getElementById(elmnt.id + "header"))
    {
        // If present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else
    {
        // Otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e)
    {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e)
    {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement()
    {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
//DateTime on taskbar
function updateTime()
{
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString();
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;
}

updateTime();
setInterval(updateTime, 1000);

const startBtn = document.querySelector('.start');
const menu = document.querySelector('.menu');

startBtn.addEventListener('click', function ()
{
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});
//Hide 15game
function hideGame()
{
    var x = document.getElementById("window");
    if (x.style.display === "none")
    {
        x.style.display = "block";
    } else
    {
        x.style.display = "none";
    }
}
//hide app div
function hideApp()
{
    var x = document.getElementById("window2");
    if (x.style.display === "none")
    {
        x.style.display = "block";
    } else
    {
        x.style.display = "none";
    }
}