let txt = 'Bienvenue Sur Mon Portfolio'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */
let i = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewritter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();