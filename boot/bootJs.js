function bootLoader() {
    let loadingCode = 
        '<link id="loadingcss" rel="stylesheet" href="../loading/newloading.css">\
        <div class="animation-container">\
        <div class="lightning-container">\
            <div class="lightning white"></div>\
            <div class="lightning red"></div>\
        </div>\
        <div class="boom-container">\
            <div class="shape circle big white"></div>\
            <div class="shape circle white"></div>\
            <div class="shape triangle big yellow"></div>\
            <div class="shape disc white"></div>\
            <div class="shape triangle blue"></div>\
        </div>\
        <div class="boom-container second">\
            <div class="shape circle big white"></div>\
            <div class="shape circle white"></div>\
            <div class="shape disc white"></div>\
            <div class="shape triangle blue"></div>\
        </div>\
    </div>';
        /*<div class="loading">\
         <div class="dot"></div>\
         <div class="dot"></div>\
         <div class="dot"></div>\
         <div class="dot"></div>\
         <div class="dot"></div>\
         </div>;*/
    let loginCode = 
        '<div id="background"></div>\
        <div id="iconContainer"><div id="icon"></div></div>\
        <input type = "password" id="password"></input>'
    let selector = document.getElementById("selector");
    let option = false;
    let isBoot = true;

    document.addEventListener("keydown", function (e) {

        if (e.code == "ArrowDown" && option == false) {
            selector.style.top = "33px";
            option = true;
            selector.textContent = "Quit";
        }

        else if (e.code == "ArrowUp" && option == true) {
            selector.style.top = "0px";
            option = false;
            selector.textContent = "My OS";
        }});

    document.addEventListener("keydown", function(e) {
        if (e.code == "Enter" && isBoot == true && option == false) {
            e.preventDefault();
            document.body.innerHTML = "";
            setTimeout(startLoading, 1000);
            setTimeout(constructLogin, 4000);
            isBoot = false;
        }
        else  if (e.code == "Enter" && isBoot == true && option == true) {
            e.preventDefault();
            document.body.innerHTML = "Shutting Down...";
            isBoot = false;
        }
        else if (e.code == "Space" && isBoot == true){
            e.preventDefault();
            document.head.removeChild(document.getElementById("bootcss"));
            setTimeout(skipToHome, 100);
            isBoot = false;
        }
    })

    function startLoading() {
        document.body.innerHTML = loadingCode;
        document.head.removeChild(document.getElementById("bootcss"));
    }

    function constructLogin() {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../login/css.css";
        document.head.appendChild(link);
        document.body.innerHTML = loginCode;
        login();
    }

    function skipToHome() {
        let homeCode =
        '<link id="loadingcss" rel="stylesheet" href="../loading/newloading.css">\
        <link rel="stylesheet" href="../3dAnimation/swapScreen/style3.0.css">\
        <link rel="stylesheet" href="../browser/style.css">\
        <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet">\
        <link rel="stylesheet" href="../text_editor/css.css">\
        <link rel="stylesheet" href="../home/homeCss.css">\
        <link rel="stylesheet" href="../terminale_2.0/css_2.0.css">\
        <link rel="stylesheet" href="../3dAnimation/swapScreen/loader.css">\
        <link rel="stylesheet" href="../3dAnimation/swapScreen/bg.css"></link>\
        <div class = "container2"></div>\
        <div class = "container">\
        <div id = "time"></div>\
        </div>\
        <section class="loader"><section class="dot"></section><section class="dot"></section><section class="dot"></section>\
        </section><p id="br"><img src="../3dAnimation/images/neonBrowser.png"><h1 id = "brC"></h1></p>\
        <p id="ed"><img src="../3dAnimation/images/neonText.png"><h1 id = "edC"></h1></p>\
        <p id="te"><img src="../3dAnimation/images/neonTerminal.png"><h1 id = "teC"></h1></p>\
        <div id="batteryContainer"><div id="percent"></div></div>\
        <div id="percentDisplay"></div>\
        <div id="arrowDown"></div>';

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../login/css.css";
        document.head.appendChild(link);

        html = document.getElementsByTagName("html")[0];
        html.removeChild(document.body);
        html.appendChild(document.createElement("body"));
        setTimeout(function() {
            document.body.innerHTML = homeCode;
            home();
        }, 0)
        
    }
}

