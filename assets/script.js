// JavaScript source code
var captcha;

function reloadPage() {
    generate();
    document.getElementById("key").innerHTML = "";
}

function generate() {

    document.getElementById("submit").value = "";
    captcha = document.getElementById("image");
    var uniquechar = "";

    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
        uniquechar += randomchar.charAt(Math.random() * randomchar.length)
    }
    captcha.innerHTML = uniquechar;
}

function printmsg() {
    const usr_input = document.getElementById("submit").value;

    if (usr_input == captcha.innerHTML) {
        document.getElementById("key").innerHTML = "Matched";
        document.getElementById("key").style.color = "greenyellow";
        generate();
    }
    else {
        document.getElementById("key").innerHTML = "not Matched, Try Again!";
        document.getElementById("key").style.color = "red";
        //generate();
    }
}