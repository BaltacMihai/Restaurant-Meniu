function playSong(status) {
  const song = document.getElementById("song");

  if (status == "play") {
    document.getElementById("song-play").style.display = "none";
    document.getElementById("song-pause").style.display = "block";
    song.play();
  } else if (status == "pause") {
    document.getElementById("song-play").style.display = "block";
    document.getElementById("song-pause").style.display = "none";
    song.pause();
  }
}
