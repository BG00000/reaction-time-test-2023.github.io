// Wait for the DOM to load before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Function to change background color
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  // Function to start the stopwatch
  function startStopwatch() {
    var startTime = new Date().getTime();
    document.onkeydown = function(event) {
      if (event.keyCode === 32) {
        // Spacebar
        var endTime = new Date().getTime();
        var reactionTime = (endTime - startTime) / 1000; // in seconds
        reactionTimes.push(reactionTime); // Store individual reaction time
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
    var total = reactionTimes.reduce(function(a, b) {
      return a + b;
    }, 0);
    var average = total / reactionTimes.length;
    console.log('Reaction Times:', reactionTimes);
    console.log('Average Reaction Time:', average.toFixed(3) + ' seconds');
    var resultText = 'Average Reaction Time: ' + average.toFixed(3) + ' seconds<br><br>';
    resultText += 'Individual Reaction Times: ' + reactionTimes.join(', ') + ' seconds<br><br>';
    resultText += 'You have completed the practice test<br><br>';
    resultText += 'You may now complete the CONTROL TEST<br><br><br>';
    resultText += '<a class="control-link" href="indexCONTROL.html">CONTROL TEST</a>';
    document.getElementById('result').innerHTML = resultText;
    document.getElementById('result').style.color = 'white';

    var resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    var practiceMessageBox = document.getElementById('practice-message-box');
    practiceMessageBox.style.display = 'none';

    // Store the reactionTimes array in local storage
    localStorage.setItem('reactionTimes', JSON.stringify(reactionTimes));

    // Store the sex, occupation, and age in local storage
    var genderElement = document.querySelector('input[name="sex"]:checked');
    var gender = genderElement ? genderElement.value : '';
    var occupation = document.getElementById('occupation').value;
    var birthDate = document.getElementById('birth-date').value;
  }

  // Global variables
  var reactionTimes = [];
  var countdowns = [5, 4.3, 3.2, 8.3, 7.2, 3.2, 2.7, 2.5, 3.4, 1];
  var intervalTimes = [2, 1, 6, 7, 1, 3, 4, 2.4, 2.3, 4];
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

  // Event listener for button click
  document.getElementById('start-btn').addEventListener('click', function() {
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
  });



});

var button = document.getElementById("submit-btn");
var startButton = document.getElementById("start-btn");

button.addEventListener("click", function() {
  button.innerHTML = "&#9989; Done";
  startButton.style.display = "block";
});

