var fullscreen = true;
var s1 = true;
var s2 = false;

var isMenu = false;

let con1 = document.getElementsByClassName("container")[0];


let con2 = document.getElementsByClassName("container2")[0];


let menu = document.getElementsByClassName("menu")[0];

let schermo1 = document.getElementById("a");
let schermo2 = document.getElementById("b");

let arrow = document.getElementById("selectorA");

function displayMenu() {
    isMenu = true;
    schermo1.style.animationName = "appear1";
    schermo1.style.animationDelay = "0s"
    schermo1.style.animationFillMode = "forwards";
    schermo2.style.animationName = "appear2";
    schermo2.style.animationDelay = "0.3s"
    schermo2.style.animationFillMode = "forwards";
    arrowIn();
    iconIn();
}

function hideMenu() {
    isMenu = false;
    schermo1.style.animationName = "disappear1";
    schermo1.style.animationDelay = "0.3s"
    schermo1.style.animationFillMode = "backwards";
    schermo2.style.animationName = "disappear2";
    schermo2.style.animationDelay = "0s"
    arrowOut();
    iconOut();
    
}

function iconIn() {
    tec = document.getElementById("teC");
    edc = document.getElementById("edC");
    brc = document.getElementById("brC");

    
    tec.style.animation = edc.style.animation = brc.style.animation = "out 0.5s forwards 0.2s";
    

    setTimeout(function () {
        edc.style.animation = "goUp 0.5s forwards";
        tec.style.animation = "goDown 0.5s forwards";
    }, 700);

    setTimeout(function () {
    brc.style.animation = "fade 0.1s forwards linear";
        document.body.querySelectorAll("p>img").forEach(x => x.style.visibility = "visible");
    }, 1100);
}
function iconOut() {
    tec = document.getElementById("teC");
    edc = document.getElementById("edC");
    brc = document.getElementById("brC");

    
    edc.style.animation = "returnFromUp 0.5s forwards";
    brc.style.animation = "expand 0.5s forwards";
    tec.style.animation = "returnFromDown 0.5s forwards";

    setTimeout(function () {
        document.body.querySelectorAll("p>img").forEach(x => x.style.visibility = "hidden");
    }, 500);

    

    setTimeout(function () {
        edc.style.animation = tec.style.animation = brc.style.animation = "in 0.5s forwards";
    }, 700);

}

function Menu() {
    con1.style.animationTimingFunction = "ease-in-out";
    con2.style.animationTimingFunction = "ease-in-out";
    
    if (fullscreen && s1) {
        console.log("fullscreen and s1")
        
        con1.style.animationName = "move";
        con2.style.animationName = "move2";

        displayMenu();

        fullscreen = false;
    }

    else if (fullscreen && s2) {
        
        console.log("fullscreen and s2")
        con1.style.animationName = "move2";
        con2.style.animationName = "move";

        displayMenu();

        fullscreen = false;
    }

    else if(!fullscreen && s1){

        console.log("!fullscreen and s1")
        
        hideMenu();
        
        setTimeout(function () {
        con2.style.animationName = "moveback2";
        con1.style.animationName = "moveback";
        }, 600);
        fullscreen = true;
    }
    else if(!fullscreen && s2){
        console.log("!fullscreen and s2")

        hideMenu();
       
        setTimeout(function () {
            con1.style.animationName = "moveback2";
            con2.style.animationName = "moveback";
        }, 600);
        fullscreen = true;
    }
}

function forward(){
   
        con2.style.animationName = "movebackward";
        con2.style.animationDuration = "1s";
        con2.style.animationTimingFunction = "liner";
        
        con1.style.animationName = "moveforward2";
        con1.style.animationDuration = "1s";
        con1.style.animationTimingFunction = "liner";

        
}
        
function backward(){
    
        con1.style.animationName = "movebackward";
        con1.style.animationDuration = "1s";
        con1.style.animationTimingFunction = "liner";
        con2.style.animationName = "moveforward2";
        con2.style.animationDuration = "1s";
        con1.style.animationTimingFunction = "liner";


     
}

