var intervalID;
var countDown = 10;


$(document).ready(function() {

    $("#start").click(function() {

    $("#start").hide();

intervalID = setInterval(decrement, 1000);
    })
})

function decrement() {
    //decreases countdonw by one sedcond
    countDown--;
    $("#timer").html("Time Remaining: " + countDown);


    }

    //consultant@northwestern.edu or (847) 491-HELP.