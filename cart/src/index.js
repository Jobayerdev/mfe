import faker from "faker"

const cartText = `<dev>You have ${faker.random.number()} items in your cart</dev>`

document.querySelector("#dev-cart").innerHTML = cartText