function login() {
    let container = document.getElementById("iconContainer");
    let pass = document.getElementById("password");
    let bg = document.getElementById("background");
    
    let homeCode =
    '<link rel="stylesheet" href="../3dAnimation/swapScreen/style3.0.css">\
    <link rel="stylesheet" href="../browser/style.css">\
    <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet">\
    <link rel="stylesheet" href="../text_editor/css.css">\
    <link rel="stylesheet" href="../home/homeCss.css">\
    <link rel="stylesheet" href="../terminale_2.0/css_2.0.css">\
    <link rel="stylesheet" href="../3dAnimation/swapScreen/loader.css">\
    <link rel="stylesheet" href="../3dAnimation/swapScreen/bg.css"></link>\
    <div class = "container2"></div>\
    <div class = "container"><div id = "time"></div></div>\
    <section class="loader"><section class="dot"></section><section class="dot"></section><section class="dot"></section>\
    </section><p id="br"><img src="../3dAnimation/images/neonBrowser.png"><h1 id = "brC"></h1></p>\
    <p id="ed"><img src="../3dAnimation/images/neonText.png"><h1 id = "edC"></h1></p>\
    <p id="te"><img src="../3dAnimation/images/neonTerminal.png"><h1 id = "teC"></h1></p>';


    container.addEventListener("click", function(e) {
        container.className = "move";
        
        setTimeout(function(){
            pass.style.display = "block";
            pass.className = "spawn";
            
        }, 1000);
        setTimeout(function(){
           
            pass.focus();
        }, 2000);
    });

    pass.addEventListener("keydown", function(e) {
        if (e.code == "Enter") {
            e.preventDefault();
            console.log(pass.value)
            if (pass.value == "1234") {
                setTimeout(constructHome(), 500);
                console.log("a")
            }
            else {
                setTimeout(function () {
                    pass.style.color = "red";
                    pass.className = "error";
                }, 200);
                setTimeout(function () {
                    pass.value = "";
                    pass.style.color = "black";
                    pass.className = "";
                }, 500);
                pass.focus();
            }
        }
    });

    function constructHome() {
        bg.style.animation = "focus 1s forwards linear";
        /*html = document.getElementsByTagName("html")[0];
        html.removeChild(document.body);
        html.appendChild(document.createElement("body"));
        document.body.innerHTML += homeCode;*/
        document.body.removeChild(container);
        document.body.removeChild(pass);
        document.body.innerHTML += homeCode;
        home();
        setTimeout(function () {
            document.body.removeChild(document.getElementById("background"));
        }, 1100);
        
    }
}

