var type = document.getElementById('app');

var typewriter = new Typewriter(type, {
  loop: true,
  cursor: "|"
});

typewriter.typeString('Hi, I\'m Sushant!')
  .pauseFor(2000)
  .deleteAll()
  .typeString('I love coding')
  .pauseFor(2000)
  .deleteAll()
  .typeString('I am a web designer')
  .pauseFor(2000)
  .deleteChars(8)
  .typeString('developer')
  .pauseFor(2000)
  .start();

document.querySelector('.navbar__btn--cover').addEventListener('click', toggleDropDown);

function toggleDropDown() {
  document.getElementById('dropdown').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.navbar__btn--cover')) {
  var dropdown = document.getElementById('dropdown');
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}