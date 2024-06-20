let sound;

document.addEventListener("keydown", logKey);
function logKey(e) {
  const key = e.code;
  console.log("key :", key);
  switch (key) {
    case "KeyW":
      sound = new Audio("./sounds/crash.mp3");
      sound.play();
      animateKey("w");
      break;
    case "KeyA":
      sound = new Audio("./sounds/kick-bass.mp3");
      sound.play();
      animateKey("a");
      break;
    case "KeyS":
      sound = new Audio("./sounds/snare.mp3");
      sound.play();
      animateKey("s");
      break;
    case "KeyD":
      sound = new Audio("./sounds/tom-1.mp3");
      sound.play();
      animateKey("d");
      break;
    case "KeyJ":
      sound = new Audio("./sounds/tom-2.mp3");
      sound.play();
      animateKey("j");
      break;
    case "KeyK":
      sound = new Audio("./sounds/tom-3.mp3");
      sound.play();
      animateKey("k");
      break;
    case "KeyL":
      sound = new Audio("./sounds/tom-4.mp3");
      sound.play();
      animateKey("l");
      break;
    default:
      console.log("No key matched!");
  }
}

function animateKey(key) {
  const activeKey = document.querySelector("." + key);
  activeKey.classList.add("pressed");
  setTimeout(() => {
    activeKey.classList.remove("pressed");
  }, 100);
}
