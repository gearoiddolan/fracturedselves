
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BELOW ARE (modified for videos) functions for Modal window pop ups
// based on: https://www.w3schools.com/howto/howto_css_modals.asp
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// /////////////////////MODALs///////////////////////

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ start of block 1
// Get the modal aside 1 L a
var modal_1La = document.getElementById("myModal_1La");

// Get the button that opens the modal
var btn1La = document.getElementById("myModal_1LaBtn");

// Get the <span> element that closes the modal
var span1La = document.getElementsByClassName("modal_1Laclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
btn1La.onclick = function() {
  modal_1La.style.display = "block";
  // playVideo_1La()
}

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
span1La.onclick = function() {
  modal_1La.style.display = "none";
  // pauseVideo_1La()
}

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
let outClick_1La = document.getElementsByClassName("modal_1La")[0];
outClick_1La.onclick = function() {
  modal_1La.style.display = "none";
  // pauseVideo_1La()
}

// PLAYBACK AUTOCONTROL OF MODAL+++++++++++++++++++
// var video1Laa = document.getElementById("videoID1La");
// function playVideo1La() {
//   video1Laa.pause();
//   video1Laa.currentTime = 0;
//   video1Laa.play();
// }
// var video1Lab = document.getElementById("videoID1La");
// function pauseVideo1La() {
// video1Lab.pause();
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get the modal aside 1 R a
var modal_1Ra = document.getElementById("myModal_1Ra");

// Get the button that opens the modal
var btn1Ra = document.getElementById("myModal_1RaBtn");

// Get the <span> element that closes the modal
var span1Ra = document.getElementsByClassName("modal_1Raclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
btn1Ra.onclick = function() {
  modal_1Ra.style.display = "block";
}

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
span1Ra.onclick = function() {
  modal_1Ra.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
let outClick_1Ra = document.getElementsByClassName("modal_1Ra")[0];
outClick_1Ra.onclick = function() {
  modal_1Ra.style.display = "none";
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get the modal aside 1 R b
var modal_1Rb = document.getElementById("myModal_1Rb");

// Get the button that opens the modal
var btn1Rb = document.getElementById("myModal_1RbBtn");

// Get the <span> element that closes the modal
var span1Rb = document.getElementsByClassName("modal_1Rbclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
btn1Rb.onclick = function() {
  modal_1Rb.style.display = "block";
}

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
span1Rb.onclick = function() {
  modal_1Rb.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
let outClick_1Rb = document.getElementsByClassName("modal_1Rb")[0];
outClick_1Rb.onclick = function() {
  modal_1Rb.style.display = "none";
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++OOOOOOOOOOOOOOOOOOOOOOOOOOOOO end of block 1









// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ start of block 3
// Get the modal aside 3 L a
var modal_3La = document.getElementById("myModal_3La");

// Get the button that opens the modal
var btn3La = document.getElementById("myModal_3LaBtn");

// Get the <span> element that closes the modal
var span3La = document.getElementsByClassName("modal_3Laclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
btn3La.onclick = function() {
  modal_3La.style.display = "block";
  // playVideo_3La()
}

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
span3La.onclick = function() {
  modal_3La.style.display = "none";
  // pauseVideo_3La()
}

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
let outClick_3La = document.getElementsByClassName("modal_3La")[0];
outClick_3La.onclick = function() {
  modal_3La.style.display = "none";
  // pauseVideo_3La()
}

// PLAYBACK AUTOCONTROL OF MODAL+++++++++++++++++++
// var video3Laa = document.getElementById("videoID3La");
// function playVideo3La() {
//   video3Laa.pause();
//   video3Laa.currentTime = 0;
//   video3Laa.play();
// }
// var video3Lab = document.getElementById("videoID3La");
// function pauseVideo3La() {
// video3Lab.pause();
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get the modal aside 3 R a
// var modal_3Ra = document.getElementById("myModal_3Ra");

// Get the button that opens the modal
// var btn3Ra = document.getElementById("myModal_3RaBtn");

// Get the <span> element that closes the modal
// var span3Ra = document.getElementsByClassName("modal_3Raclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
// btn3Ra.onclick = function() {
//   modal_3Ra.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
// span3Ra.onclick = function() {
//   modal_3Ra.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
// let outClick_3Ra = document.getElementsByClassName("modal_3Ra")[0];
// outClick_3Ra.onclick = function() {
//   modal_3Ra.style.display = "none";
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get the modal aside 3 R b
// var modal_3Rb = document.getElementById("myModal_3Rb");

// Get the button that opens the modal
// var btn3Rb = document.getElementById("myModal_3RbBtn");

// Get the <span> element that closes the modal
// var span3Rb = document.getElementsByClassName("modal_3Rbclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
// btn3Rb.onclick = function() {
//   modal_3Rb.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
// span3Rb.onclick = function() {
//   modal_3Rb.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
// let outClick_3Rb = document.getElementsByClassName("modal_3Rb")[0];
// outClick_3Rb.onclick = function() {
//   modal_3Rb.style.display = "none";
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++OOOOOOOOOOOOOOOOOOOOOOOOOOOOO end of block 3








// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ start of block 6
// Get the modal aside 6 L a
var modal_6La = document.getElementById("myModal_6La");

// Get the button that opens the modal
var btn6La = document.getElementById("myModal_6LaBtn");

// Get the <span> element that closes the modal
var span6La = document.getElementsByClassName("modal_6Laclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
btn6La.onclick = function() {
  modal_6La.style.display = "block";
  // playVideo_6La()
}

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
span6La.onclick = function() {
  modal_6La.style.display = "none";
  // pauseVideo_6La()
}

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
let outClick_6La = document.getElementsByClassName("modal_6La")[0];
outClick_6La.onclick = function() {
  modal_6La.style.display = "none";
  // pauseVideo_6La()
}

// PLAYBACK AUTOCONTROL OF MODAL+++++++++++++++++++
// var video6Laa = document.getElementById("videoID6La");
// function playVideo6La() {
//   video6Laa.pause();
//   video6Laa.currentTime = 0;
//   video6Laa.play();
// }
// var video6Lab = document.getElementById("videoID6La");
// function pauseVideo6La() {
// video6Lab.pause();
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get the modal aside 6 R a
var modal_6Ra = document.getElementById("myModal_6Ra");

// Get the button that opens the modal
var btn6Ra = document.getElementById("myModal_6RaBtn");

// Get the <span> element that closes the modal
var span6Ra = document.getElementsByClassName("modal_6Raclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
btn6Ra.onclick = function() {
  modal_6Ra.style.display = "block";
}

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
span6Ra.onclick = function() {
  modal_6Ra.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
let outClick_6Ra = document.getElementsByClassName("modal_6Ra")[0];
outClick_6Ra.onclick = function() {
  modal_6Ra.style.display = "none";
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get the modal aside 6 R b
var modal_6Rb = document.getElementById("myModal_6Rb");

// Get the button that opens the modal
var btn6Rb = document.getElementById("myModal_6RbBtn");

// Get the <span> element that closes the modal
var span6Rb = document.getElementsByClassName("modal_6Rbclose")[0];

// When the user clicks on the button, open the modal AND I ADDED START PLAY
btn6Rb.onclick = function() {
  modal_6Rb.style.display = "block";
}

// When the user clicks on <span> (x), close the modal AND I ADDED STOP PLAY
span6Rb.onclick = function() {
  modal_6Rb.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it AND I ADDED STOP PLAY
let outClick_6Rb = document.getElementsByClassName("modal_6Rb")[0];
outClick_6Rb.onclick = function() {
  modal_6Rb.style.display = "none";
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++OOOOOOOOOOOOOOOOOOOOOOOOOOOOO end of block 6
