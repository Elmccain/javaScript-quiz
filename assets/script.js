var quizContainer = document.getElementById('quiz');
var resultContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "What is JavaScript",
        answers: {
            a: "A newer version of Java",
            b: "A client-side and server-side scripting language that is inserted into HTML pages and understood by browers",
            c: "A language that is primarily used for styling web pages",
        },
        correctAnswer: "c"
    },
    {
        question: "Which is not a JavaScript data type?",
        answers: {
            a: "Boolean",
            b: "Object",
            c: "Function",
        },
        correctAnswer: "c"
    },
    {
        question: "What are all of the looping structures in JavaScript?",
        answers: {
            a: "for, do-while, and while",
            b: "for and this",
            c: "else, else-if, and for"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you check for equality in value in JavaScript?",
        answers: {
            a: "===",
            b: "==",
            c: "=",
        },
        correctAnswer: "b"
    },
    {
        question: "What would be the result of 3+2+'7'?",
        answers: {
            a: "You can't do that.",
            b: "12",
            c: "57",
        },
        correctAnswer: "c"
    }
];

function buildQuiz(){


}
function showResults(){

}
//display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults);