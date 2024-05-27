const cart = document.querySelector('.cart');
const products = document.querySelectorAll('.product');
const quantityDec = document.querySelectorAll('.product__quantity-control_dec');
const quantityInc = document.querySelectorAll('.product__quantity-control_inc');


if (localStorage.getItem('cart')) {
    cart.style.display = 'block';
    cart.querySelector('.cart__products').innerHTML = localStorage.getItem('cart');
    const productList = cart.querySelectorAll('.cart__product');
    for (const product of productList) {
        removeButton(product);
    }
}

quantityDec.forEach((item) => {
    item.addEventListener('click', () => {
        const value = item.nextElementSibling;
        if (+value.textContent <= 0) return;
        value.textContent = +value.textContent - 1;
    });
});

quantityInc.forEach((item) => {
    item.addEventListener('click', () => {
        const value = item.previousElementSibling;
        value.textContent = +value.textContent + 1;
    });
});

for (const product of products) {
    const add = product.querySelector('.product__add');
    add.addEventListener('click', () => {
        const data = {
            id: product.dataset.id,
            count: +product.querySelector('.product__quantity-value').textContent.trim(),
            img: product.querySelector('.product__image').src,
        };
        product.querySelector('.product__quantity-value').textContent = 1;
        addToCart(data);
        cart.style.display = 'block';
    });
}

function addToCart(data) {
    const Products = Array.from(cart.querySelectorAll('.cart__product'));
    if (Products.some((item) => item.dataset.id === data.id)) {
        Products.forEach((item) => {
            if (item.dataset.id === data.id) {
                const count = item.querySelector('.cart__product-count');
                count.textContent = +count.textContent + data.count;
            }
        });
    } else {
        const product = document.createElement('div');
        product.classList.add('cart__product');
        product.dataset.id = data.id;
        img = document.createElement('img');
        img.classList.add('cart__product-image');
        img.src = data.img;
        count = document.createElement('div');
        count.classList.add('cart__product-count');
        count.textContent = data.count;
        product.append(img, count);
        cart.querySelector('.cart__products').append(product);
        removeButton(product);
    }

    updateLocalStorage();
}

function removeButton(product) {
    product.addEventListener('click', () => {
        const count = product.querySelector('.cart__product-count');
        if (+count.textContent <= 1) {
            product.remove();
        } else {
            count.textContent = +count.textContent - 1;
        }
        if (cart.querySelectorAll('.cart__product').length === 0) {
            cart.style.display = 'none';
        }

        updateLocalStorage();
    })
}

function updateLocalStorage() {
    if (!cart.innerHTML) return;
    localStorage.clear();
    localStorage.setItem('cart', cart.querySelector('.cart__products').innerHTML);
}
