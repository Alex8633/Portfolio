let txt = 'Bienvenue Sur Mon Portfolio'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */
let i = 0;



function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewritter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


let typewritter = document.getElementById("typewritter");
if (typewritter) {
  typeWriter();
} 

// menu responsive

var navResp = document.getElementById("navAnim");
var target = document.getElementById("navDeroule");

navResp.addEventListener("click", function(e) {
  target.classList.toggle('is-opened');
});
