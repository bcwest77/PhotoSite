<<<<<<< HEAD
=======
function changeImage(imgSrc) {
    document.getElementById("modal-img").src = imgSrc;
}

function defaultTheme() {
    currentTheme = "default";
    document.cookie = "theme=default";

    document.body.className = defaultThemeClass;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
}
>>>>>>> 358a9660d3aa14ffc5d0c363f7e98e17ddf67e1d
=======
}
>>>>>>> 358a9660d3aa14ffc5d0c363f7e98e17ddf67e1d
=======
=======
>>>>>>> 358a9660d3aa14ffc5d0c363f7e98e17ddf67e1d
=======
>>>>>>> 358a9660d3aa14ffc5d0c363f7e98e17ddf67e1d
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
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 358a9660d3aa14ffc5d0c363f7e98e17ddf67e1d
=======
}
>>>>>>> 358a9660d3aa14ffc5d0c363f7e98e17ddf67e1d
=======
}
>>>>>>> 358a9660d3aa14ffc5d0c363f7e98e17ddf67e1d
