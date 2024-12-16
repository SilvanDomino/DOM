let button = document.getElementById("button--js");

function buttonClick(){
    button.classList.toggle("rotated");
    let header = document.getElementsByTagName("header")[0];
    header.classList.toggle("header__collapsed");
}

button.onclick = buttonClick;