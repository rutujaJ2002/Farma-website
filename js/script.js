
//menubar
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header-2 .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//onclick to producs for pro-description
document. getElementById("myButton"). onclick = function () {
    location. href = "https://rutujaj2002.github.io/Farma-website/description.html";
};
