import "./style.scss"

import App from "./App"
import React from "react"
import ReactDOM from "react-dom"

const mount = (el: Element) => {
	ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV === "development") {
	const devRoot = document.querySelector("#_dev_auth")
	if (devRoot) {
		mount(devRoot)
	}
}

export { mount }
