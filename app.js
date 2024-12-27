const apiURL = "https://spotify.com/api/music"; // Replace with your API endpoint
const trackList = document.getElementById("track-list");
const filterInput = document.getElementById("filter");
const audioPlayer = document.getElementById("audio-player");

// Fetch music data
async function fetchMusic() {
  try {
    const response = await fetch(apiURL);
    const tracks = await response.json();
    displayTracks(tracks);
  } catch (error) {
    console.error("Error fetching music data:", error);
  }
}

// Display tracks in HTML
function displayTracks(tracks) {
  trackList.innerHTML = "";
  tracks.forEach(track => {
    const trackDiv = document.createElement("div");
    trackDiv.classList.add("track");
    trackDiv.textContent = `${track.artist} - ${track.title}`;
    trackDiv.dataset.audio = track.audioUrl; // Assuming the API provides an audio URL
    trackDiv.addEventListener("click", () => playTrack(track.audioUrl));
    trackList.appendChild(trackDiv);
  });
}

// Play selected track
function playTrack(Cheri-Cheri-Lady.mp3) {
  audioPlayer.src = audioUrl;
  audioPlayer.play();
}

// Filter tracks by artist or genre
filterInput.addEventListener("input", async () => {
  const filterText = filterInput.value.toLowerCase();
  try {
    const response = await fetch(apiURL);
    const tracks = await response.json();
    const filteredTracks = tracks.filter(track => 
      track.artist.toLowerCase().includes(filterText) || 
      track.genre.toLowerCase().includes(filterText)
    );
    displayTracks(filteredTracks);
  } catch (error) {
    console.error("Error filtering tracks:", error);
  }
});

// Load music data on page load
fetchMusic();
