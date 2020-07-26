var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
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