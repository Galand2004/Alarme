// Importe la bibliothèque Recorder.js
const Recorder = require("recorderjs");

// Initialise le microphone
const recorder = new Recorder();

// Écoute le clic sur le bouton "Démarrer l'enregistrement"
document.querySelector("#start").addEventListener("click", () => {
  // Démarre l'enregistrement
  recorder.start();
});

// Écoute le clic sur le bouton "Arrêter l'enregistrement"
document.querySelector("#stop").addEventListener("click", () => {
  // Arrête l'enregistrement
  recorder.stop();

  // Lit l'enregistrement
  const audio = document.querySelector("#recording");
  audio.src = recorder.getBlob();
  audio.play();
});
