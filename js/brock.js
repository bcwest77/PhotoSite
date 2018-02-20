$(document).ready(function() {
    $("#navPlaceholder").height($("nav").outerHeight());

    currentTheme = "default";
    cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        key = cookies[i].split("=")[0];
        value = cookies[i].split("=")[1];
    
        if (key === "theme") {
            currentTheme = value;
        }
    }
    if (currentTheme === "inverted")
        invertTheme();
    else
        defaultTheme();
});

function changeImage(imgSrc) {
    document.getElementById("modal-img").src = imgSrc;
    $("#imgPopup a").attr("href", imgSrc);
}

function defaultTheme() {
    currentTheme = "default";
    document.cookie = "theme=default";

    document.body.className = "theme-default";
}
function invertTheme() {
    currentTheme = "inverted";
    document.cookie = "theme=inverted";
    
    document.body.className = "theme-inverted";
}
function changeTheme() {
    if (currentTheme === "default")
        invertTheme();
    else
        defaultTheme();
}