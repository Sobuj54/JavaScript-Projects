const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// promt to select media stream, pass to vieo element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("media stream err ", error);
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// on load
selectMediaStream();
