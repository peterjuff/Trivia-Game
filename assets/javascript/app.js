// add start function that starts timer and shows questions
$(document).ready(function() {

    count = 0;
    
    function showQuestions(count) {
    
          var questions = [
            {
            quest: "What is the first letter of the alphabet?",
            a1: "A",
            a2: "B",
            a3: "C",
            a4: "D",
            correct: "a1"
            },
            {
            quest: "my second question",
            a1: "1",
            a2: "2",
            a3: "3",
            a4: "4",
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
            right++;
        } else {
            wrong++;
        }
    })

})