var myQuestions = [
	{
		question: "What is 15*6?",
		answers: {
			a: '85',
			b: '90',
			c: '80'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 243/27?",
		answers: {
			a: '8',
			b: '18',
			c: '9'
		},
		correctAnswer: 'c'
	},

    {
        question: "What is 30/3+11 ?",
        answers: {
            a: '22',
            b: '19',
            c: '21'
        },
        correctAnswer: 'c'
    },

    {
        question: "What is 4*11-4?",
        answers: {
            a: '40',
            b: '38',
            c: '28'
        },
        correctAnswer: 'a'
    },

    {
        question: "What is 55/11+2*6?",
        answers: {
            a: '42',
            b: '33',
            c: '17'
        },
        correctAnswer: 'c'
    },

    {
        question: "What is 30-17?",
        answers: {
            a: '3',
            b: '13',
            c: '11'
        },
        correctAnswer: 'b'
    }
];


  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  

        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label for="radio">'
              + '<input type="radio" id="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
      shuffleArray(output)

      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

      // combine the output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
    shuffleArray(quizContainer)


    //randomize the element of array
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
        
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }