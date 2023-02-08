
var numberOfDrums = document.querySelectorAll(".drum").length;

// handling button press(clicking)
for(var i = 0; i < numberOfDrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// handling key press
document.addEventListener("keydown", function(event){
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
});

// producing sound on pressing or clicking any key
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
    
        default:console.log(buttonInnerHTML);
            break;
    }
}

// adding animation to button on pressing or clicking any key
function buttonAnimation(currentKey)
{
    // adding "pressed" class to buttons
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // removing "pressed" class after 100 mili-sec
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    // first parameter - function to be executed
    // second parameter - time in minisecond
}