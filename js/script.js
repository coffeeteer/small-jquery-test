$('#submission').on('submit', function(e) {
        console.log('Submit fires');
        e.preventDefault();
        submitAnswers();                    
});

function submitAnswers() {
    var total = 2;
    var score = 0;

    //captures each of the questions answers in a variable
    var q1 = document.forms['javaScriptQuiz']['q1'].value;
    var q2 = document.forms['javaScriptQuiz']['q2'].value;

    //Validation
    for(var i = 1; i <= total; i++ ){
        if(eval('q' + i) == null || eval('q' + i) == ''){
            alert('You missed a question');
            return false;
        }
    }

    // Are the answers to test
    var answers = ['b', 'a'];
    for(var i = 1; i <= total; i++){
        if(eval('q' + 1) == answers[i - 1] ){
            console.log('Evaluating answers');
            score ++;
        }
    }
}