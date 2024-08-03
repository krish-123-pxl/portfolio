var typed = new Typed('#element', {
    strings: ['Frontend Developer'],
    typeSpeed: 150,
});
var nav = document.querySelector(".nav-links");
var menuBtn = document.querySelector(".menu-icon");
var toggelBtn = document.getElementById("toggel");
var closeBtn = document.getElementById("close");

menuBtn.addEventListener("click",()=>{
    nav.style.top = '60px';
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
})
closeBtn.addEventListener("click",()=>{
    nav.style.top = '-300px';
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})