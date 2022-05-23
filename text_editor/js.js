
class textEditor {
    textEditor;
    alertBanner;
    file;
    textarea;

    constructor () {
        let editor = document.createElement("div");
        editor.className = "editor";

        let upBar = document.createElement("div");
        upBar.className = "upBar";
        editor.appendChild(upBar);

        let close = document.createElement("div");
        close.className = "close";
        close.addEventListener("click", () => {this.close()})
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
        text.contentEditable = "true";
        editor.appendChild(text);

        this.textEditor = editor;
        this.textarea = text;
        this.recover();

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

    recover() {
        this.textarea.textContent = localStorage.getItem("file");        
    }

    write(){
        localStorage.setItem("file", this.textarea.textContent);        
    }
}

let myeditor = new textEditor();
document.body.appendChild(myeditor.textEditor);
myeditor.recover();

