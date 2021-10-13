import faker from "faker"

let products = ""

for (let i = 0; i < 3; i++) {
	const name = faker.commerce.productName()
	products += `<div>${name}</div>`
}

// document.querySelector('#dev-products').innerHTML = products
console.log(
	"🚀 ~ file: index.js ~ line 11 ~ document.querySelector('#dev-products')",
	document.querySelector("#dev-products")
)
