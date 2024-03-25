const API_URL = 'https://fakestoreapi.com/products';
const loader = document.querySelector('.loader');
const wrapper = document.querySelector('.wrapper');
const payment = document.querySelector('.payment');
const tolov = document.querySelector('.btn-oplata');
const btnclose = document.querySelector('.btn-close');
const body = document.querySelector('body')




////shadow card copy
window.addEventListener("DOMContentLoaded", () => {
    let copyCount = 20;

    const wrapperDiv = document.querySelector(".wrapper");

    for (let i = 0; i < copyCount; i++) {
        const copiedElement = document.createElement("div");
        copiedElement.classList.add("loader");
        wrapperDiv.appendChild(copiedElement);
    }

    const containerDiv = document.querySelector(".container");
    containerDiv.appendChild(wrapperDiv);
});


///////api fetch

async function fetchdata(api) {
    let data = await fetch(api);
    data
        .json()
        .then(res => Displaydata(res))
        .catch(err => console.log(err))
        .finally(() => {
            wrapper.style.display = "none"
        });

    console.log(data);
}

fetchdata(API_URL);

//////////////////////cardSection
const savatchaBtn = document.querySelector('.savatcha-btn');
const savatchaCount = document.querySelector('.savatcha-count');
const savatchagaSave = document.querySelector('.savatchagaSave');
const closebtnb = document.querySelector('.close-btn-b');

let totalItemsInCart = 0;

function Displaydata(data) {
    let output = document.querySelector('.cards-wrpper');
    let fragment = document.createDocumentFragment();

    data.forEach((el) => {
        let div = document.createElement('div');
        div.className = 'card-content-wrapper';
        div.innerHTML = `
            <span class="card_badge count">0</span>
            <div class="img-wrapper">
                <img src="${el.image}" alt="" width="200px" height="250px">
            </div>
            <div class="rating">
                <p><span class="categoriya">${el.category}</span></p>
                <img src="https://static.tildacdn.com/tild3539-6235-4539-b665-313336323564/tia-2.png" width="100px" alt="">
                <p>${el.rating.rate}</p>
            </div>
            <div class="text-wrapper">
                <h3>${el.title}</h3>
                <p class="p-text" title="${el.description}">${el.description}</p>
            </div>
            <div class="narx">
                <b>price:${el.price}$</b>
                <p>count:${el.rating.count}</p>
            </div>
            <div class="btn-wrapper">
                <button class="btn btn-outline-primary btn-buy">Savatchaga qoshish</button>
                <button class="btn btn-outline-primary ">saqalsh</button>
            </div>
        `;

        const count = div.querySelector('.count');
        const savatchaBtns = div.querySelectorAll('.btn-buy');

        savatchaBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                let country = parseInt(count.innerText);
                country++;
                count.innerText = country;
                count.style.display = 'block';
                totalItemsInCart++;
                updateCartCount();
            });

        });

        fragment.appendChild(div);
    });

    output.appendChild(fragment);
}

function updateCartCount() {
    savatchaCount.innerHTML = totalItemsInCart;
}

updateCartCount();

savatchaBtn.addEventListener('click', () => {
    savatchagaSave.style.display = 'block';

})

closebtnb.addEventListener('click', () => {
    savatchagaSave.style.display = 'none';

})



///////////////////////payment////////////////////////////////
tolov.addEventListener('click', () => {
    payment.style.display = 'block';
    body.style.background = '#ccc'
})

btnclose.addEventListener('click', () => {
    payment.style.display = 'none';
    body.style.background = '#f4f7fd'
})






