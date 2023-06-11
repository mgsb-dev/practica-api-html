if (typeof window !== "undefined") {
  const inputContainer = document.getElementById("inputContainer");
  const videoPlayer = document.getElementById(
    "reproductorVideo"
  ) as HTMLVideoElement;
  const botonPlay = document.getElementById("botonPlay") as HTMLButtonElement;
  const botonPause = document.getElementById("botonPause") as HTMLButtonElement;
  const controladorVolumen = document.getElementById(
    "controladorVolumen"
  ) as HTMLInputElement;

  const cargandoVideo = document.getElementById("cargandoVideo");
  cargandoVideo.style.display = "none";
  videoPlayer.style.display = "none";

  botonPlay.addEventListener("click", () => videoPlayer.play());
  botonPause.addEventListener("click", () => videoPlayer.pause());
  controladorVolumen.addEventListener("input", () => {
    videoPlayer.volume = parseFloat(controladorVolumen.value);
  });

  const loadVideo = (file: File) => {
    const videoURL = URL.createObjectURL(file);
    videoPlayer.src = videoURL;
    videoPlayer.addEventListener("canplaythrough", () => {
      if (cargandoVideo) {
        cargandoVideo.style.display = "none";
        videoPlayer.style.display = "block";
      }
    });
  };

  const fileInput = document.getElementById("video-input") as HTMLInputElement;
  fileInput.addEventListener("change", (event) => {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      const isVideo = file.type.includes("video/");
      if (isVideo) {
        cargandoVideo.style.display = "block";

        loadVideo(file);
      }
    }
  });

  inputContainer.appendChild(fileInput);
}
