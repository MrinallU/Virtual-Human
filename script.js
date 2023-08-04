
// find dfMessenger declared in html file (test)
const dfMessenger = document.querySelector('df-messenger');

// listen for response
dfMessenger.addEventListener('df-response-received', function(event) {
  // set session id to send to qualtrics later
  sessionID = dfMessenger.getAttribute("session-id");

  console.log(sessionID);
  console.log("received");
  console.log(event);

  // displayName is the name you give in Dialog flow to the intent, name is the
  // intent id dialogflow assigns
  var displayName = event.detail.response.queryResult.intent.displayName;

  // make video link
  displayName = displayName.replaceAll(" ", "_");
  displayName = displayName.replaceAll("/", "_");
  console.log(displayName);
  // change this to point to the folder where your videos are, if not in the
  // videos folder
  var video_folder = "/videos/";
  var videoURL = video_folder + displayName + ".mp4";
  changeVid(videoURL);
});

function switchIdle() {
  /* Switch between a preloaded idle video and the newly loaded video to remove
   * white flash*/
  var em = document.getElementById("myVideo");
  var temp = window.getComputedStyle(em).getPropertyValue("opacity");

  if (temp == "1") {
    document.getElementById("idleVideo").style.opacity = "1";
    document.getElementById("myVideo").style.opacity = "0";
  }

  if (temp == "0") {
    document.getElementById("myVideo").style.opacity = "1";
    document.getElementById("idleVideo").style.opacity = "0";
  }
}

// Add Parameter to Change Video Based on Intent Name
function changeVid(URL) {
  var vid = document.getElementById("myVideo");
  vid.src = URL;
  vid.load();
  vid.play();
  document.getElementById("myVideo").style.opacity = "1";
  document.getElementById("idleVideo").style.opacity = "0";
}

function redirectPage() {
  // REPLACE QUALTRICS SURVEY URL HERE
  var url = "https://ufl.qualtrics.com/jfe/form/SV_1S7mgXdRxlo22ay"
  window.open(url);
}
