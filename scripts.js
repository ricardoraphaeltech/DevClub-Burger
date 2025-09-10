const list = document.querySelector(".grid-container")

// Formatar os valores para a moeda R$
function formatCurrency(value) {
    const currencyFormatter = value.toLocaleString("pt-Br", {
        style: "currency",
        currency: "BRL",
    })

    return currencyFormatter
}

function showAll(productsArray) {
    let myLi = ""

    productsArray.forEach((product) => {
        myLi += `
            <li class="grid-item">
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price - (product.price * 0.10), // dar 10% de desconto
    }))

    showAll(newPrices)
}

function sumAllItens() {
    const totalPrice = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    const discount10Percent = menuOptions.reduce((acc, curr) => acc + curr.price - (curr.price * 0.10), 0)

    list.innerHTML = `
            <li class="grid-item">
                <p>O valor total dos produtos é: <span>${formatCurrency(totalPrice)}</span></p>
                <p>Com desconto de 10%: <span>${formatCurrency(discount10Percent)}</span></p>
            </li>
        `
}

function filterItens() {
    const filteredProducts = menuOptions.filter((product) => product.vegan === true)

    showAll(filteredProducts)
}