function home() {
    let priority = 100;
    let terminalItem = document.getElementById("te")
    let editorItem = document.getElementById("ed")
    let browserItem = document.getElementById("br")
    
    function constructTerminal() {
        let myshell = new Shell();
        document.body.appendChild(myshell.shell);
       
    }

    function constructEditor() {
        let myeditor = new textEditor();
        document.body.appendChild(myeditor.textEditor);
        
        myeditor.recover();
        setTimeout((() => {
            myeditor.textarea.focus();
            placeCaretAtEnd(myeditor.textarea);}), 0);
        
        myeditor.textarea.addEventListener("click", (e) => {
            e.preventDefault();
    
            myeditor.textarea.focus();
            placeCaretAtEnd(myeditor.textarea);
            
        })
        
    }

    function constructBrowser() {
        let mybrowser = new Browser();
        document.body.appendChild(mybrowser.browser);
    }

    function constructSwapScreen() {
        let button = document.createElement("div");
        button.id = "button";
        document.body.appendChild(button);

        let menuIcon = document.createElement("i");
        menuIcon.className = 'bx bx-menu';
        button.appendChild(menuIcon);

        let a = document.createElement ("div");
        a.id = "a";
        a.textContent = "Schermo 1";
        document.body.appendChild(a);

        let b = document.createElement ("div");
        b.id = "b"
        b.textContent = "Schermo 2";
        document.body.appendChild(b);

        let arrowIcon  = document.createElement("i");
        arrowIcon.className = "bx bxs-right-arrow";
        arrowIcon.id = "selectorA";
        document.body.appendChild(arrowIcon);

    }

    function Battery(){
        let bat = document.getElementById("percent");
        let display = document.getElementById("percentDisplay");
        let display2 = document.getElementById("arrowDown")
        navigator.getBattery()
        .then(function(battery) {
          bat.style.width = (battery.level * 100) + "%";
          bat.addEventListener("mouseover", (e) => {
            console.log("mouseover")
            display.style.left = display2.style.left =(battery.level * 100) - 10 + "%";
            display.textContent = (battery.level * 100) + "%";
            display2.style.visibility = display.style.visibility = "visible";
        })
        bat.addEventListener("mouseout", (e) => {
            console.log("mouseout")
            display2.style.visibility = display.style.visibility = "hidden";
        })
        });
       
    }
    
    setTimeout(Battery, 500);

    setInterval(timeCalc, 500);

    function placeCaretAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined"
                && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    class Shell {
        shell;
        textarea;
        lastDiv;
        history = [];
        historyIndex = 0;
       
        isMinimized = true;
    
        move = false;
        offset = [0,0];

        constructor () {
            let terminal = document.createElement("div");
            terminal.className = "terminal";
    
            let upBar = document.createElement("div");
            upBar.className = "upBar";
            terminal.appendChild(upBar);
    
            let close = document.createElement("div");
            close.className = "close";
            close.addEventListener("click", () => {this.close()})
            upBar.appendChild(close);
            
    
            let minimize = document.createElement("div");
            minimize.className = "minimize";
            minimize.addEventListener("click", () => {this.minimize(this.isMinimized)})
            
            upBar.appendChild(minimize);
    
            let maximize = document.createElement("div");
            maximize.className = "maximize";
            
            upBar.appendChild(maximize);
    
            let upBarText = document.createElement("span");
            upBarText.textContent = "matteogallina - zsh - home";
            upBar.appendChild(upBarText);
    
            let text = document.createElement("div");
            text.className = "textarea";
            terminal.appendChild(text);
    
            this.shell = terminal;
            priority++;
            this.shell.style.zIndex = priority;
            console.log(this.shell);
            this.textarea = text;
            this.lastDiv = this.createBox();
            this.textarea.appendChild(this.lastDiv);
    
            this.textarea.addEventListener("click", (e) => {
                this.lastDiv.focus();
                priority++;
                this.shell.style.zIndex = priority;
                placeCaretAtEnd(this.lastDiv);

            })
    
            this.shell.addEventListener("keydown", (e) => {
                if(e.code == "ArrowUp" && this.historyIndex > 0) {
                    e.preventDefault(); 
                    this.lastDiv.textContent = this.history[this.historyIndex-1];
                    this.historyIndex--;
                    console.log("a");
                }
                if(e.code == "ArrowDown" && this.historyIndex < this.history.length) {
                    e.preventDefault();
                    this.historyIndex++; 
                    this.lastDiv.textContent = this.history[this.historyIndex];
                    
                    console.log("a");
                }
                });
            upBar.addEventListener('mousedown',(e)=>{this.start_move(e)} , true);
            upBar.style.cursor = 'move';
            document.body.addEventListener('mouseup',(e)=>{this.stop_move()}, true);
            document.body.addEventListener('mousemove', (e)=>{this.drag(e)}, true);
        }
       
        start_move(e) {
            //console.log(this);
            this.move = true;
            this.offset = [
                this.shell.offsetLeft - e.clientX,
                this.shell.offsetTop - e.clientY
            ];
        }
    
        stop_move(){
            this.move = false;
        }

        drag(e){
                //console.log(e.clientX,e.clientY,this.getHeight(),this.getWidth());
                if (this.move && e.clientX>0 && e.clientY>0){
                    let mousePosition = {
                        x : e.clientX,
                        y : e.clientY
            
                    };
                    this.shell.style.left = (mousePosition.x + this.offset[0]) + 'px';
                    this.shell.style.top  = (mousePosition.y + this.offset[1]) + 'px';
                }
            }
    
        createBox(){
    
            let Bdiv = document.createElement("div");
            Bdiv.textContent = "matteogallina@MacBook-Pro-di-Matteo ~ $ "
            Bdiv.style.display = "inline-block";
            this.textarea.appendChild(Bdiv);
    
            var ComDiv = document.createElement("div");
            ComDiv.setAttribute("contenteditable", "true");
            ComDiv.style.outline = "none";
            ComDiv.style.display = "inline";
            ComDiv.style.wordBreak = "break-all";
            ComDiv.ClassName = "command";
            ComDiv.addEventListener("keydown",  (e) => {this.newLine(e)});
    
            setTimeout((()=>{ComDiv.focus()}), 0);
            return ComDiv;
        }
    
        tokenize(command) {
            command = command.split(" ");
            return command;
        }
    
        ResponseDiv (response) {
            let div = document.createElement("div");
            div.textContent = response;
            this.textarea.appendChild(div);
    
        }
    
        respond(command) {
            let commandArray = this.tokenize(command);
            console.log(this.tokenize(command));
            let response;
    
            if(this.history[this.history.length-1] != commandArray[0]){
                this.history.push(command);
                this.historyIndex++;
            } 
    
            switch(commandArray[0]){
                case "sum":
                    response = (parseFloat(commandArray[1]) + parseFloat(commandArray[2]));
                    this.ResponseDiv(response);
                    break;
                    
                case "subtract":
                    response = (parseFloat(commandArray[1]) - parseFloat(commandArray[2]));
                    this.ResponseDiv(response);
                    break;
    
                case "divide":
                    response = (parseFloat(commandArray[1]) / parseFloat(commandArray[2]));
                    this.ResponseDiv(response);
                    break;
    
                case "multiply":
                    response = (parseFloat(commandArray[1]) * parseFloat(commandArray[2]));
                    this.ResponseDiv(response);
                    break;
                
                case "clear":
                    while (this.textarea.lastElementChild!=null){
                        this.textarea.removeChild(this.textarea.lastElementChild);
                    }
                    break;
                
                case "echo": 
                    response = commandArray[1];
                    this.ResponseDiv(response);
                    break;
                
                case "date":
                    var currentdate = new Date(); 
                    response = "Last Sync: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " - "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
                    this.ResponseDiv(response);
                    break;
                
                case "concat": 
                    response = commandArray[1] + commandArray[2];
                    this.ResponseDiv(response);
                    break;
    
                case "bastaEsercitazioni":
                    response = "Caro professore, gentilmente potremmo smettere di fare 500 esercitazioni a settimana? Grazie <3";
                    this.ResponseDiv(response);
                    break;
    
                default:
                    response = "Command not found";
                    this.ResponseDiv(response);
                    break;
            }
    
    
    
            
        }
    
        newLine(e) {
            if (e.code == "Enter") {
                e.preventDefault();
                let text = this.lastDiv.innerText;
                this.lastDiv.contentEditable = "false";
                this.respond(text)
                this.lastDiv = this.createBox();
                this.textarea.appendChild(this.lastDiv);
            }
        }
    
        close() {
            document.body.removeChild(this.shell);
        }
    
        minimize(min) {
            
        }

        maximize(max) {
            
        }
    }

    class textEditor {
        textEditor;
        alertBanner;
        file;
        textarea;

        move = false;
        offset = [0,0];

        constructor () {
            let editor = document.createElement("div");
            editor.className = "editor";

            let upBar = document.createElement("div");
            upBar.className = "upBar";
            editor.appendChild(upBar);

            let close = document.createElement("div");
            close.className = "close";
            close.addEventListener("click", () => {this.close()})
            
            upBar.appendChild(close);
            

            let minimize = document.createElement("div");
            minimize.className = "minimize";
            
            upBar.appendChild(minimize);

            let maximize = document.createElement("div");
            maximize.className = "maximize";
            
            upBar.appendChild(maximize);

            let upBarText = document.createElement("span");
            upBarText.textContent = "TextEditor";
            upBar.appendChild(upBarText);

            let text = document.createElement("div");
            text.className = "textarea";
            text.contentEditable = "true";
            editor.appendChild(text);

            this.textEditor = editor;
            this.textarea = text;
            this.recover();
            priority++;
            this.textEditor.style.zIndex = priority;

            this.textarea.addEventListener("click", (e) => {
                this.textarea.focus();
                priority++;
                this.textEditor.style.zIndex = priority;

            })
            upBar.addEventListener('mousedown',(e)=>{this.start_move(e)} , true);
            upBar.style.cursor = 'move';
            document.body.addEventListener('mouseup',(e)=>{this.stop_move()}, true);
            document.body.addEventListener('mousemove', (e)=>{this.drag(e)}, true);
        }

        start_move(e) {
            //console.log(this);
            this.move = true;
            this.offset = [
                this.textEditor.offsetLeft - e.clientX,
                this.textEditor.offsetTop - e.clientY
            ];
        }
    
        stop_move(){
            this.move = false;
        }

        drag(e){
                if (this.move && e.clientX>0 && e.clientY>0){
                    let mousePosition = {
                        x : e.clientX,
                        y : e.clientY
            
                    };
                    this.textEditor.style.left = (mousePosition.x + this.offset[0]) + 'px';
                    this.textEditor.style.top  = (mousePosition.y + this.offset[1]) + 'px';
                }
            }

        close(){
            this.alert();
        }

        save(){
            this.write();
            document.body.removeChild(this.alertBanner);
            document.body.removeChild(this.textEditor);
        }

        end() {
            document.body.removeChild(this.alertBanner);
            document.body.removeChild(this.textEditor);
        }

        alert(){
            if (this.textarea.textContent == localStorage.getItem("file")) document.body.removeChild(this.textEditor);
            else {
            let alert = document.createElement("div");
            alert.className = "alert";

            let toptext = document.createElement("span");
            toptext.textContent = "Vuoi salvare?"
            alert.appendChild(toptext);

            let yes = document.createElement("button");
            yes.className = "yes";
            yes.textContent = "Yes"
            yes.addEventListener("click", () => {this.save();})

            let no = document.createElement("button");
            no.className = "no";
            no.textContent = "No"
            no.addEventListener("click", () => {this.end();})

            alert.appendChild(yes);
            alert.appendChild(no);
            document.body.appendChild(alert);
            this.alertBanner = alert;
            }
        }

        recover() {
            this.textarea.textContent = localStorage.getItem("file");        
        }

        write(){
            localStorage.setItem("file", this.textarea.textContent);        
        }
    }

    class Browser {
        browser;
        iframe = [];
        searchBar;
        iframeIndex = 0;
        priority = 10;
        display;
        downBar;
        upBar;
        icon;
        query = "https://www.bing.com/search?q="
        current;
        currentScheda;

        move = false;
        offset = [0,0];
        constructor () {
            let  browser= document.createElement("div");
            browser.className = "browser";

            let upBar = document.createElement("div");
            upBar.className = "upBar";
            browser.appendChild(upBar);

            let close = document.createElement("div");
            close.className = "close";
            close.addEventListener("click", (e) => { this.close(e); })
            upBar.appendChild(close);
            

            let minimize = document.createElement("div");
            minimize.className = "minimize";
            
            upBar.appendChild(minimize);

            let maximize = document.createElement("div");
            maximize.className = "maximize";
            
            upBar.appendChild(maximize);

            let searchBar = document.createElement("div");
            searchBar.className = "searchBar";
            searchBar.contentEditable = "true";
            upBar.appendChild(searchBar);

            let icon = document.createElement("i")
            icon.className = "bx bx-x";
            icon.id = "new";
            icon.addEventListener("click", (e) => {this.newSearch(e)});
            upBar.appendChild(icon);


            let display = document.createElement("div");
            display.className = "frame";
            browser.appendChild(display);

            let iframe = document.createElement("iframe");
            iframe.src = "https://www.bing.com";
            iframe.id = this.iframeIndex;
            this.current = iframe;
            iframe.frameBorder = "0";
            display.appendChild(iframe);


            searchBar.addEventListener('click', () => {
                searchBar.textContent = "";
            })

            searchBar.addEventListener('keydown', (e) => {
                if (e.code == "Enter") {
                    e.preventDefault();
                    this.current.src = this.query + searchBar.textContent;
                    this.currentScheda.textContent = searchBar.textContent;
                }
            })

            this.searchBar = searchBar;
            this.browser = browser;
            this.iframe[0] = iframe;
            this.iframeIndex++;
            iframe.style.zIndex = this.priority++;
            this.display = display;
            this.upBar = upBar;
            this.icon = icon;
            
            this.browser.style.zIndex = priority++;
            this.browser.addEventListener ("click", () => {
                
                this.browser.style.zIndex = priority++;
            })
            upBar.addEventListener('mousedown',(e)=>{this.start_move(e)} , true);
            upBar.style.cursor = 'move';
            document.body.addEventListener('mouseup',(e)=>{this.stop_move()}, true);
            document.body.addEventListener('mousemove', (e)=>{this.drag(e)}, true);
        }


        start_move(e) {
            //console.log(this);
            this.move = true;
            this.offset = [
                this.browser.offsetLeft - e.clientX,
                this.browser.offsetTop - e.clientY
            ];
        }
    
        stop_move(){
            this.move = false;
        }
        drag(e){
                //console.log(e.clientX,e.clientY,this.getHeight(),this.getWidth());
                if (this.move && e.clientX>0 && e.clientY>0){
                    let mousePosition = {
                        x : e.clientX,
                        y : e.clientY
            
                    };
                    this.browser.style.left = (mousePosition.x + this.offset[0]) + 'px';
                    this.browser.style.top  = (mousePosition.y + this.offset[1]) + 'px';
                }
            }

        firstNewTab (){
            if (this.iframe.length == 1) {
                let downBar = document.createElement("div");
                downBar.className = "downBar";
                this.browser.appendChild(downBar);
                this.downBar = downBar;

                this.upBar.style.height = "70px";
                this.icon.style.top = "30%";
                
                document.body.querySelectorAll(".browser>.upBar>div").forEach(x => x.style.top = "25%");
                this.searchBar.style.top = "30%";
                this.createTab();
            } 
        }

        newSearch(e) {
            e.preventDefault();
            this.firstNewTab();
            let iframe = document.createElement("iframe");
            iframe.src = "https://www.bing.com";
            iframe.frameBorder = "0";
            iframe.id = this.iframeIndex;
            this.display.appendChild(iframe);
            this.iframe[this.iframeIndex] = iframe;
            this.iframeIndex++;
            iframe.style.zIndex = this.priority++;
            this.current = iframe;
            let div = this.createTab();
            div.style.backgroundColor = "#3c3c3c";
        }

        createTab() {
            let div = document.createElement("div");
            div.className = "scheda";
            this.downBar.appendChild(div);
            div.style.cursor = "pointer";
            console.log(this.iframe[this.iframeIndex-1].src);
            if (this.iframe[this.iframeIndex-1].src == "https://www.bing.com/") 
                
                div.textContent = "Nuova Scheda";
            else {
                let string = this.iframe[this.iframeIndex-1].src.split("=");
                div.textContent = string[1];
            }
            div.id = this.iframeIndex-1;
            document.querySelectorAll(".browser>.downBar>div").forEach(x => x.style.backgroundColor = "#161615");

            div.addEventListener("click", () => {
                this.iframe[div.id].style.zIndex = this.priority++;
                this.current = this.iframe[div.id];
                document.querySelectorAll(".browser>.downBar>div").forEach(x => x.style.backgroundColor = "#161615");
                div.style.backgroundColor = "#3c3c3c";
                this.currentScheda = div;
            })


            let icon = document.createElement("i");
            icon.className = "bx bx-x";
            div.appendChild(icon);
            this.currentScheda = div;
            return div;
        }

       close() {
           document.body.removeChild(this.browser);
       }


    }

    function SwapScreen() {
        var fullscreen = true;
        var s1 = true;
        var s2 = false;

        var isMenu = false;

        let con1 = document.getElementsByClassName("container")[0];
        let con2 = document.getElementsByClassName("container2")[0];

        let schermo1 = document.getElementById("a");
        let schermo2 = document.getElementById("b");

        let arrow = document.getElementById("selectorA");

        terminalItem.addEventListener("click", function(e) { e.preventDefault(); 
            
            if (arrow.style.animationName == "arrowDown" || arrow.style.animationName == "arrowInToDown"){
                setTimeout(function ()  {
                console.log("a");
                Schermo2();
                fullscreen = true;
                }, 0);
                
            }
            else if (arrow.style.animationName == "arrowUp" || arrow.style.animationName == "arrowInToUp"){
                setTimeout(function ()  {
                    Schermo1();
                    fullscreen = true;
                }, 0);
            setTimeout(() => {constructTerminal()}, 1300);
            }
        });

        editorItem.addEventListener("click", function(e) { e.preventDefault();

            if (arrow.style.animationName == "arrowDown" || arrow.style.animationName == "arrowInToDown"){
                setTimeout(function ()  {
                console.log("a");
                Schermo2();
                fullscreen = true;
                }, 0);
            }

            else if (arrow.style.animationName == "arrowUp" || arrow.style.animationName == "arrowInToUp"){
                setTimeout(function ()  {
                    Schermo1();
                    fullscreen = true;
                }, 0);
            setTimeout(() => {constructEditor()}, 1300);
            }

        });
        browserItem.addEventListener("click", function(e) {e.preventDefault(); 
            if (arrow.style.animationName == "arrowDown" || arrow.style.animationName == "arrowInToDown"){
                setTimeout(function ()  {
                console.log("a");
                Schermo2();
                fullscreen = true;
                }, 0);  
            }
        else if (arrow.style.animationName == "arrowUp" || arrow.style.animationName == "arrowInToUp"){
            setTimeout(function ()  {
                Schermo1();
                fullscreen = true;
            }, 0);
            setTimeout(() => {constructBrowser()}, 1300);
        }
        });


        function displayMenu() {
            //hiding apps
                document.querySelectorAll(".terminal").forEach(x => x.style.visibility = "hidden")
                document.querySelectorAll(".browser").forEach(x => x.style.visibility = "hidden")
                document.querySelectorAll(".editor").forEach(x => x.style.visibility = "hidden")
                console.log("hidden")
            //
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
            //visulizing apps
            
            //

            isMenu = false;
            schermo1.style.animationName = "disappear1";
            schermo1.style.animationDelay = "0.3s"
            schermo1.style.animationFillMode = "backwards";
            schermo2.style.animationName = "disappear2";
            schermo2.style.animationDelay = "0s"
            arrowOut();
            iconOut();
            setTimeout(function() {
                if (s1){
                    document.querySelectorAll(".terminal").forEach(x => x.style.visibility = "visible")
                    document.querySelectorAll(".browser").forEach(x => x.style.visibility = "visible")
                    document.querySelectorAll(".editor").forEach(x => x.style.visibility = "visible")
                }
                else {    
                    document.querySelectorAll(".terminal").forEach(x => x.style.visibility = "hidden")
                    document.querySelectorAll(".browser").forEach(x => x.style.visibility = "hidden")
                    document.querySelectorAll(".editor").forEach(x => x.style.visibility = "hidden")
                }

            }, 1500);
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
                console.log(fullscreen);
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
                if (arrow.style.animationName == "arrowDown" || arrow.style.animationName == "arrowInToDown"){
                    
                    setTimeout(function ()  {console.log("a");
                    Schermo2();
                    fullscreen = true;
                    }, 300);
                    
                }
                else if (arrow.style.animationName == "arrowUp" || arrow.style.animationName == "arrowInToUp")
                    setTimeout(function ()  {
                        Schermo1();
                        fullscreen = true;
                    }, 300);
                    
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
                s1 = true;
                s2 = false;
                
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
            fullscreen = true;
        })

        schermo2.addEventListener("click", function (e) {
            e.preventDefault();
            Schermo2();
            fullscreen = true;
        })
    }

    constructSwapScreen();
    setTimeout(function ()  {SwapScreen();}, 1000);
    
    
}

function timeCalc(){
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currentdate = new Date(); 

    time =  months[currentdate.getMonth()+1] + " " + currentdate.getDate() + " "+ days[currentdate.getDay() % 7] + " " + (currentdate.getHours()<10?'0':'') + currentdate.getHours()  + ":" + ((currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() );
    document.getElementById("time").textContent = time;
}


bootLoader();





