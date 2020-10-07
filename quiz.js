
function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var myQuestions = [
  {
    question: "A star of which of the following stellar classes would be the hottest?",
    answers: {
      a: "O",
      b: "F",
      c: "G",
      d: "K"
    },
    correctAnswer: "a"
  },
  {
    question: "What physics principle causes neutrons stars to spin so quickly?",
    answers: {
      a: "Electromagnetic Induction",
      b: "Conservation of Momentum",
      c: "Centrifugal Force",
      d: "2nd Law of Thermodynamics"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the Roche limit?",
    answers: {
      a: "The place where tidal forces exceed gravitational forces",
      b: "The point past which light cannot escape from a black hole",
      c: "The theoretical upper mass of a star",
      d: "The maximum distance from an object that an orbiting object can reside"
    },
    correctAnswer: "a"
  },
  {
    question: "Bigger stars are generally...",
    answers: {
      a: "Farther away",
      b: "Longer lived",
      c: "Hotter",
      d: "Shorter lived"
    },
    correctAnswer: "d"
  },
  {
    question: "What two variables are plotted on the Hertzsprung-Russell diagram?",
    answers: {
      a: "Temperature and brightness",
      b: "Color and brightness",
      c: "Spectral class and luminosity",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "What element causes cepheid variables to pulse?",
    answers: {
      a: "Helium",
      b: "Hydrogen",
      c: "Iron",
      d: "Oxygen"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following is NOT part of a spiral galaxy?",
    answers: {
      a: "The bulge",
      b: "The disk",
      c: "The halo",
      d: "The rings"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of the following provides evidence for dark matter?",
    answers: {
      a: "Gravitational lensing",
      b: "Cosmic microwave background radiation",
      c: "Supernovae remnants",
      d: "Gravitational waves"
    },
    correctAnswer: "a"
  },
  {
    question: "Where would you expect the densest star formation?",
    answers: {
      a: "An elliptical galaxy",
      b: "A nebula",
      c: "A spiral galaxy",
      d: "An accretion disk"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following stars is the brightest?",
    answers: {
      a: "A star 10 parsecs away with apparent magnitude 9.0",
      b: "A star 100,0000 parsecs away with absolute magnitude 9.0",
      c: "A star 10 parsecs away with absolute magnitude 7.0",
      d: "A star 100,000 parsecs away with apparent magnitude 7.0"
    },
    correctAnswer: "d"
  },
  {
    question: "Why can we see some black holes? Do they not “suck in” all light?",
    answers: {
      a: "The area around a black hole has no stars, so we see it as a black dot",
      b: "Hawking radiation from the black hole gives off light",
      c: "Black holes have an extremely bright accretion disk around them",
      d: "We cannot see any black holes - we have to infer their presence through orbital mechanics"
    },
    correctAnswer: "c"
  },
  {
    question: "BONUS: Which of the following releases energy the most efficiently?",
    answers: {
      a: "Chemical reactions",
      b: "Nuclear fusion",
      c: "Nuclear fission",
      d: "Dropping things into a black hole"
    },
    correctAnswer: "d"
  },


];



// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

