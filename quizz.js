const questions = [
    {
        question:"which is the biggest animal in the world",
        answers:[
            {text:"Shark", correct: false},
            {text:"elephant",correct:false},
            {text:"blue whale", correct:true},
            {text:"dragon", correct:false}
        ]
    },
        
    {question:"who is the smartest in RBK if yassine was absent",
        answers:[
            {text:"jihed", correct: false},
            {text:"balha",correct:true},
            {text:"mostfa", correct:false},
            {text:"jesser", correct:false}
        ]
    }, 
        
    { question:"which one is the best in english",
        answers:[
            {text:"jdidi", correct: false},
            {text:"mostfa",correct:false},
            {text:"eminem", correct:true},
            {text:"dhia", correct:false}
        ]
    },
        
    {  question:"who's the king",
        answers:[
            {text:"RBK owner", correct: false},
            {text:"Yassine",correct:true},
            {text:"kais saiid", correct:false},
            {text:"Louis XVI", correct:false}
        ]
    }


]

// $(document).ready(function () {
//     $(".button").click(function () {
//     });
// });
 var sa77it = 0
 var i = 0
 var j = 0
 var lastClick = 0

    $("#start-button").click(function () {
        $("#question").text(questions[i].question)
        $("#answer1").text(questions[i].answers[j].text)
        j++
        $("#answer2").text(questions[i].answers[j].text)
        j++
        $("#answer3").text(questions[i].answers[j].text)
        j++
        $("#answer4").text(questions[i].answers[j].text)   
        $("#start-button").hide()
        j = 0
        
    });


    $("#answer1").click(function (){
        $("#answer1").css({"background":"#222","color":"antiquewhite"})
        $("#answer2").css({"background":"antiquewhite","color":"#222"})
        $("#answer3").css({"background":"antiquewhite","color":"#222"})
        $("#answer4").css({"background":"antiquewhite","color":"#222"})
        $("#next-btn").show()
        lastClick = 0
        
    });


    $("#answer2").click(function (){
        $("#answer2").css({"background":"#222","color":"antiquewhite"})
        $("#answer1").css({"background":"antiquewhite","color":"#222"})
        $("#answer3").css({"background":"antiquewhite","color":"#222"})
        $("#answer4").css({"background":"antiquewhite","color":"#222"})
        $("#next-btn").show()
        lastClick = 1
        
    });


    $("#answer3").click(function (){
        $("#answer3").css({"background":"#222","color":"antiquewhite"})
        $("#answer2").css({"background":"antiquewhite","color":"#222"})
        $("#answer1").css({"background":"antiquewhite","color":"#222"})
        $("#answer4").css({"background":"antiquewhite","color":"#222"})
        $("#next-btn").show()
        lastClick = 2
    });

    $("#answer4").click(function (){
        $("#answer4").css({"background":"#222","color":"antiquewhite"})
        $("#answer2").css({"background":"antiquewhite","color":"#222"})
        $("#answer3").css({"background":"antiquewhite","color":"#222"})
        $("#answer1").css({"background":"antiquewhite","color":"#222"})
        $("#next-btn").show()
        lastClick = 3
    });


    $("#next-btn").click(function (){
        if(i<=3){
            if(questions[i].answers[lastClick].correct === true){
             sa77it = sa77it + 1
            }
            console.log(sa77it)
            i++
            $("#question").text(questions[i].question)
             $("#answer1").text(questions[i].answers[j].text)
             j++
             $("#answer2").text(questions[i].answers[j].text)
             j++
             $("#answer3").text(questions[i].answers[j].text)
             j++
             $("#answer4").text(questions[i].answers[j].text) 
             j =0
        }
        else{
            $(".score").text("Your score is "+(sa77it))
        }

    });


