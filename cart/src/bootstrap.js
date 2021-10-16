import faker from "faker"

const mount = (el) => {
	const cartText = `<h4>You have ${faker.random.number()} items in your cart</h4>`

	el.innerHTML = cartText
}

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#dev-cart")

	if (el) {
		mount(el)
	}
}

export { mount }
