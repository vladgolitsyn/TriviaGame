// declares Trivia Question variable array of objects with question, possible answers, and correct answer

var triviaQuestions = [
  {
    question: "Which song was NOT featured on 36 Chambers album?",
    possibleAnswers: [
      "C.R.E.A.M.",
      "Da Mystery of Chessboxin",
      "Protect Ya Neck",
      "Triumph"
    ],
    correctAnswer: 3
  },
  {
    question: "Who was not one of the original Wy-Tang members?",
    possibleAnswers: ["Method Man", "Redman", "OBD", "Raekwow the Chef"],
    correctAnswer: 1
  },
  {
    question:
      "Which year did Wu-Tang's first single, Protect Ya Neck, come out?",
    possibleAnswers: ["1988", "1990", "1992", "1996"],
    correctAnswer: 2
  },
  {
    question:
      "Who is the only original Wu-Tang member who is currently deceased?",
    possibleAnswers: ["Method Man", "Ghostface Killah", "OBD", "GZA"],
    correctAnswer: 2
  },
  {
    question:
      "Who is the oldest, currently alive, member of the Wu Tang Clan?",
    possibleAnswers: ["RZA", "GZA", "ODB", "Method Man"],
    correctAnswer: 1
  }
];

console.log(triviaQuestions);

// executed Countdown timer upon selection of "wuenter" button

$("#wuenter").click(function() {
  var countdownSeconds = 30;
  var downloadTimer = setInterval(function() {
    document.getElementById("gameClock").innerHTML =
      countdownSeconds + " seconds remaining";
    countdownSeconds -= 1;
    if (countdownSeconds <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("gameClock").innerHTML = "<h3>You're Done!</h3>";
    }
  }, 1000);
});

// creates correct and incorrect answers variables and sets to 0 initially

var correctAnswers = 0;
var incorrectAnswers = 0;

// create Question section

var questionSection = $("#gameQuestions");

// Use FOR loops to generate questions and possible answers using the triviaQuestions variable

for (var i = 0; i < triviaQuestions.length; i++) {
  questionSection.append("<h5>" + triviaQuestions[i].question + "<h5>");
  for (var j = 0; j < triviaQuestions[i].possibleAnswers.length; j++) {
    questionSection.append(
      "<input type='radio' name='question-" +
        i +
        " ' value=' " +
        triviaQuestions[i].possibleAnswers[j] +
        "' '> " +
        triviaQuestions[i].possibleAnswers[j] +
        "<br><br>"
    );
  }
}

// Add a results calculation button

questionSection.append("<button id='complete'>See Results!</button>");

// Adds logic for determining correct and incorrect answer count

$("#complete").click(function() {
    var inputs = questionSection.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === triviaQuestions[i].correctAnswer) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    }
    questionSection.append("<h2>Woo hoo!</h2>");
    questionSection.append("<h3>Correct Answers: " + correctAnswers + "</h3>");
    questionSection.append("<h3>Incorrect Answers: " + incorrectAnswers + "</h3>");
  })

  // Notes to TA
  // I was able to get trivai to work
  // UI needs work though
  // I need to account for more exception cases
  // I need to tie the timer running out to locking down the questionsSection