let container = document.getElementById("iconContainer");
let container1 = document.getElementById("iconContainer1");
let container2 = document.getElementById("iconContainer2");
let pass = document.getElementById("password");

container.addEventListener("click", function(e) {
    document.getElementById("iconContainer").className = "move";
    container1.style.display = container2.style.display = "none";
    setTimeout(function(){pass.style.display = "block"}, 1100);
});
container1.addEventListener("click", function(e) {
    document.getElementById("iconContainer1").className = "move";
    container.style.display = container2.style.display = "none";
    setTimeout(function(){pass.style.display = "block"}, 1100);
});
container2.addEventListener("click", function(e) {
    document.getElementById("iconContainer2").className = "move";
    container.style.display = container1.style.display = "none";
    setTimeout(function(){pass.style.display = "block"}, 1100);
});

pass.addEventListener("keydow", function(e) {
    if (e.code == "Enter") {
        e.preventDefault();
        if (pass.textContent == "1234") home();
    }
});