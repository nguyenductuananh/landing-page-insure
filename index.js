let menuBtn = document.getElementsByClassName('mobile-menu')[0];
let closeBtn = document.getElementsByClassName('close-btn')[0];
let menu = document.getElementsByClassName('menu')[0];
menuBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);
function showMenu(){
    menu.style.left = "0%";
}

function closeMenu(){
    menu.style.left = "100%";
}