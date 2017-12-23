// add start function that starts timer and shows questions
$(document).ready(function() {

    var count = 0;
    var correctAns = 0;
    var incorrectAns = 0;
    var timer;
    var counter = 60;
    var intervalId;

    
    var start = $("#start").on("click", function() {
        var counter = setInterval(timer, 1000);

        function timer(start)
        {
           counter=count-1;
           if (count <= 0)
           {
               clearInterval(counter);
               return;
           }

        }
        ("#timer").html(":00");
    
    
    function showQuestions(count) {
    

       
        
    
          var questions = [
            {
            quest: "What is the only vowel on a standard keyboard not located in the top row?",
            a1: "A",
            a2: "U",
            a3: "I",
            a4: "E",
            correct: "a1"
            },
            {
            quest: "How many strings are on a cello?",
            a1: "5",
            a2: "17",
            a3: "4",
            a4: "6",
            correct: "a3"
            }
          ]
    
          $("#questDisplay").html(questions[count].quest);
          $("#questDisplay").append("<button class='answer' data-value="+questions[count].a1+">"+questions[count].a1+"</button>");
          $("#questDisplay").append("<button class='answer' data-value="+questions[count].a2+">"+questions[count].a2+"</button>");
          $("#questDisplay").append("<button class='answer' data-value="+questions[count].a3+">"+questions[count].a3+"</button>");
          $("#questDisplay").append("<button class='answer' data-value="+questions[count].a4+">"+questions[count].a4+"</button>");
    
          count++;
    
        }
    
    showQuestions(count);

    
    
    $(document).on("click",".answer", function() {
        console.log($(this).attr("data-value"));
        if ($(this).attr("data-value") == questions[count].correct) {
            correctAns++;
        } else {
            incorrectAns++;
        }
        
    
    })

})