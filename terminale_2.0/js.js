class Shell {
    shell;
    textarea;
    lastDiv;
    history = [];
    historyIndex = 0;
    isVisible = true;

    constructor () {
        let terminal = document.createElement("div");
        terminal.className = "terminal";

        let upBar = document.createElement("div");
        upBar.className = "upBar";
        terminal.appendChild(upBar);

        let close = document.createElement("div");
        close.className = "close";
        close.addEventListener("click", () => {this.close(this.isVisible)})
        let closeText = document.createElement("div");
        closeText.className = "buttons_text";
        close.appendChild(closeText);
        closeText.innerHTML = "&#215;"
        upBar.appendChild(close);
        

        let minimize = document.createElement("div");
        minimize.className = "minimize";
        let minText = document.createElement("div");
        minText.className = "buttons_text";
        minimize.appendChild(minText);
        minText.innerHTML = "&#8212;";
        upBar.appendChild(minimize);

        let maximize = document.createElement("div");
        maximize.className = "maximize";
        let maxText = document.createElement("div");
        maxText.className = "buttons_text";
        maximize.appendChild(maxText);
        maxText.innerHTML = "&harr;"
        maxText.setAttribute("style", "transform: rotate(45deg);")
        upBar.appendChild(maximize);

        let upBarText = document.createElement("span");
        upBarText.textContent = "matteogallina - zsh - home";
        upBar.appendChild(upBarText);

        let text = document.createElement("div");
        text.className = "textarea";
        terminal.appendChild(text);

        this.shell = terminal;
        console.log(this.shell);
        this.textarea = text;
        this.lastDiv = this.createBox();
        this.textarea.appendChild(this.lastDiv);

        this.textarea.addEventListener("click", (e) => {this.lastDiv.focus();})

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
    }


    dragElement(elmnt) {
        console.log("dragElement: " + elmnt);
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;
        

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
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

    close(visible) {
        if (visible){
            this.shell.style.display = "none";            
            this.respond("clear");
            this.isVisible = false;
        }
        else {
            this.shell.style.display = "block";            
            this.respond("clear");
            this.isVisible = true;
        }
        
    }

 
}

let myShell = new Shell();
document.body.appendChild(myShell.shell);
myShell.dragElement(myShell.shell);

