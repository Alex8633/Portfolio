let txt = 'Bienvenue Sur Mon Portfolio'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */
let i = 0;

let type = document.getElementById("typewritter");
console.log(type);
console.log(txt.length);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewritter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}