// window.alert("Welcome to basics web pages with html,css and javascript");
window.addEventListener("DOMContentLoaded", () => {
    let loadingGif = document.querySelector('.loading');
    loadingGif.style.display = "none";

    var typed = new Typed('#typeContent', {
        strings: ['This Site create as a resource collection of library for web Development Projects'],
        typeSpeed: 20,// typing speed in milliseconds
        backSpeed: 30,
        loop: false,
        showCursor: false,
        
    });
});
