function playSound(key) {
    switch (key) {
        case "w":
            playSoundAccordingToKey("./sounds/tom-1.mp3");
            break;
        case "a":
            playSoundAccordingToKey("./sounds/tom-2.mp3");
            break;
        case "s":
            playSoundAccordingToKey("./sounds/tom-3.mp3");
            break;
        case "d":
            playSoundAccordingToKey("./sounds/tom-4.mp3");

            break;
        case "j":
            playSoundAccordingToKey("./sounds/snare.mp3");
            break;

        case "k":
            playSoundAccordingToKey("./sounds/crash.mp3");
            break;

        case "l":
            playSoundAccordingToKey("./sounds/kick-bass.mp3");
            break;
        default:
            break;

    }
}

function playSoundAccordingToKey(path) {
    new Audio(path).play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(
        function () {
            activeButton.classList.remove("pressed")
        },
        100,
    );



}



var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

document.addEventListener("keydown", function (event) {

    playSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});