const url = "https://students.netoservices.ru/nestjs-backend/poll";
const poll = document.querySelector(".poll");

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.response);
        parseAnswers(data);
        addEvents(data);
    }
});

xhr.open("GET", url);
xhr.send();

function parseAnswers(data) {
    const pollTitle = poll.querySelector("#poll__title");
    const pollAnswers = poll.querySelector("#poll__answers");
    pollTitle.textContent = data.data.title;

    for (const answer of data.data.answers) {
        pollAnswers.insertAdjacentHTML("beforeend", `
        <button class="poll__answer">
            ${answer}
        </button>
        `);
    }
}

function addEvents(data) {
    const answers = Array.from(poll.querySelectorAll(".poll__answer"));
    for (const answer of answers) {
        answer.addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!");
            postAnswer(data, answers.indexOf(answer));
        })
    }
}

function postAnswer(data, answerIndex) {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`vote=${data.id}&answer=${answerIndex}`);

    xhr.onload = () => {
            const data = JSON.parse(xhr.response);
            parseStatistics(data);
    }
}

function parseStatistics(data) {
    console.log(data);
    let totalVotes = 0;
    for (const answer of data.stat) {
        totalVotes += answer.votes;
    }
    const pollAnswers = poll.querySelector("#poll__answers");
    pollAnswers.textContent = "";
    for (const answer of data.stat) {
        pollAnswers.insertAdjacentHTML("beforeend", `
        <p>
            ${answer.answer}: ${(answer.votes / totalVotes * 100).toFixed(2)}%
        </p>
        `);
    }
}
