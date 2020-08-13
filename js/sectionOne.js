                    //Josh Mundy
                    function room11(){
    
                        document.getElementById("story").innerHTML = 
                        "You start in your cell, hurry up before the doors are locked for the night!"
                        thepic.src = "images/cell1.jpg" 
                        removeEvents();
                        document.getElementById("N").addEventListener("click",wrongWay)
                        document.getElementById("E").addEventListener("click",wrongWay)
                        document.getElementById("S").addEventListener("click",room12)
                        document.getElementById("W").addEventListener("click",wrongWay)
                    }
                    
                    function room12(){
                        
                        document.getElementById("story").innerHTML = 
                        "The wing is open for now, Watch out for guards!"
                        thepic.src = "images/wing.jpg"
                        removeEvents();
                        document.getElementById("N").addEventListener("click",room11)
                        document.getElementById("E").addEventListener("click",room13)
                        document.getElementById("S").addEventListener("click",room14)
                        document.getElementById("W").addEventListener("click",room15)
                    }
                    
                    function room13(){
                    
                        document.getElementById("story").innerHTML =
                         "Big John hands you some tobacco, Keep it hiddden from the guards!"
                         lv1key = true;
                    
                        thepic.src = "images/tobacco.jpg"
                        removeEvents();
                        document.getElementById("N").addEventListener("click",wrongWay)
                        document.getElementById("E").addEventListener("click",wrongWay)
                        document.getElementById("S").addEventListener("click",wrongWay)
                        document.getElementById("W").addEventListener("click",room12)
                    }
                    
                    function room14(){
                        
                        document.getElementById("story").innerHTML =
                         "T-Cup wants his tobacco! He is willing to trade for a screwdriver"
                        thepic.src = "images/tcup.jpg"
                        removeEvents();
                        if (lv1key){
                            document.getElementById("N").addEventListener("click",room16) 
                            document.getElementById("E").addEventListener("click",room16)
                            document.getElementById("S").addEventListener("click",room16)
                            document.getElementById("W").addEventListener("click",room16)
                        }else{
                            alert("You need something to trade!")
                            document.getElementById("N").addEventListener("click",room12)
                            document.getElementById("E").addEventListener("click",wrongWay)
                            document.getElementById("S").addEventListener("click",wrongWay)
                            document.getElementById("W").addEventListener("click",wrongWay)
                        }
                    
                    }
                    function room15(){
                        alert("The guard spots you acting shifty!")
                        document.getElementById("story").innerHTML =
                         "Choose a path to run down!"
                        thepic.src = "images/guard.png"
                        removeEvents();
                        document.getElementById("N").addEventListener("click",room11)
                        document.getElementById("E").addEventListener("click",room12)
                        document.getElementById("S").addEventListener("click",room11)
                        document.getElementById("W").addEventListener("click",room12)
                    }
                    
                    function room16(){
                        
                        document.getElementById("story").innerHTML = 
                        "You've got the screwdriver! Now plan your escape route East or West Fire Exit?"
                        thepic.src = "images/lock.jpg"
                        removeEvents();
                        document.getElementById("N").addEventListener("click",wrongWay)
                        document.getElementById("E").addEventListener("click",room17)
                        document.getElementById("S").addEventListener("click",wrongWay)
                        document.getElementById("W").addEventListener("click",room21)
                    }
                    function room17(){
                        alert("The guard spots you acting shifty!")
                        document.getElementById("story").innerHTML =
                         "You have been caught and returned to your cell"
                        thepic.src = "images/guard.png"
                        removeEvents();
                        document.getElementById("N").addEventListener("click",room11)
                        document.getElementById("E").addEventListener("click",room11)
                        document.getElementById("S").addEventListener("click",room11)
                        document.getElementById("W").addEventListener("click",room11)
                    }
                    

