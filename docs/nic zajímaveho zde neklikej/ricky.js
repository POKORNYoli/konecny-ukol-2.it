document.addEventListener("DOMContentLoaded", function () {
  showScene("introScene");
});

function showScene(sceneId) {
  const scenes = document.querySelectorAll(".scene");
  scenes.forEach((scene) => {
    scene.style.display = "none";
  });
  const currentScene = document.getElementById(sceneId);
  currentScene.style.display = "block";
}

function rickroll() {
  showScene("rickrollScene");
  const audio = document.getElementById("rickrollAudio");
  audio.play();
}

function safeBrowsing() {
  showScene("safeBrowsingScene");
}

function laugh() {
  showScene("laughScene");
}

function gameOver() {
  const message = "Hra skončila. Chceš hrát znovu?";
  document.getElementById("gameOverMessage").textContent = message;
  showScene("gameOverScene");
}

function restartGame() {
  showScene("introScene");
  const audio = document.getElementById("rickrollAudio");
  audio.pause();
  audio.currentTime = 0;
}

function victory() {
  showScene("victoryScene");
}




