//Fuck you if you're viewing this

document.addEventListener('DOMContentLoaded', function() {
    var oefo = prompt("Please enter the passcode to view the image:", "");
    var video = document.querySelector("#body");
    
    if (oefo === "1313") {
        video.style.visibility = "visible";
    } else {
        alert("Incorrect passcode. You will not be able to view the image.");
        video.style.visibility = "hidden";
    }
});