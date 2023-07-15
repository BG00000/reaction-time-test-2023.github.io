    var reactionTimes1 = JSON.parse(localStorage.getItem('reactionTimes1'));
    var reactionTimes2 = JSON.parse(localStorage.getItem('reactionTimes2'));
    var reactionTimes3 = JSON.parse(localStorage.getItem('reactionTimes3'));
    var sex = localStorage.getItem('sex');
    var birthDate = localStorage.getItem('birthDate');
    var occupation = localStorage.getItem('occupation');
    var quizAns = localStorage.getItem('quizAns')
    
    var sum1 = reactionTimes1.reduce(function (a, b) {
        return a + b;
    }, 0);
    var average1 = sum1 / reactionTimes1.length;

    var sum2 = reactionTimes2.reduce(function (a, b) {
        return a + b;
    }, 0);
    var average2 = sum2 / reactionTimes2.length;

    var sum3 = reactionTimes3.reduce(function (a, b) {
        return a + b;
    }, 0);
    var average3 = sum3 / reactionTimes3.length;

    var audiodiff = average2-average1
    var audioQdiff = average3-average1

    document.getElementById('sec-sex').textContent = "sex: " + sex;
    document.getElementById('sec-birth-date').textContent = "birth date: " + birthDate;
    document.getElementById('sec-occupation').textContent = "occupation: " + occupation;

    document.getElementById('react-control').textContent = "control trial: " + reactionTimes1.join(', ');
    document.getElementById('react-audio').textContent = "audio trial: " + reactionTimes2.join(', ');
    document.getElementById('react-audioQ').textContent = "audio w/ questions trial: " + reactionTimes3.join(', ');
    document.getElementById('control-ave').textContent = "control ave: " + average1.toFixed(2);
    document.getElementById('audio-ave').textContent = "audio ave: " + average2.toFixed(2);
    document.getElementById('audioQ-ave').textContent = "audio w/ questions ave: " + average3.toFixed(2);
    document.getElementById('audio-control').textContent = "audio ave - control ave: " + audiodiff.toFixed(2);
    document.getElementById('audioQ-control').textContent = "audio w/ questions ave - control ave: " + audioQdiff.toFixed(2);



    var quizAnswers = JSON.parse(localStorage.getItem('quizAns'));


    var formattedQuizAnswers = [];

    for (var question in quizAnswers) {
    var answer = quizAnswers[question];
    formattedQuizAnswers.push(question + ': ' + answer);
    }

    var quizAnsElement = document.querySelector('.quiz-ans');
    quizAnsElement.innerHTML = 'Your answers to the quiz:<br>' + formattedQuizAnswers.join('<br>');
    quizAnsElement.style.textAlign = 'left';

    var main = document.getElementById('results-main')
    main.scrollTop = 0;




    

