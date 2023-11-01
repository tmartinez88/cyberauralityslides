let context;
let button;
let playing = false;

window.onload = (event) => {
  const audioEntity = document.querySelector("#sourcy");
  context = audioEntity.components.sound.listener.context;
  context.suspend();
  button = document.querySelector(".audioContext"); 
};

function startSound() {
  if (!playing) {
    context.resume();
    //button.innerHTML = "Stop";
    playing = true;
    console.log('hello');
  }
  else {
    context.suspend();
    //button.innerHTML = "Start";
    playing = false;
  }
}