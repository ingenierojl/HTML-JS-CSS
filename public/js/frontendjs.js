function ver(n) 
{
    document.getElementById("subseccion"+n).style.display="block"
}
function ocultar(n) 
{
    document.getElementById("subseccion"+n).style.display="none"
}

function verm(n) 
{
    document.getElementById("menulateralmovil").style.display="revert"
}
function ocultarm(n) 
{
    document.getElementById("menulateralmovil").style.display="none"
}
function myFunction(x) 
{
    if (x.matches) 
    { // If media query matches
    
    document.body.style.backgroundColor = "yellow";
    document.getElementById("navegador").style.display="none"
    document.getElementById("imagenmovil").style.display="revert"
    } else
    {
    document.body.style.backgroundColor = "black";
    document.getElementById("navegador").style.display="revert"
    document.getElementById("imagenmovil").style.display="none"
  }
}

var x = window.matchMedia("(min-device-width : 360px) and (max-device-width : 480px) , (min-width : 360px) and (max-width : 480px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes