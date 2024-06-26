const questions = {
    easy: [
        { logo: '../img/Band_Logos_Game/Cryptopsy.png', question: 'Q1/10 What is this band?', correctAnswer: 'Cryptopsy' },
        { logo: '../img/Band_Logos_Game/Gehenna.png', question: 'Q2/10 What is this band?', correctAnswer: 'Gehenna' },
        { logo: '../img/Band_Logos_Game/Atrocity.png', question: 'Q3/10 What is this band?', correctAnswer: 'Atrocity' },
        { logo: '../img/Band_Logos_Game/Behemoth.png', question: 'Q4/10 What is this band?', correctAnswer: 'Behemoth' },
        { logo: '../img/Band_Logos_Game/Diabolical.png', question: 'Q5/10 What is this band?', correctAnswer: 'Diabolical' },
        { logo: '../img/Band_Logos_Game/Son_Of_Aurelius.png', question: 'Q6/10 What is this band?', correctAnswer: 'Son of Aurelius' },
        { logo: '../img/Band_Logos_Game/Rotten_Sound.png', question: 'Q7/10 What is this band?', correctAnswer: 'Rotten_Sound' },
        { logo: '../img/Band_Logos_Game/Atheist.png', question: 'Q8/10 What is this band?', correctAnswer: 'Atheist' },
        { logo: '../img/Band_Logos_Game/Wolves_in_the_Throne_Room.png', question: 'Q9/10 What is this band?', correctAnswer: 'Wolves in the Throne Room' },
        { logo: '../img/Band_Logos_Game/Ataraxie.png', question: 'Q10/10 What is this band?', correctAnswer: 'Ataraxie' }
    ],
    medium: [
        { logo: '../img/Band_Logos_Game/Nehëmah.png', question: 'Q1/10 What is this band?', correctAnswer: 'Nehëmah' },
        { logo: '../img/Band_Logos_Game/Samael.png', question: 'Q2/10 What is this band?', correctAnswer: 'Samael' },
        { logo: '../img/Band_Logos_Game/Woods_Of_Desolation.png', question: 'Q3/10 What is this band?', correctAnswer: 'Woods of Desolation' },
        { logo: '../img/Band_Logos_Game/Iskald.png', question: 'Q4/10 What is this band?', correctAnswer: 'Iskald' },
        { logo: '../img/Band_Logos_Game/Agalloch.png', question: 'Q5/10 What is this band?', correctAnswer: 'Agalloch' },
        { logo: '../img/Band_Logos_Game/Deathspell_Omega.png', question: 'Q6/10 What is this band?', correctAnswer: 'Deathspell Omega' },
        { logo: '../img/Band_Logos_Game/Fleshgod_Apocalypse.png', question: 'Q7/10 What is this band?', correctAnswer: 'Fleshgod Apocalypse' },
        { logo: '../img/Band_Logos_Game/Panopticon.png', question: 'Q8/10 What is this band?', correctAnswer: 'Panopticon' },
        { logo: '../img/Band_Logos_Game/Artificial_Brain.png', question: 'Q9/10 What is this band?', correctAnswer: 'Artificial Brain' },
        { logo: '../img/Band_Logos_Game/Blut_Aus_Nord.png', question: 'Q10/10 What is this band?', correctAnswer: 'Blut Aus Nord' }
    ],
    hard: [
        { logo: '../img/Band_Logos_Game/Necros_Christos.png', question: 'Q1/10 What is this band?', correctAnswer: 'Necros Christos' },
        { logo: '../img/Band_Logos_Game/Nokturnal_Mortum.png', question: 'Q2/10 What is this band?', correctAnswer: 'Nokturnal Mortum' },
        { logo: '../img/Band_Logos_Game/Leviathan.png', question: 'Q3/10 What is this band?', correctAnswer: 'Leviathan' },
        { logo: '../img/Band_Logos_Game/Der_Weg_Einer_Freiheit.png', question: 'Q4/10 What is this band?', correctAnswer: 'Der Weg Einer Freiheit' },
        { logo: '../img/Band_Logos_Game/Winterfylleth.png', question: 'Q5/10 What is this band?', correctAnswer: 'Winterfylleth' },
        { logo: '../img/Band_Logos_Game/Shinning.png', question: 'Q6/10 What is this band?', correctAnswer: 'Shinning' },
        { logo: '../img/Band_Logos_Game/Nightbringer.png', question: 'Q7/10 What is this band?', correctAnswer: 'Nightbringer' },
        { logo: '../img/Band_Logos_Game/Satanic_Warmaster.png', question: 'Q8/10 What is this band?', correctAnswer: 'Satanic Warmaster' },
        { logo: '../img/Band_Logos_Game/Acherontas.png', question: 'Q9/10 What is this band?', correctAnswer: 'Acherontas' },
        { logo: '../img/Band_Logos_Game/Thy_Art_is_Murder.png', question: 'Q10/10 What is this band?', correctAnswer: 'Thy Art is Murder' },
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;
const maxAttempts = 3;

const logoContainer = document.getElementById('logo');
const questionContainer = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const messageContainer = document.getElementById('message-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');
const difficultySelectionContainer = document.getElementById('difficulty-selection-container');
const gameContainer = document.getElementById('game-container');

function startGame(difficulty) {
    currentQuestions = questions[difficulty];
    difficultySelectionContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    logoContainer.src = question.logo;
    questionContainer.textContent = question.question;
    answerInput.value = '';
    answerInput.style.display = 'block';
    submitButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
    messageContainer.textContent = '';
    messageContainer.classList.remove('success');
    attempts = 0;
}

function checkAnswer() {
    const answer = answerInput.value.trim();
    const question = currentQuestions[currentQuestionIndex];

    if (answer.toLowerCase() === question.correctAnswer.toLowerCase()) {
        score += (maxAttempts - attempts);
        messageContainer.textContent = 'Correct answer! You can move on to the next question.';
        messageContainer.classList.add('success');
        nextButton.style.display = 'inline-block';
        answerInput.style.display = 'none';
        submitButton.style.display = 'none';
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            messageContainer.textContent = `Incorrect! The correct answer was: ${question.correctAnswer}`;
            nextButton.style.display = 'inline-block';
            answerInput.style.display = 'none';
            submitButton.style.display = 'none';
        } else {
            messageContainer.textContent = `Incorrect! ${maxAttempts - attempts} trial(s) left.`;
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuestions.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    gameContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultText.textContent = `Your score is ${score} / ${currentQuestions.length * maxAttempts}.`;
}

submitButton.onclick = checkAnswer;
nextButton.onclick = nextQuestion;
