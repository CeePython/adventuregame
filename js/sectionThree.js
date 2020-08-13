//Cory Platt

function room31(){
    alert("You have found a pickaxe!")
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You ave reached the tunnels, well done. You have found a pickaxe. You can go East"
    //Change the Pic
    thepic.src = "images/cave1.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room32)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room32(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "It all looks the same down here. try not to get lost"
    //Change the Pic
    thepic.src = "images/cave2.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",room33)
    document.getElementById("W").addEventListener("click",room31)
}

function room33(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Hmm still in the tunnels, look for a way out!"
    //Change the Pic
    thepic.src = "images/cave3.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room32)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room34)
}

function room34(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Use the pickaxe to break through the tunnel"
    //Change the Pic
    thepic.src = "images/cave3.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room33)
    document.getElementById("S").addEventListener("click",room35)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room35(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Go through"
    //Change the Pic
    thepic.src = "images/cave4.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room41)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

