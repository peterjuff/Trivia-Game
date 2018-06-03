$(document).ready(function() {

    var questions = [
        {
          quest: "What is the only vowel on a standard keyboard not located in the top row?",
          answer: ["A", "U", "I", "E"],
          correct: "A"
        },
        {
          quest: "How many strings are on a cello?",
          answer: ["5", "17", "4", "6"],
          correct: "4"
        },
        {
          quest: "What is the only mammal that cannot jump?",
          answer: ["Kangaroo", "Dog", "Elephant", "Snake"],
          correct: "Elephant"
        },
        {
          quest: "How many people have walked on the moon?",
          answer: ["3", "0", "7", "12"],
          correct: "12"
        },
        {
          quest: "How many players are on a baseball team?",
          answer: ["10", "9", "12", "4"],
          correct: "9"
        },
        {
          quest: "What is the chemical symbol of iron?",
          answer: ["Ir", "Xo", "Mg", "Fe"],
          correct: "Fe"
        },
        {
          quest: "Jack the Ripper terrorized which city?",
          answer: ["London", "Paris", "Philadelphia", "Vienna"],
          correct: "London"
        }
      ]

      // holds setInterval
      var countdown;

      var quiz = {

        timer: 30,
        correct: 0,
        incorrect: 0,

        clock: function() {
          $("#timer").html(quiz.timer);
          quiz.timer--;
          if (quiz.timer === 0) {
            console.log("Time's Up");
            quiz.finished();
          }
          
        },

        start: function() {
          countdown = setInterval(quiz.clock, 1000);
          $("#clock").append("<h2>Time Remaining: <span id='timer'>60</span> Seconds</h2>");
          $("#remove").remove();
          for (var i = 0; i < questions.length; i++) {
            $("#questDisplay").append("<h2>" + questions[i].quest + "</h2>");
            for (var j = 0; j < questions[i].answer.length; j++) {
              $("#questDisplay").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answer[j] + "''>" + questions[i].answer[j]);
            } 
          }

          $("#questDisplay").append("<button id='finished'>Finished</button>");
        },

        finished: function() {
          $.each($("input[name='question-0]: checked"), function() {
            if ($(this).val() === questions[0].correct) {
              quiz.correct++;
            }
            else {
              quiz.incorrect++;
            }
          });

          $.each($("input[name='question-1]: checked"), function() {
            if ($(this).val() === questions[1].correct) {
              quiz.correct++;
            }
            else {
              quiz.incorrect++;
            }
          });

          $.each($("input[name='question-2]: checked"), function() {
            if ($(this).val() === questions[2].correct) {
              quiz.correct++;
            }
            else {
              quiz.incorrect++;
            }
          });

          $.each($("input[name='question-3]: checked"), function() {
            if ($(this).val() === questions[3].correct) {
              quiz.correct++;
            }
            else {
              quiz.incorrect++;
            }
          });

          $.each($("input[name='question-4]: checked"), function() {
            if ($(this).val() === questions[4].correct) {
              quiz.correct++;
            }
            else {
              quiz.incorrect++;
            }
          });

          $.each($("input[name='question-5]: checked"), function() {
            if ($(this).val() === questions[5].correct) {
              quiz.correct++;
            }
            else {
              quiz.incorrect++;
            }
          });

          $.each($("input[name='question-6]: checked"), function() {
            if ($(this).val() === questions[6].correct) {
              quiz.correct++;
            }
            else {
              quiz.incorrect++;
            }
          })

          this.result();
        },

        result: function() {
          clearInterval(countdown);
          $("#questDisplay").remove();
          $("#finished").html("<h2>All Done!</h2>");
        }


      };

      $(document).on("click", "#start", function() {
        quiz.start();
      });

      $(document).on("click", "#finished", function() {
        quiz.finished();
      });



});
