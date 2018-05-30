$(document).ready(function() {


var seconds = 100;

var intervalId;

$("#start").on("click", function() {
    console.log("button was clicked");
    intervalId = setInterval(decrement, 1000);
    $("#start").hide();

});

function decrement() {
    seconds--;
}

});

//     var count = 0;
//     var correctAns = 0;
//     var incorrectAns = 0;
//     var timer;
//     var counter = 60;
//     var intervalId;


//     function timer() {
//     var number = 10;
//     }
    
//     var intervalId; 


//     {
//        counter=count-1;
//        if (count <= 0)
//        {
//            clearInterval(counter);
//            return;
//        }

//     }
//     var questions = [
//         {
//         quest: "What is the only vowel on a standard keyboard not located in the top row?",
//         a1: "A",
//         a2: "U",
//         a3: "I",
//         a4: "E",
//         correct: "a1"
//         },
//         {
//         quest: "How many strings are on a cello?",
//         a1: "5",
//         a2: "17",
//         a3: "4",
//         a4: "6",
//         correct: "a3"
//         }
//       ]
//     function showQuestions(count) {
        
    
           
            
        
              
        
//               $("#questDisplay").html(questions[0].quest);
//               $("#questDisplay").append("<button class='answer' data-value="+questions[count].a1+">"+questions[count].a1+"</button>");
//               $("#questDisplay").append("<button class='answer' data-value="+questions[count].a2+">"+questions[count].a2+"</button>");
//               $("#questDisplay").append("<button class='answer' data-value="+questions[count].a3+">"+questions[count].a3+"</button>");
//               $("#questDisplay").append("<button class='answer' data-value="+questions[count].a4+">"+questions[count].a4+"</button>");
        
//               count++;
        
//             }
//     $("#start").on("click", function() {
//         console.log("button was clicked");
//         intervalId = setInterval(decrement, 1000);
//         $("#start").hide();
        
        
//        // $("#timer").html(":10");
    
    
    
    
//     //showQuestions(count);
//     });//end of function on.click start button


//     function decrement() {
//         //decreases countdonw by one sedcond
//         countDown--;
//         $("#timer").html("Time Remaining: " + countdown);


//     }
    
    
//     $(document).on("click",".answer", function() {
//         console.log($(this).attr("data-value"));
//         if ($(this).attr("data-value") == questions[count].correct) {
//             correctAns++;
//         } else {
//             incorrectAns++;
//         }
        
    
//     })

//     showQuestions();

// })