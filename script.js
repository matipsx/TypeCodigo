const languageSelector = document.getElementById('language-selector');
const stageSelector = document.getElementById('stage-selector');
const stageButtons = document.getElementById('stage-buttons');
const snippetContainer = document.getElementById('snippet-container');
const snippetEl = document.getElementById('snippet');
const inputEl = document.getElementById('input');
const timerEl = document.getElementById('timer');

let currentLang = 'python';
let currentStage = 1;
let currentSnippet = '';
let timer;
let time = 0;

function loadSnippet() {
    const langSnippets = snippets[currentLang][currentStage];
    currentSnippet = langSnippets[Math.floor(Math.random() * langSnippets.length)];
    snippetEl.innerHTML = '';
    currentSnippet.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        charSpan.classList.add('dimmed'); // Add dimmed class initially
        snippetEl.appendChild(charSpan);
    });
    inputEl.value = '';
    inputEl.focus();
    resetTimer();
}

function handleInput() {
    const snippetChars = snippetEl.querySelectorAll('span');
    const inputChars = inputEl.value.split('');

    if (!timer) {
        startTimer();
    }

    let correct = true;
    snippetChars.forEach((charSpan, index) => {
        const char = inputChars[index];
        if (char == null) {
            charSpan.classList.remove('correct', 'incorrect', 'typed', 'dimmed');
            correct = false;
        } else if (char === charSpan.innerText) {
            charSpan.classList.add('correct', 'typed');
            charSpan.classList.remove('incorrect', 'dimmed');
        } else {
            charSpan.classList.add('incorrect', 'typed');
            charSpan.classList.remove('correct', 'dimmed');
            correct = false;
        }
    });

    if (correct) {
        stopTimer();
    }
}

function startTimer() {
    time = 0;
    timerEl.innerText = time.toFixed(2);
    timer = setInterval(() => {
        time += 0.01;
        timerEl.innerText = time.toFixed(2);
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    time = 0;
    timerEl.innerText = time.toFixed(2);
}

languageSelector.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        currentLang = e.target.dataset.lang;
        document.querySelectorAll('#language-selector button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        loadSnippet();
    }
});

stageButtons.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        currentStage = e.target.dataset.stage;
        document.querySelectorAll('#stage-buttons button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        loadSnippet();
    }
});

inputEl.addEventListener('input', handleInput);

// Initial load
document.querySelector('#language-selector button[data-lang="python"]').classList.add('active');
document.querySelector('#stage-buttons button[data-stage="1"]').classList.add('active');
loadSnippet();