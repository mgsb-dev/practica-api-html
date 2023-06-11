if (typeof window !== "undefined") {
    var inputContainer = document.getElementById("inputContainer");
    var videoPlayer_1 = document.getElementById("reproductorVideo");
    var botonPlay = document.getElementById("botonPlay");
    var botonPause = document.getElementById("botonPause");
    var controladorVolumen_1 = document.getElementById("controladorVolumen");
    var cargandoVideo_1 = document.getElementById("cargandoVideo");
    cargandoVideo_1.style.display = "none";
    videoPlayer_1.style.display = "none";
    botonPlay.addEventListener("click", function () { return videoPlayer_1.play(); });
    botonPause.addEventListener("click", function () { return videoPlayer_1.pause(); });
    controladorVolumen_1.addEventListener("input", function () {
        videoPlayer_1.volume = parseFloat(controladorVolumen_1.value);
    });
    var loadVideo_1 = function (file) {
        var videoURL = URL.createObjectURL(file);
        videoPlayer_1.src = videoURL;
        videoPlayer_1.addEventListener("canplaythrough", function () {
            if (cargandoVideo_1) {
                cargandoVideo_1.style.display = "none";
                videoPlayer_1.style.display = "block";
            }
        });
    };
    var fileInput = document.getElementById("video-input");
    fileInput.addEventListener("change", function (event) {
        var file = event.target.files[0];
        if (file) {
            var isVideo = file.type.includes("video/");
            if (isVideo) {
                cargandoVideo_1.style.display = "block";
                loadVideo_1(file);
            }
        }
    });
    inputContainer.appendChild(fileInput);
}