document.addEventListener("keydown", function (e) {
    if (isMenu) {
    if (e.code == "Space") {
        e.preventDefault();
        if (arrow.style.animationName == "arrowDown" || arrow.style.animationName == "ArrowInToDown"){
            schermo2.style.animationName = "selected";
            schermo2.style.animationDuration = "0.3s";
            setTimeout(function ()  {console.log("a");Schermo2();
            }, 500);
            
        }
        else if (arrow.style.animationName == "arrowUp" || arrow.style.animationName == "ArrowInToUp")
            schermo1.style.animationName = "selected";

            setTimeout(function ()  {Schermo2();}, 500);
            
     }
    if (e.code == "ArrowUp") {
        e.preventDefault();
        arrowUpDown();
        forward()
        arrow.style.animationName = "arrowUp";
        
    }
    else if (e.code == "ArrowDown") {
        e.preventDefault();
        arrowUpDown();
        backward()
        arrow.style.animationName = "arrowDown";
    }
}
})

function arrowUpDown() {
    arrow.style.opacity = "1";
    arrow.style.animationDuration = "0.3s";
    arrow.style.animationDelay = "0s";
}

function arrowIn(){
    if (s1) arrow.style.animationName = "arrowInToUp";
    else if (s2) arrow.style.animationName = "arrowInToDown"
    arrow.style.animationDuration = "0.5s";
    arrow.style.animationDelay = "0.3s";
    arrow.style.animationFillMode = "both";
}

function arrowOut(){
    if (arrow.style.animationName == "arrowUp" || arrow.style.animationName == "arrowInToUp") 
    arrow.style.animationName = "arrowOutFromUp";

    else if (arrow.style.animationName == "arrowDown" || arrow.style.animationName == "arrowInToDown") 
    arrow.style.animationName = "arrowOutFromDown";

    arrow.style.animationDuration = "0.5s";
    arrow.style.animationDelay = "0.3s";
    arrow.style.animationFillMode = "both";

}

document.getElementById("button").addEventListener("click", function(e) {
    e.preventDefault();
    Menu();
})

function Schermo1(){
    hideMenu();

    if (!s1 && !fullscreen) {
        
        con2.style.animationName = "movebackward";
        con2.style.animationDuration = "1s";
        con1.style.animationName = "moveforward2";
        con1.style.animationDuration = "1s";

       

    setTimeout(function () {
        con2.style.zIndex = "49";
        con1.style.zIndex = "50";
        con2.style.animationName = "moveback2";
        con2.style.animationDuration = "0.5s";
        con1.style.animationName = "moveback";
        con1.style.animationDuration = "0.5s";
        
    }, 1050)
        

        s1 = true;
        s2 = false;
        fullscreen = true;
    }

    else if (s1 && !fullscreen) {
        setTimeout(function () {
        con1.style.animationName = "moveback";
        con2.style.animationName = "moveback2";
        }, 600);    
    }

}

function Schermo2(){
    hideMenu();
    if (!s2 && !fullscreen) {
        con1.style.animationName = "movebackward";
        con1.style.animationDuration = "1s";
        con2.style.animationName = "moveforward2";
        con2.style.animationDuration = "1s";

        
    setTimeout(function () {

        con1.style.zIndex = "49";
        con2.style.zIndex = "50";
        con1.style.animationName = "moveback2";
        con1.style.animationDuration = "0.5s";
        con2.style.animationName = "moveback";
        con2.style.animationDuration = "0.5s";
        
    }, 1050)
        

        s2 = true;
        s1 = false;
        fullscreen = true;
    }

    else if (s2 && !fullscreen) {
        setTimeout(function () {
        con2.style.animationName = "moveback";
        con1.style.animationName = "moveback2";
        }, 600);
    }

}

schermo1.addEventListener("click", function (e) {
    e.preventDefault();
    Schermo1();
})

schermo2.addEventListener("click", function (e) {
    e.preventDefault();
    Schermo2();
})





