//text entry stuff
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("name");

function getInputVal() {
    console.log(inputEl.value);
  }

  inputBtn.addEventListener("click", getInputVal);

  document.write(inputEl.value)

  

//Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };

//Define constants
const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger"),
      cameraStart2 = document.querySelector("#camera--start2")

//Access the ddevice camera and stream to cameraView
      function cameraStart() {
        let header = document.querySelector("h1");
        header.innerText = "My message";
        document.write(input.El.value)
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
    }


//Take a picture when cameraTrigger is tapped
    cameraTrigger.onclick = function() {
        cameraSensor.width = cameraView.videoWidth;
        cameraSensor.height = cameraView.videoHeight;
        cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
        cameraOutput.src = cameraSensor.toDataURL("image/webp");
        cameraOutput.classList.add("taken");
    };
    //Start the video stream when the window loads
   
    
    
    

// Install ServiceWorker
if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register( '/camera-app/part-2/sw.js' , { scope : ' ' } ).then(function() {
      console.log('CLIENT: service worker registration complete.');
    }, function() {
      console.log('CLIENT: service worker registration failure.');
    });
  } else {
    console.log('CLIENT: service worker is not supported.');
  }