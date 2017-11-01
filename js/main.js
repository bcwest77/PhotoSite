function changeImage(imgSrc) {
    document.getElementById("modal-img").src = imgSrc;
}

function changeTheme() {
    if (theme == "default") {
        invertTheme();
    }
    else
    {
        defaultTheme();
    }
}
function defaultTheme() {
    theme = "default";
    document.cookie = "theme=default";

    document.body.className = oldBodyClass;
}
function invertTheme() {
    theme = "inverted";
    document.cookie = "theme=inverted";
    
    document.body.className = "inverted";
}