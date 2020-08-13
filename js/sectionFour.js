//Lucia Liberati

function room41(){
       
    document.getElementById("story").innerHTML = 
    "<b> FOREST PATH 1 </b> <br> You have reached the forest, BRAVO! <br> But they are right behind you <br> You need to hide!"
    thepic.src = "images/room1.jpeg"
    removeEvents();
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room42)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}


function room42(){
        
    document.getElementById("story").innerHTML = 
    "<b> FOREST PATH 2 - HIDING </b> <br> Well done!  You're moving along.  <br> Pick out a hiding place!"
    thepic.src = "images/hiding.jpg"
    removeEvents();
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room43)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room41)
}


function room43(){
    
    document.getElementById("story").innerHTML =
     "<b> FOREST PATH 3 </b> <br> You've hit a block! <br> You need a change of route!  <br> Take the railway!  <br> There's a tunnel!"
    pickAxe = true
    thepic.src = "images/police.jpg"
    removeEvents();
        document.getElementById("N").addEventListener("click",wrongWay) 
        document.getElementById("E").addEventListener("click",wrongWay) 
        document.getElementById("S").addEventListener("click",room44)
        document.getElementById("W").addEventListener("click",room42)
    
}

function room44(){
    
    document.getElementById("story").innerHTML = 
    "<b> FOREST PATH 4 </b> <br> WOW!  YOU'RE ALMOST THERE! <br> FREEDOM IS REALLY HANDY NOW! "
    thepic.src = "images/exit.jpg"
    removeEvents();
    document.getElementById("N").addEventListener("click",room43)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room45)
}

function room45(){
    
    document.getElementById("story").innerHTML = 
    "<b> TUNNEL 5 </b> <br> BINGO! <br> You're out! <br> IT'S PRISON BREAK!"
    thepic.src = "images/prisonbreak.png"
    removeEvents();
    document.getElementById("N").addEventListener("click",room42)
    document.getElementById("E").addEventListener("click",room44)
    document.getElementById("S").addEventListener("click",exit.jpg)
    document.getElementById("W").addEventListener("click",wrongWay)
    }