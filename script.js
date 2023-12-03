function startVideo() {
    var video = document.querySelectorAll("Video");
    video.play();
    document.getElementById("playButton").style.display = "none";
}

function showPlayButton() {
    document.getElementById("playButton").style.display = "block";
}