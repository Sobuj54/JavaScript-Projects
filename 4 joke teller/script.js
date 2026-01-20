// VoiceRSS Javascript SDK

const audioElement = document.getElementById("audio");
const button = document.getElementById("button");

// disable/enable button
function toggleButton() {
  button.disabled = !button.disabled;
}

// passing joke to viceRss api
function tellMe(joke) {
  VoiceRSS.speech({
    key: "dd5c9fda9f6b4cbe808f9ba199bea59c",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// get jokes from api
async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    joke = data.joke;

    // text to speech
    tellMe(joke);
    // disable button
    toggleButton();
  } catch (error) {
    console.log("Failed to get jokes.", error);
  }
}

// event listeners
button.addEventListener("click", getJokes);

audioElement.addEventListener("ended", toggleButton);
