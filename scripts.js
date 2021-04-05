var logo = document.getElementById("logo");
var js = document.getElementById("portrait");

logo.addEventListener('mouseover', () => {
    logo.style.color = "red";
    setTimeout(() => {
        logo.style.color = "black";
    }, 500);
});

js.addEventListener('mouseover', () => {
    var x = Math.floor(Math.random()*1000);
    var y = Math.floor(Math.random()*600);
    js.style.position = 'absolute';
    js.style.left = `${x}px`;
    js.style.top = `${y}px`;
    console.log(`x=${x}px y=${y}px`);
})
