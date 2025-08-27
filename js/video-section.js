document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("feature-video");
  const playIcon = document.getElementById("play-icon");

  function togglePlay() {
    if (video.paused) {
      video.play();
      playIcon.classList.add("hidden");
    } else {
      video.pause();
      // Remove hidden class after short delay so animation plays with delay
      setTimeout(() => {
        playIcon.classList.remove("hidden");
      }, 150); // Small delay before starting fade-in animation
    }
  }

  video.addEventListener("click", togglePlay);
  playIcon.addEventListener("click", togglePlay);

  video.addEventListener("ended", function () {
    playIcon.classList.remove("hidden");
  });
});

