var number = document.querySelectorAll(".drum").length;
for (var i = 0; i < number; i++) {
    var m = document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // n.style.color = "yellow";
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
  //  this.style.color = "yellow";
var buttonhtml = this.innerHTML;
switch (buttonhtml) {
  case  "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3"); 
      tom2.play();
      break;
    
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
          var tom4  = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

          case "j":
            var tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
            break;

          case "k":
            var tom6 = new Audio("sounds/crash.mp3");
            tom6.play();
            break;
          case "l":
            var tom7  = new Audio("sounds/kick-bass.mp3");
            tom7.play();
            break;
}


  });
}






// using this we can get property