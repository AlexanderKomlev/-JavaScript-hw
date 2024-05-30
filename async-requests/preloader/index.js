const loader = document.getElementById("loader");
const xhr = new XMLHttpRequest();

if (localStorage.getItem('data')) {
    parseData(JSON.parse(localStorage.getItem('data')), false);
    loader.classList.remove("loader_active");
}

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.response).response.Valute;
        parseData(data, true);
        loader.classList.remove("loader_active");
        console.log("OK")
    }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

function parseData(data, cache) {
    const items = document.getElementById("items");

    for (const key in data) {
        items.insertAdjacentHTML("beforeend", `
            <div class="item">
                <div class="item__code">
                    ${data[key].CharCode}
                </div>
                <div class="item__value">
                    ${data[key].Value}
                </div>
                <div class="item__currency">
                    ${data[key].Name}
                </div>
            </div>
        `);
    }

    if (cache) {
        localStorage.setItem('data', JSON.stringify(data));
    }
}
