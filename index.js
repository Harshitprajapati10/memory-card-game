var audio = new Audio()
audio.src = "audio.mp3"
audio.play();
audio.addEventListener("ended", function() {
  audio.play();
});
