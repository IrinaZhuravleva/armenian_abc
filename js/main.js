const button = document.querySelector('button');
const nextButton = document.querySelector('button.nextButton');
const expressionNumber = document.querySelector('.expression-number');
const resetDataBtn = document.querySelectorAll('.reset-data');
const reloadBtn = document.querySelector('.reload-btn');
const answersBlock = document.querySelector('.answers');
const checkingCorrect = document.querySelector('.checking-correct');
const checkingIncorrect = document.querySelector('.checking-incorrect');

let questionCounter = 0;
let currentQuestionIndex = 0;
let length = base.length;
nextButton.disabled = true;

expressionNumber.innerText = `Буква: ${currentQuestionIndex + 1} из ${data.length}`;

function showQuestion() {
    let questionToShow = selectQuestion();
    nextButton.disabled = true;
    addQuestionToSite(questionToShow);
}

let tralivaliShuffled = shuffle(data);

let questions = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].question;
});
let answers = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].answer;
});

function selectQuestion() {
    return tralivaliShuffled[currentQuestionIndex];
}

let correct;

function addQuestionToSite(item) {
    document.querySelector('.question').innerHTML = item.question;
    correct = item.answer;
    let shuffledAnswers = shuffle(answers);
    let readyAnswers = shuffledAnswers.length > 5 ? shuffledAnswers.slice(1, 3) : shuffledAnswers;
  
    if (!readyAnswers.includes(item.answer)) {
        readyAnswers.push(item.answer);
        readyAnswers.splice(0, 1);
        readyAnswers = shuffle(readyAnswers);
    }
    
    readyAnswers.forEach(function (answer, index) {
        answersBlock.insertAdjacentHTML("beforeend", "<button>" + answer + "</button> &nbsp;")
    })
}

answersBlock.addEventListener('click', (e) => {
    let target = e.target;
    if (correct == target.innerText) {
        checkingCorrect.style.display = 'block';
        if (nextButton.disabled) {
            nextButton.disabled = false;
        }

        if (answersBlock.children[0].innerText === correct) {
            answersBlock.children[0].style.backgroundColor = 'lightgreen';
            answersBlock.children[0].style.border = 'lightgreen';
            answersBlock.children[1].style.display = 'none';
        } else {
            answersBlock.children[0].style.display = 'none';
            answersBlock.children[1].style.backgroundColor = 'lightgreen';
            answersBlock.children[1].style.border = 'lightgreen';
        }
    } else {
        checkingIncorrect.style.display = 'block';
        if (!nextButton.disabled) {
            nextButton.disabled = true;
        }
    }
})

function nextQuestion() {
    checkVisibility();
    document.querySelector('.question').innerHTML = tralivaliShuffled[currentQuestionIndex].question;
}

function nextButtonClickHandler() {
    if (currentQuestionIndex === tralivaliShuffled.length - 1) {
        clearAnswersHTML();
        if (checkingCorrect.style.display == 'block') {
            checkingCorrect.style.display = 'none';
        }
        nextButton.style.display = 'none';
        document.querySelector('.question').innerHTML = `Поздравляем! Вы справились))). Хотите продолжить?<button style="color: black; margin-top: 20px; background-color: #ffffff;  " onClick="location.reload()">Повторить</button>`;
        checkingIncorrect.style.display = 'none';
        reloadBtn.style.display = 'none'; 
    } else {
        clearAnswersHTML();
        currentQuestionIndex++;
     
        document.querySelector('.expression-number').innerText = `Номер слова: ${currentQuestionIndex + 1} из ${tralivaliShuffled.length}`;
        checkVisibility()
        showQuestion();
    }
}

function clearAnswersHTML() {
    answersBlock.innerHTML = "";
}

nextButton.addEventListener('click', function () {
    questionCounter++;
    nextButtonClickHandler();
})

showQuestion();

//тасование фишера-йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
}

function checkVisibility() {
    document.querySelectorAll('.checking').forEach(function (item) {
        if (item.style.display == 'block') {
            item.style.display = 'none';
        }
    });
}

function resetData() {
    window.localStorage.removeItem('dataABC');
    location.reload();
}



[...resetDataBtn].forEach(function (item) {
    item.addEventListener('click', () => {
        resetData();
    });
});

reloadBtn.addEventListener('click', () => {
    location.reload();
});

//случайное число 
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
