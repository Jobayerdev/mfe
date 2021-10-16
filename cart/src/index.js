import faker from "faker"

const cartText = `<h4>You have ${faker.random.number()} items in your cart</h4>`

document.querySelector("#cart-dev").innerHTML = cartText
