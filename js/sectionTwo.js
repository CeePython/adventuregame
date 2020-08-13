                //Youcef Zafoune
                function room21(){
    
                    document.getElementById("story").innerHTML = 
                    "use your screwdriver to remove the center block on the wall"
                    thepic.src = "images/wall.jpg" 
                    removeEvents();
                    document.getElementById("N").addEventListener("click",wrongWay)
                    document.getElementById("E").addEventListener("click",wrongWay)
                    document.getElementById("S").addEventListener("click",room22)
                    document.getElementById("W").addEventListener("click",wrongWay)
                }
                ​
                function room22(){
                    
                    document.getElementById("story").innerHTML = 
                    "Be careful, Watch out for guards!"
                    thepic.src = "images/guards.jpg"
                    removeEvents();
                    document.getElementById("N").addEventListener("click",room21)
                    document.getElementById("E").addEventListener("click",room23)
                    document.getElementById("S").addEventListener("click",room24)
                    document.getElementById("W").addEventListener("click",room25)
                }
                ​
                function room23(){
                ​
                    document.getElementById("story").innerHTML =
                     "Your screwdriver is too short to go deeper, go to T-bag and ask for something that is long and sharp."
                     lv1key = true;
                ​
                    thepic.src = "images/tbag.jpg"
                    removeEvents();
                    document.getElementById("N").addEventListener("click",wrongWay)
                    document.getElementById("E").addEventListener("click",wrongWay)
                    document.getElementById("S").addEventListener("click",wrongWay)
                    document.getElementById("W").addEventListener("click",room22)
                }
                ​
                function room24(){
                    
                    document.getElementById("story").innerHTML =
                     "T-bag is willing to go give you a minisaw for the screwdriver"
                    thepic.src = "images/saw.jpg"
                    removeEvents();
                    if (lv1key){
                        document.getElementById("N").addEventListener("click",room26) 
                        document.getElementById("E").addEventListener("click",room26)
                        document.getElementById("S").addEventListener("click",room26)
                        document.getElementById("W").addEventListener("click",room26)
                    }else{
                        alert("You need something to trade!")
                        document.getElementById("N").addEventListener("click",room22)
                        document.getElementById("E").addEventListener("click",wrongWay)
                        document.getElementById("S").addEventListener("click",wrongWay)
                        document.getElementById("W").addEventListener("click",wrongWay)
                    }
                ​
                }
                function room25(){
                    alert("be careful!!")
                    document.getElementById("story").innerHTML =
                     "Choose a path to run down!"
                    thepic.src = "images/guard2.png"
                    removeEvents();
                    document.getElementById("N").addEventListener("click",room21)
                    document.getElementById("E").addEventListener("click",room22)
                    document.getElementById("S").addEventListener("click",room21)
                    document.getElementById("W").addEventListener("click",room22)
                }
                ​
                function room26(){
                    
                    document.getElementById("story").innerHTML = 
                    "You can now break the wall with the new saw "
                    thepic.src = "images/brokenwall.jpg"
                    removeEvents();
                    document.getElementById("N").addEventListener("click",room31)
                    document.getElementById("E").addEventListener("click",room27)
                    document.getElementById("S").addEventListener("click",wrongWay)
                    document.getElementById("W").addEventListener("click",room25)
                }
                function room27(){
                    alert("The guard spots you acting shifty!")
                    document.getElementById("story").innerHTML =
                     "You have been caught and returned to your cell"
                    thepic.src = "images/guard.png"
                    removeEvents();
                    document.getElementById("N").addEventListener("click",room21)
                    document.getElementById("E").addEventListener("click",room21)
                    document.getElementById("S").addEventListener("click",room21)
                    document.getElementById("W").addEventListener("click",room21)
                }