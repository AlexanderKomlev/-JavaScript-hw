const url = "https://students.netoservices.ru/nestjs-backend/auth";
const signin = document.querySelector("#signin");
const form = signin.querySelector("#signin__form");
const welcome = document.querySelector("#welcome");
const quit = welcome.querySelector(".quit");
const user = document.querySelector("#user_id");

if (localStorage.getItem("user")) {
    welcome.classList.add("welcome_active");
    signin.classList.remove("signin_active");
    user.textContent = localStorage.getItem("user");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const xhr = request("POST", url, formData);
    xhr.onload = () => {
        const data = xhr.response;
        checkData(data);
    }

    form.reset();
});

quit.addEventListener("click", () => {
    localStorage.removeItem("user");
    welcome.classList.remove("welcome_active");
    signin.classList.add("signin_active");
});

function request(method, url, formData=null) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";
    if (formData) {
        xhr.send(formData);
    } else {
        xhr.send();
    }
    return xhr;
}

function checkData(data) {
    if (data.success) {
        user.textContent = data.user_id;
        welcome.classList.add("welcome_active");
        signin.classList.remove("signin_active");
        localStorage.setItem("user", data.user_id);
    } else {
        alert("Неверный логин/пароль");
    }
}
