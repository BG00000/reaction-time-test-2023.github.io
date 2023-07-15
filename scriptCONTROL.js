// Function to change background color
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Function to start the stopwatch
function startStopwatch() {
  var startTime = new Date().getTime();
  document.onkeydown = function(event) {
    if (event.keyCode === 32) { // Spacebar
      var endTime = new Date().getTime();
      var reactionTime = (endTime - startTime) / 1000; // in seconds
      reactionTimes1.push(reactionTime); // Store individual reaction time

      changeBackgroundColor('red'); // Change background color back to red
      document.onkeydown = null; // Disable further spacebar presses
      if (currentCountdownIndex < countdowns.length - 1) {
        currentCountdownIndex++;
        setTimeout(nextStep, intervalTimes[currentCountdownIndex] * 1000); // Wait for the next interval
      } else {
        finishTest();
      }
    }
  };
}

// Function to record reaction time and finish the test
function finishTest() {
  document.onkeydown = null; // Disable further key presses
  var total = reactionTimes1.reduce(function(a, b) { return a + b; }, 0);
  var average1 = total / reactionTimes1.length;
  console.log('Reaction Times [CONTROL]:', reactionTimes1);
  console.log('Average Reaction Time [CONTROL]:', average1.toFixed(3) + ' seconds');


  var resultText = 'Average Reaction Time [CONTROL]: ' + average1.toFixed(3) + ' seconds<br><br>';
  resultText += 'Reaction Times [CONTROL]: ' + reactionTimes1.join(', ') + ' seconds<br><br>';
  resultText += 'RESULTS AUTOMATICALLY RECORDED &#10003;<br><br>';
  resultText += '<a class="control-link" href="indexAUDIO.html">AUDIO TEST</a>';
  
  

  document.getElementById('result').innerHTML = resultText;
  document.getElementById('result').style.color = 'white';

  var practiceMessageBox = document.getElementById('practice-message-box');
  practiceMessageBox.style.display = 'none';

  var resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';


  // Store the reactionTimes1 array in local storage
  localStorage.setItem('reactionTimes1', JSON.stringify(reactionTimes1));
}


// Global variables
var reactionTimes1 = [];
var countdowns = [5.3, 3.6, 3.2, 8.3, 7.2, 3.2, 2.7, 2.5, 3.4, 1];
var intervalTimes = [2.4, 2.3, 5.1, 2.1, 3.7, 6.2, 3.2, 5.1, 2.1, 3.3];
var currentCountdownIndex = 0;

// Set initial background color to red
changeBackgroundColor('red');

// Function to handle each step of the test
function nextStep() {
  // Change background color to green
  changeBackgroundColor('green');
  // Start the stopwatch
  startStopwatch();
}

// Event listener for key presses
document.onkeydown = function(event) {
  if (event.keyCode === 81) { // "Q" key
    // Hide the instructions element
    var instructionsElement = document.getElementById('instructions');
    instructionsElement.style.display = 'none';

    // Hide the header element
    var headerElement = document.getElementById('header');
    headerElement.style.display = 'none';

    // Display the practice test message
    var practiceElement = document.getElementById('practice-message');
    practiceElement.style.display = 'block';

    // Start the countdown
    var countdown = countdowns[currentCountdownIndex];
    setTimeout(nextStep, countdown * 1000);
  }
};
