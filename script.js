    
(function(){
    var Question = function (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;

}


Question.prototype.displayQuestion = function()  {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ": "  + this.answers[i]);
    }

}

Question.prototype.checkAnswer = function (ans , callback) {

    var count;
    if (ans === this.correct) {
        console.log('Correct answer!! ');
      count =  callback(true);
    } else {
        console.log('Try again');
         count =  callback(false);
    }
    this.displayScore(count);
}


Question.prototype.displayScore = function(score){
    console.log('Your current score is ' + score);
    console.log('--------------------------');
}

var question1 = new Question('Is Javascript the coolest Programming language?', ['Yes', 'No' , 'Maybe'], 0);
var question2 = new Question('Do you hire me?', ['Yes', 'Of course', 'No'], 1);
var question3 = new Question('What does best description coding?', ['Boring', 'Fun', 'Hard'], 1);
var question4 = new Question('Is the sky blue?', ['Yes', 'No'], 0);
var question5 = new Question('Do you like this game?', ['Yes', 'No'], 0);


var questions = [question1, question2, question3 , question4 , question5];

function score(){
    var count = 0;
    return function(correct){
        if (correct){
            count++;
        }
        return count;
    }

}


var keppScore = score();

function nextQuestion(){

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = prompt('Please write your answer..'); 



if(answer !== 'exit'){
    questions[n].checkAnswer(parseInt(answer), keppScore);
    nextQuestion();
}


}


nextQuestion();

})(); 

