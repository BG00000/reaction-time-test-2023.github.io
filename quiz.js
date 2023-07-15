document.getElementById("publish").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form submission

    var reactionTimes2 = JSON.parse(localStorage.getItem('reactionTimes2'));
    var reactionTimes3 = JSON.parse(localStorage.getItem('reactionTimes3'));
    var reactionTimes1 = JSON.parse(localStorage.getItem('reactionTimes1'));
    var sex = localStorage.getItem('sex');
    var birthDate = localStorage.getItem('birthDate');
    var occupation = localStorage.getItem('occupation');

    // Retrieve the answers to the fill-in-the-blank questions
    var fillInTheBlankAnswers = {};
    for (var i = 1; i <= 17; i++) {
        var inputId = "Q" + i;
        var inputValue = document.getElementById(inputId).value;
        fillInTheBlankAnswers[inputId] = inputValue;
    }

    localStorage.setItem('quizAns', JSON.stringify(fillInTheBlankAnswers));

    var emailData = {
        Host: "smtp.elasticemail.com",
        Username: "reactiontimetest2023@gmail.com",
        Password: "9E1C08D435D0DD76E53167CE4C32741D9027",
        To: "reactiontimetest2023@gmail.com",
        From: "reactiontimetest2023@gmail.com",
        Subject: "REACTION TIME TEST RESULTS FINAL",
        Body: "Reaction Times [CONTROL]: " + reactionTimes1 + "<br><br>" +
            "Reaction Times [AUDIO TEST]: " + reactionTimes2 + "<br><br>" +
            "Reaction Times [AUDIO TEST WITH QUESTIONS]: " + reactionTimes3 + "<br><br>" +
            "Sex: " + sex + "<br>" +
            "Birth Date: " + birthDate + "<br>" +
            "Occupation: " + occupation + "<br><br>" +
            "Fill in the Blank Answers:<br>" + getFillInTheBlankAnswersHtml(fillInTheBlankAnswers)
    };

    Email.send(emailData).then(function(message) {
        console.log('Email sent:', message);
        window.location.href = "sloths.html"; // Redirect to sloths.html
    }).catch(function(error) {
        console.error('Email error:', error);
    });

    
});

function getFillInTheBlankAnswersHtml(answers) {
    var html = '';
    for (var i = 1; i <= 17; i++) {
        var inputId = 'Q' + i;
        var answer = answers[inputId];
        html += inputId + ': ' + answer + '<br>';
    }
    return html;
}

var submitBtn2 = document.getElementById("submit-btn-2");
var publishBtn = document.getElementById("publish");

submitBtn2.addEventListener("click", function(event) {

  submitBtn2.innerHTML = "&#9989; Done";

  event.preventDefault(); // Prevent form submission
  publishBtn.style.display = "block";
});




