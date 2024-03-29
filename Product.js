// Function to show the pop-up
function showPopup() {
  document.getElementById("popupContent1").style.display = "block";
}
function showX() {
  document.getElementById("X").style.display = "block";
}
// Function to show the next part of pop-up content
function nextPart(currentPart) {
  // Hide the current part
  document.getElementById("popupContent" + currentPart).style.display = "none";
  // Show the next part
  document.getElementById("popupContent" + (currentPart + 1)).style.display =
    "block";
}
// Function to show the previous part of pop-up content
function previousPart(currentPart) {
  // Hide the current part
  document.getElementById("popupContent" + currentPart).style.display = "none";
  // Show the next part
  document.getElementById("popupContent" + (currentPart - 1)).style.display =
    "block";
}

// Function to show question 1 results
function showright1() {
  document.getElementById("incorrectpopupContent1").style.opacity = "0";
  document.getElementById("correctpopupContent1").style.opacity = "1";
}
function showwrong1() {
  document.getElementById("incorrectpopupContent1").style.opacity = "1";
  document.getElementById("correctpopupContent1").style.opacity = "0";
}
// Function to show question 2 results
function showright2() {
  document.getElementById("incorrectpopupContent2").style.opacity = "0";
  document.getElementById("correctpopupContent2").style.opacity = "1";
}
function showwrong2() {
  document.getElementById("incorrectpopupContent2").style.opacity = "1";
  document.getElementById("correctpopupContent2").style.opacity = "0";
}
// Function to show question 3 results
function showright3() {
  document.getElementById("incorrectpopupContent3").style.opacity = "0";
  document.getElementById("correctpopupContent3").style.opacity = "1";
}
function showwrong3() {
  document.getElementById("incorrectpopupContent3").style.opacity = "1";
  document.getElementById("correctpopupContent3").style.opacity = "0";
}
// Function to show question 4 results
function showright4() {
  document.getElementById("incorrectpopupContent4").style.opacity = "0";
  document.getElementById("correctpopupContent4").style.opacity = "1";
}
function showwrong4() {
  document.getElementById("incorrectpopupContent4").style.opacity = "1";
  document.getElementById("correctpopupContent4").style.opacity = "0";
}
// remove next buttons that make answer wrong
function removenext() {
  var resultsElements = document.getElementsByClassName("next");
  for (var i = 0; i < resultsElements.length; i++) {
    resultsElements[i].style.display = "none";
  }
  var resultsElements = document.getElementsByClassName("next1");
  for (var i = 0; i < resultsElements.length; i++) {
    resultsElements[i].style.display = "block";
  }
}
// remove next buttons that dont do anything on the start
function removenext1() {
  var resultsElements = document.getElementsByClassName("next1");
  for (var i = 0; i < resultsElements.length; i++) {
    resultsElements[i].style.display = "none";
  }
}
// Load results
function LoadResults() {
  var resultsElements = document.getElementsByClassName("results");
  for (var i = 0; i < resultsElements.length; i++) {
    resultsElements[i].style.display = "none";
  }
}
// Function to show results
function showResults() {
  var resultsElements = document.getElementsByClassName("results");
  for (var i = 0; i < resultsElements.length; i++) {
    resultsElements[i].style.display = "block";
  }
}

// Function to show finish button
function showfinish() {
  document.getElementById("finish").style.display = "block";
}
// Function to hide submit button
function hidesubmit() {
  document.getElementById("submit").style.display = "none";
}
// disable radio and textarea
function disableRadio() {
  var radios = document.getElementsByName("question1");
  for (var i = 0; i < radios.length; i++) {
    radios[i].disabled = true;
  }
}
function disableTextArea() {
  var radios = document.getElementsByName("essayResponse");
  for (var i = 0; i < radios.length; i++) {
    radios[i].disabled = true;
  }
}
// Function to hide the pop-up
function hidePopup() {
  document.getElementById("popupContent1").style.display = "none";
  document.getElementById("popupContent2").style.display = "none";
  document.getElementById("popupContent3").style.display = "none";
  document.getElementById("popupContent4").style.display = "none";
  document.getElementById("popupContent5").style.display = "none";
  document.getElementById("popupContent6").style.display = "none";
}
function hidePopup6() {
  document.getElementById("popupContent6").style.display = "none";
}
// Restart webpage on finish
function restartWebsite() {
  // Reload the webpage
  location.reload();
}
