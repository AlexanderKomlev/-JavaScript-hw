const progress = document.getElementById("progress-bar");
const form = document.getElementById("form");
const uploading = document.querySelector(".uploading");

let formData;
document.getElementById("file").onchange = function () {
    const fileDesc = document.querySelector(".input__wrapper-desc");
    let fileName = this.value.split("\\");
    fileName = fileName[fileName.length - 1];
    fileDesc.textContent = fileName;
    formData = new FormData(form);
    progress.value = 0;
    uploading.innerText = "";
};

const xhr = new XMLHttpRequest();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    xhr.open("POST", form.action);
    xhr.send(formData);
})

xhr.upload.onprogress = (event) => {
    uploading.innerText = `Загружено ${(event.loaded / 1024**2).toFixed(1)} из ${(event.total / 1024**2).toFixed(1)} Мб`;
    const percent = (event.loaded / event.total).toFixed(3);
    progress.value = percent;
}

xhr.upload.onload = () => {
    uploading.innerText = "Загрузка завершена";
}