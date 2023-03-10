

//// Make window spawn to random location on page load
window.addEventListener('load', function ()
{

    const windowDiv = document.getElementById("window");
    windowDiv.style.top = "20px";
    windowDiv.style.left = "120px";


    // var randomDiv = document.getElementById('window');
    // var maxX = window.innerWidth - randomDiv.offsetWidth;
    // var maxY = window.innerHeight - randomDiv.offsetHeight;
    // var randomX = Math.floor(Math.random() * maxX);
    // var randomY = Math.floor(Math.random() * maxY);
    // randomDiv.style.top = randomY + 'px';
    // randomDiv.style.left = randomX + 'px';
});

// Make the DIV element draggable:
dragElement(document.getElementById("window"));

function dragElement(elmnt)
{
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header"))
    {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else
    {
        // otherwise, move the DIV from anywhere inside the DIV:
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
