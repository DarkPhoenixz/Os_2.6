
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

    constructor () {
        let  browser= document.createElement("div");
        browser.className = "browser";

        let upBar = document.createElement("div");
        upBar.className = "upBar";
        browser.appendChild(upBar);

        let close = document.createElement("div");
        close.className = "close";
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
        iframe.src = "http://www.bing.com";
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
    }

    firstNewTab (){
        if (this.iframe.length == 1) {
            let downBar = document.createElement("div");
            downBar.className = "downBar";
            this.browser.appendChild(downBar);
            this.downBar = downBar;

            this.upBar.style.height = "70px";
            this.icon.style.top = "30%";
            document.querySelectorAll(".browser>.upBar>div").forEach(x => x.style.top = "30%");
            
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
        div.textContent = "Nuova Scheda";
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


}

let mybrowser = new Browser();
document.body.appendChild(mybrowser.browser);






