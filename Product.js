// Function to hide the title
function hidetitle() {
  document.getElementById("title").style.display = "none";
  document.getElementById("start").style.display = "none";
}
// Function to show the title
function showtitle() {
  document.getElementById("title").style.display = "block";
  document.getElementById("start").style.display = "block";
}
// Function to show the pop-up
function showPopup() {
  document.getElementById("popupContent0").style.display = "block";
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
// Function to show question 4 results
var inputElement4 = document.querySelector("#popupContent4 input[type='text']");

// Add event listener for input event
inputElement4.addEventListener("input", function () {
  // Get the value entered by the user
  var inputValue = inputElement4.value.trim();

  // Define the correct answer
  var correctAnswer = "1200 watts";

  // Check if the entered value matches the correct answer
  if (inputValue === correctAnswer) {
    // Show the correct result message
    document.getElementById("correctpopupContent4").style.opacity = "1";
    document.getElementById("incorrectpopupContent4").style.opacity = "0";
  } else {
    // Show the incorrect result message
    document.getElementById("correctpopupContent4").style.opacity = "0";
    document.getElementById("incorrectpopupContent4").style.opacity = "1";
  }
});
function showwrong4() {
  document.getElementById("incorrectpopupContent4").style.opacity = "1";
  document.getElementById("correctpopupContent4").style.opacity = "0";
}
// Function to show question 5 results
// Get the input element
var inputElement5 = document.querySelector("#popupContent5 input[type='text']");

// Add event listener for input event
inputElement5.addEventListener("input", function () {
  // Get the value entered by the user
  var inputValue = inputElement5.value.trim();

  // Define the correct answer
  var correctAnswer = "400 watts";

  // Check if the entered value matches the correct answer
  if (inputValue === correctAnswer) {
    // Show the correct result message
    document.getElementById("correctpopupContent5").style.opacity = "1";
    document.getElementById("incorrectpopupContent5").style.opacity = "0";
  } else {
    // Show the incorrect result message
    document.getElementById("correctpopupContent5").style.opacity = "0";
    document.getElementById("incorrectpopupContent5").style.opacity = "1";
  }
});
function showwrong5() {
  document.getElementById("incorrectpopupContent5").style.opacity = "1";
  document.getElementById("correctpopupContent5").style.opacity = "0";
}
// Function to show question 6 results
var inputElement6 = document.querySelector("#popupContent6 input[type='text']");

inputElement6.addEventListener("input", function () {
  var inputValue = inputElement6.value.trim();
  var correctAnswer = "700 watts";

  if (inputValue === correctAnswer) {
    document.getElementById("correctpopupContent6").style.opacity = "1";
    document.getElementById("incorrectpopupContent6").style.opacity = "0";
  } else {
    document.getElementById("correctpopupContent6").style.opacity = "0";
    document.getElementById("incorrectpopupContent6").style.opacity = "1";
  }
});
function showwrong6() {
  document.getElementById("incorrectpopupContent6").style.opacity = "1";
  document.getElementById("correctpopupContent6").style.opacity = "0";
}
// Function to show question 7 results
var inputElement7 = document.querySelector("#popupContent7 input[type='text']");

inputElement7.addEventListener("input", function () {
  var inputValue = inputElement7.value.trim();
  var correctAnswer = "216 watts";

  if (inputValue === correctAnswer) {
    document.getElementById("correctpopupContent7").style.opacity = "1";
    document.getElementById("incorrectpopupContent7").style.opacity = "0";
  } else {
    document.getElementById("correctpopupContent7").style.opacity = "0";
    document.getElementById("incorrectpopupContent7").style.opacity = "1";
  }
});
function showwrong7() {
  document.getElementById("incorrectpopupContent7").style.opacity = "1";
  document.getElementById("correctpopupContent7").style.opacity = "0";
}
// Function to show question 8 results
var inputElement8 = document.querySelector("#popupContent8 input[type='text']");

inputElement8.addEventListener("input", function () {
  var inputValue = inputElement8.value.trim();
  var correctAnswer = "72 watts";

  if (inputValue === correctAnswer) {
    document.getElementById("correctpopupContent8").style.opacity = "1";
    document.getElementById("incorrectpopupContent8").style.opacity = "0";
  } else {
    document.getElementById("correctpopupContent8").style.opacity = "0";
    document.getElementById("incorrectpopupContent8").style.opacity = "1";
  }
});
function showwrong8() {
  document.getElementById("incorrectpopupContent8").style.opacity = "1";
  document.getElementById("correctpopupContent8").style.opacity = "0";
}
// Function to show question 9 results
var inputElement9 = document.querySelector("#popupContent9 input[type='text']");

inputElement9.addEventListener("input", function () {
  var inputValue = inputElement9.value.trim();
  var correctAnswer = "126 watts";

  if (inputValue === correctAnswer) {
    document.getElementById("correctpopupContent9").style.opacity = "1";
    document.getElementById("incorrectpopupContent9").style.opacity = "0";
  } else {
    document.getElementById("correctpopupContent9").style.opacity = "0";
    document.getElementById("incorrectpopupContent9").style.opacity = "1";
  }
});
function showwrong9() {
  document.getElementById("incorrectpopupContent9").style.opacity = "1";
  document.getElementById("correctpopupContent9").style.opacity = "0";
}
// remove back button
function removeback() {
  var resultsElements = document.getElementsByClassName("back");
  for (var i = 0; i < resultsElements.length; i++) {
    resultsElements[i].style.opacity = "0";
  }
}
// give back button
function giveback() {
  var resultsElements = document.getElementsByClassName("back");
  for (var i = 0; i < resultsElements.length; i++) {
    resultsElements[i].style.opacity = "1";
  }
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
// Load results and hide back
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
  var radios = document.getElementsByName("question2");
  for (var i = 0; i < radios.length; i++) {
    radios[i].disabled = true;
  }
  var radios = document.getElementsByName("question3");
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
// Function to disable input fields of type text
function disableTextInput() {
  // Get all input elements
  var inputFields = document.getElementsByTagName("input");

  // Loop through the input elements
  for (var i = 0; i < inputFields.length; i++) {
    // Disable the input field
    inputFields[i].disabled = true;
  }
}
// Function to hide the pop-up
function hidePopup() {
  document.getElementById("popupContent0").style.display = "none";
  document.getElementById("popupContent1").style.display = "none";
  document.getElementById("popupContent2").style.display = "none";
  document.getElementById("popupContent3").style.display = "none";
  document.getElementById("popupContent4").style.display = "none";
  document.getElementById("popupContent5").style.display = "none";
  document.getElementById("popupContent6").style.display = "none";
  document.getElementById("popupContent7").style.display = "none";
  document.getElementById("popupContent8").style.display = "none";
  document.getElementById("popupContent9").style.display = "none";
  document.getElementById("popupContent10").style.display = "none";
  document.getElementById("popupContent11").style.display = "none";
  document.getElementById("popupContent12").style.display = "none";
}
function hidePopup12() {
  document.getElementById("popupContent12").style.display = "none";
}
// Restart webpage on finish
function restartWebsite() {
  // Reload the webpage
  location.reload();
}
