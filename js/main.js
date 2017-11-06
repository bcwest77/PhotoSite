function changeImage(imgSrc) {
    document.getElementById("modal-img").src = imgSrc;
}

function defaultTheme() {
    currentTheme = "default";
    document.cookie = "theme=default";

    document.body.className = defaultThemeClass;
}
function invertTheme() {
    currentTheme = "inverted";
    document.cookie = "theme=inverted";
    
    document.body.className = invertedThemeClass;
}
function changeTheme() {
    if (currentTheme === "default") {
        invertTheme();
        console.log("invert");
    }
    else
    {
        console.log("def");
        defaultTheme();
    }
}