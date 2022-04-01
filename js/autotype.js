var i = 0;
var txt = 'Software Developer';
var speed = 50;
function typeWriter() {
          if (i < txt.length) {
            document.getElementById("autotype").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
}
